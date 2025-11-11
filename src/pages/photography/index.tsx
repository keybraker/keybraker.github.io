import HeroSection from '@/components/photography/HeroSection';
import LightboxViewer from '@/components/photography/LightboxViewer';
import PhotoGallerySection from '@/components/photography/PhotoGallerySection';
import { groupPhotosByYearMonth } from '@/functions/groupPhotosByYearMonth';
import { useLazyLoading } from '@/hooks/useLazyLoading';
import { useLightboxState } from '@/hooks/useLightboxState';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { usePhotoFiltering } from '@/hooks/usePhotoFiltering';
import { usePhotoNavigation } from '@/hooks/usePhotoNavigation';
import type { Photo, PhotoWithCategory, Section } from '@/types/photo';
import fs from 'fs';
import sizeOf from 'image-size';
import Head from 'next/head';
import path from 'path';
import { useMemo, useState } from "react";

const exifParser = require('exif-parser');

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

    const processPhoto = (file: string, isCommissioned: boolean, dirPath: string, index: number) => {
        const name = file.replace(/\.(jpg|JPG|jpeg|JPEG)$/, '');
        const parts = name.split('-');
        if (parts.length < 3) return null;
        const country = parts.pop()!.replace(/_/g, ' ');
        const location = parts.pop()!.replace(/_/g, ' ');
        const title = parts.join('-').replace(/_/g, ' ');

        const watermarkedFile = file.replace(/\.(jpg|JPG|jpeg|JPEG)$/, '.png');
        const watermarkedPath = path.join(watermarkedDir, isCommissioned ? `commissioned/${watermarkedFile}` : `personal/${watermarkedFile}`);
        const useWatermarked = fs.existsSync(watermarkedPath);

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

        return {
            id: index + 1,
            caption: title,
            settings,
            location,
            country,
            image: useWatermarked ? watermarkedPhotoPath : photoPath,
            originalImage: photoPath,
            isCommissioned,
            date,
            section: country,
            width,
            height
        };
    };

    const tempPhotos = [
        ...files.map((file, index) => processPhoto(file, false, photosDir, index)),
        ...commissionedFiles.map((file, index) => processPhoto(file, true, commissionedDir, files.length + index))
    ].filter(Boolean) as { id: number; caption: string; settings: string; location: string; country: string; image: string; originalImage: string; isCommissioned: boolean; section: string; date?: string; width: number; height: number; }[];

    const sectionMap = new Map<string, Photo[]>();
    tempPhotos.forEach(tp => {
        if (!sectionMap.has(tp.section)) sectionMap.set(tp.section, []);
        sectionMap.get(tp.section)!.push({
            id: tp.id,
            caption: tp.caption,
            settings: tp.settings,
            location: tp.location,
            country: tp.country,
            image: tp.image,
            originalImage: tp.originalImage,
            isCommissioned: tp.isCommissioned,
            date: tp.date,
            width: tp.width,
            height: tp.height
        } satisfies Photo);
    });
    const sections = Array.from(sectionMap.entries()).map(([title, photos]) => ({ title, photos }));
    return {
        props: {
            sections
        }
    };
}

export default function PhotographyPage({ sections }: { sections: Section[] }) {
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

    const orderedFiltered = useMemo(() => {
        const grouped = groupPhotosByYearMonth(filtered);
        return grouped.flatMap(g => g.months.flatMap(m => m.photos));
    }, [filtered]);

    const {
        activeIndex,
        hasPrev,
        hasNext,
        prevPhoto,
        nextPhoto,
        goPrev,
        goNext
    } = usePhotoNavigation(active, setActive, orderedFiltered, isMobile);

    const {
        showInfo,
        setShowInfo,
        showShortcuts,
        setShowShortcuts,
        isCarouselMode,
        setIsCarouselMode
    } = useLightboxState(isMobile);

    const { observerTargetRef } = useLazyLoading(orderedFiltered, displayCount, setDisplayCount);

    const close = () => {
        setActive(null);
        setShowShortcuts(false);
        setIsCarouselMode(false);
    };

    return (
        <main className="w-full h-full">
            <Head>
                <title>Ioannis Tsiakkas photography</title>
                <meta name="description" content="My photography portfolio." />
                <meta name="robots" content="index,follow" />
                {sections.length > 0 && sections[0].photos.length > 0 && (
                    <>
                        <link
                            rel="preload"
                            as="image"
                            href={sections[0].photos[0].image}
                            imageSrcSet={sections[0].photos[0].image}
                        />
                    </>
                )}
            </Head>

            <div id="top" className="relative flex flex-col gap-8">
                <HeroSection
                    sections={sections}
                    showCommissioned={showCommissioned}
                    isMobile={isMobile}
                />

                <PhotoGallerySection
                    sections={sections}
                    filter={filter}
                    setFilter={setFilter}
                    showCommissioned={showCommissioned}
                    setShowCommissioned={setShowCommissioned}
                    filtered={orderedFiltered}
                    displayCount={displayCount}
                    onOpen={setActive}
                    sentinelRef={observerTargetRef}
                    isMobile={isMobile}
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
                    showSearchBox={false}
                    setShowSearchBox={() => { }}
                />
            )}
        </main>
    );
}
