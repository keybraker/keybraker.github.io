import HeroSection from '@/components/photography/HeroSection';
import LightboxViewer from '@/components/photography/LightboxViewer';
import PhotoGallerySection from '@/components/photography/PhotoGallerySection';
import { ensurePhotoThumbnail } from '@/functions/ensurePhotoThumbnail';
import { groupPhotosByYearMonth } from '@/functions/groupPhotosByYearMonth';
import { useLazyLoading } from '@/hooks/useLazyLoading';
import { useLightboxState } from '@/hooks/useLightboxState';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { usePhotoFiltering } from '@/hooks/usePhotoFiltering';
import { usePhotoNavigation } from '@/hooks/usePhotoNavigation';
import type { Photo, PhotoWithCategory, Section } from '@/types/photo';
import Seo, { SITE_NAME, SITE_URL, toAbsoluteUrl } from '@/components/Seo';
import fs from 'fs';
import sizeOf from 'image-size';
import path from 'path';
import { useMemo, useState } from "react";

const exifParser = require('exif-parser');

const seoTitle = 'Photography — Ioannis Tsiakkas';
const seoDescription =
    'A personal photography portfolio by Ioannis Tsiakkas: landscapes, city strolls and travel photography from Greece, Portugal, Germany and beyond.';

function slugifyPhotoName(file: string): string {
    const name = file.replace(/\.(jpg|JPG|jpeg|JPEG)$/, '');
    return name
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'photo';
}

export async function getStaticProps() {
    const photosDir = path.join(process.cwd(), 'public', 'photos', 'personal');
    const commissionedDir = path.join(process.cwd(), 'public', 'photos', 'commissioned');
    const watermarkedDir = path.join(process.cwd(), 'public', 'photos-watermarked');

    const files = fs.readdirSync(photosDir).filter(file =>
        (file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.jpeg') || file.endsWith('.JPEG')) &&
        !fs.statSync(path.join(photosDir, file)).isDirectory()
    );

    let commissionedFiles: string[] = [];
    if (fs.existsSync(commissionedDir)) {
        commissionedFiles = fs.readdirSync(commissionedDir).filter(file =>
            file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.jpeg') || file.endsWith('.JPEG')
        );
    }

    const processPhoto = async (file: string, isCommissioned: boolean, dirPath: string, index: number) => {
        const name = file.replace(/\.(jpg|JPG|jpeg|JPEG)$/, '');
        const parts = name.split('-');
        if (parts.length < 3) return null;
        let trip: string | undefined = undefined;
        // if there's an extra segment after country, treat it as trip
        if (parts.length >= 4) {
            trip = parts[parts.length - 1].replace(/_/g, ' ');
        }
        if (trip) parts.pop();
        const country = parts.pop()!.replace(/_/g, ' ');
        const location = parts.pop()!.replace(/_/g, ' ');
        const title = parts.join('-').replace(/_/g, ' ');

        const watermarkedFile = file.replace(/\.(jpg|JPG|jpeg|JPEG)$/, '.png');
        const watermarkedPath = path.join(watermarkedDir, isCommissioned ? `commissioned/${watermarkedFile}` : `personal/${watermarkedFile}`);
        const useWatermarked = fs.existsSync(watermarkedPath);
        const displaySourcePath = useWatermarked ? watermarkedPath : path.join(dirPath, file);

        const buffer = fs.readFileSync(path.join(dirPath, file));
        let settings = '';
        let date: string | undefined = undefined;
        let width = 0;
        let height = 0;

        try {
            const dimensions = sizeOf(new Uint8Array(buffer));
            if (dimensions.width && dimensions.height) {
                width = dimensions.width;
                height = dimensions.height;
            }
        } catch (e) {
            // ignore
        }

        try {
            const parser = exifParser.create(buffer);
            const result = parser.parse();
            const focalLength = result.tags.FocalLength;
            const fNumber = result.tags.FNumber;
            const exposureTime = result.tags.ExposureTime;
            const iso = result.tags.ISO;

            const dateRaw: string | number | undefined = (result.tags.DateTimeOriginal || result.tags.CreateDate);
            if (dateRaw) {
                if (typeof dateRaw === 'number') {
                    date = new Date(dateRaw * 1000).toISOString();
                } else if (typeof dateRaw === 'string') {
                    const normalized = dateRaw.replace(/:/g, '-').replace(' ', 'T');
                    const parsed = new Date(normalized);
                    if (!isNaN(parsed.getTime())) date = parsed.toISOString();
                }
            }

            if (focalLength && fNumber && exposureTime && iso) {
                const shutter = exposureTime >= 1 ? `${exposureTime}s` : `1/${Math.round(1 / exposureTime)}s`;
                settings = `${focalLength}mm · f/${fNumber} · ${shutter} · ISO ${iso}`;
            }
        } catch (e) {
            // ignore - EXIF might not be available
        }

        const photoPath = isCommissioned ? `/photos/commissioned/${file}` : `/photos/personal/${file}`;
        const watermarkedPhotoPath = isCommissioned ? `/photos-watermarked/commissioned/${watermarkedFile}` : `/photos-watermarked/personal/${watermarkedFile}`;
        const thumbnailImage = await ensurePhotoThumbnail({
            sourcePath: displaySourcePath,
            fileName: useWatermarked ? watermarkedFile : file,
            folder: isCommissioned ? 'commissioned' : 'personal'
        }).catch(() => (useWatermarked ? watermarkedPhotoPath : photoPath));

        return {
            id: slugifyPhotoName(file),
            legacyId: index + 1,
            caption: title,
            settings,
            location,
            country,
            trip,
            image: thumbnailImage,
            originalImage: photoPath,
            isCommissioned,
            date,
            section: country,
            width,
            height
        };
    };

    const tempPhotos = (await Promise.all([
        ...files.map((file, index) => processPhoto(file, false, photosDir, index)),
        ...commissionedFiles.map((file, index) => processPhoto(file, true, commissionedDir, files.length + index))
    ])).filter(Boolean) as { id: string; legacyId: number; caption: string; settings: string; location: string; country: string; trip?: string; image: string; originalImage: string; isCommissioned: boolean; section: string; date?: string; width: number; height: number; }[];

    const usedIds = new Set<string>();
    tempPhotos.forEach(tp => {
        if (!usedIds.has(tp.id)) {
            usedIds.add(tp.id);
            return;
        }
        let suffix = 2;
        while (usedIds.has(`${tp.id}-${suffix}`)) suffix += 1;
        tp.id = `${tp.id}-${suffix}`;
        usedIds.add(tp.id);
    });

    const sectionMap = new Map<string, Photo[]>();
    tempPhotos.forEach(tp => {
        if (!sectionMap.has(tp.section)) sectionMap.set(tp.section, []);
        sectionMap.get(tp.section)!.push({
            id: tp.id,
            legacyId: tp.legacyId,
            caption: tp.caption,
            settings: tp.settings,
            location: tp.location,
            country: tp.country,
            trip: tp.trip,
            image: tp.image,
            originalImage: tp.originalImage,
            isCommissioned: tp.isCommissioned,
            date: tp.date,
            width: tp.width,
            height: tp.height
        } satisfies Photo);
    });
    const sections = Array.from(sectionMap.entries()).map(([title, photos]) => ({ title, photos }));
    const tripsSet = new Set<string>();
    tempPhotos.forEach(tp => { if (tp.trip) tripsSet.add(tp.trip); });
    const trips = Array.from(tripsSet.values());
    return {
        props: {
            sections,
            trips
        }
    };
}

export default function PhotographyPage({ sections, trips }: { sections: Section[]; trips: string[] }) {
    const { isMobile } = useMobileDetection();
    const [active, setActive] = useState<PhotoWithCategory | null>(null);

    const {
        filtered,
        filter,
        setFilter,
        showCommissioned,
        setShowCommissioned,
        displayCount,
        setDisplayCount
    } = usePhotoFiltering(sections);

    const groupedFiltered = useMemo(() => {
        return groupPhotosByYearMonth(filtered);
    }, [filtered]);

    const orderedFiltered = useMemo(() => {
        return groupedFiltered.flatMap(g => g.months.flatMap(m => m.photos));
    }, [groupedFiltered]);

    const personalPhotos = useMemo(
        () => sections.flatMap(section => section.photos).filter(photo => !photo.isCommissioned),
        [sections]
    );

    const heroPhoto = orderedFiltered[0];
    const heroImageAlt = heroPhoto
        ? `${heroPhoto.caption} — ${heroPhoto.location}, ${heroPhoto.country}`
        : 'Photography by Ioannis Tsiakkas';

    const photographyJsonLd = useMemo(
        () => ({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: seoTitle,
            description: seoDescription,
            url: `${SITE_URL}/photography`,
            isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_URL}/` },
            mainEntity: {
                '@type': 'ImageGallery',
                name: 'Photography portfolio',
                url: `${SITE_URL}/photography`,
                image: personalPhotos.map(photo => toAbsoluteUrl(photo.originalImage)),
            },
        }),
        [personalPhotos]
    );

    const {
        showInfo,
        setShowInfo,
        showShortcuts,
        setShowShortcuts,
        isCarouselMode,
        setIsCarouselMode
    } = useLightboxState(isMobile);

    const {
        activeIndex,
        hasPrev,
        hasNext,
        prevPhoto,
        nextPhoto,
        goPrev,
        goNext
    } = usePhotoNavigation(active, setActive, orderedFiltered, showShortcuts);

    const { observerTargetRef, isLoading } = useLazyLoading(orderedFiltered, displayCount, setDisplayCount);

    const close = () => {
        setActive(null);
        setShowShortcuts(false);
        setIsCarouselMode(false);
    };

    return (
        <main className="w-full h-full">
            <Seo
                title={seoTitle}
                description={seoDescription}
                path="/photography"
                image={heroPhoto?.image}
                imageAlt={heroImageAlt}
                preloadImage={heroPhoto?.image}
                jsonLd={photographyJsonLd}
            />

            <div id="top" className="relative flex flex-col gap-8">
                <HeroSection
                    sections={sections}
                    showCommissioned={showCommissioned}
                />

                <PhotoGallerySection
                    sections={sections}
                    filter={filter}
                    setFilter={setFilter}
                    showCommissioned={showCommissioned}
                    setShowCommissioned={setShowCommissioned}
                    filtered={orderedFiltered}
                    groupedPhotos={groupedFiltered}
                    displayCount={displayCount}
                    onOpen={setActive}
                    sentinelRef={observerTargetRef}
                    isMobile={isMobile}
                    trips={trips}
                    isLoading={isLoading}
                />
            </div>

            {active && (
                <LightboxViewer
                    active={active}
                    activeIndex={activeIndex}
                    filtered={orderedFiltered}
                    prevPhoto={prevPhoto}
                    nextPhoto={nextPhoto}
                    goNext={goNext}
                    goPrev={goPrev}
                    hasNext={hasNext}
                    hasPrev={hasPrev}
                    close={close}
                    showInfo={showInfo}
                    setShowInfo={setShowInfo}
                    showShortcuts={showShortcuts}
                    setShowShortcuts={setShowShortcuts}
                    isMobile={isMobile}
                    isCarouselMode={isCarouselMode}
                    setIsCarouselMode={setIsCarouselMode}
                />
            )}
        </main>
    );
}
