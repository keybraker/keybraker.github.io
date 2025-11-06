import HeroSection from '@/components/photography/HeroSection';
import PhotoGallerySection from '@/components/photography/PhotoGallerySection';
import LightboxViewer from '@/components/photography/LightboxViewer';
import type { Photo, PhotoWithCategory, Section } from '@/types/photo';
import fs from 'fs';
import path from 'path';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const exifParser = require('exif-parser');

export async function getStaticProps() {
    const photosDir = path.join(process.cwd(), 'public', 'photos', 'personal');
    const commissionedDir = path.join(process.cwd(), 'public', 'photos', 'commissioned');
    const watermarkedDir = path.join(process.cwd(), 'public', 'photos-watermarked');

    // Read regular photos
    const files = fs.readdirSync(photosDir).filter(file =>
        (file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.jpeg') || file.endsWith('.JPEG')) &&
        !fs.statSync(path.join(photosDir, file)).isDirectory()
    );

    // Read commissioned photos
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
        try {
            const parser = exifParser.create(buffer);
            const result = parser.parse();
            const focalLength = result.tags.FocalLength;
            const fNumber = result.tags.FNumber;
            const exposureTime = result.tags.ExposureTime;
            const iso = result.tags.ISO;
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
            section: country
        };
    };

    const tempPhotos = [
        ...files.map((file, index) => processPhoto(file, false, photosDir, index)),
        ...commissionedFiles.map((file, index) => processPhoto(file, true, commissionedDir, files.length + index))
    ].filter(Boolean) as { id: number; caption: string; settings: string; location: string; country: string; image: string; originalImage: string; isCommissioned: boolean; section: string }[];

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
            isCommissioned: tp.isCommissioned
        });
    });
    const sections = Array.from(sectionMap.entries()).map(([title, photos]) => ({ title, photos }));
    return {
        props: {
            sections
        }
    };
}

export default function PhotographyPage({ sections }: { sections: Section[] }) {
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState<PhotoWithCategory | null>(null);
    const [filter, setFilter] = useState<string>("All");
    const [showCommissioned, setShowCommissioned] = useState(false);
    const [showInfo, setShowInfo] = useState(!isMobile);
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [displayCount, setDisplayCount] = useState(12);
    const [isCarouselMode, setIsCarouselMode] = useState(false);
    const observerTargetRef = useRef<HTMLDivElement>(null);
    const hashCheckedRef = useRef(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Set showInfo based on mobile state after it's determined
    useEffect(() => {
        setShowInfo(!isMobile);
    }, [isMobile]);

    const close = useCallback(() => {
        setActive(null);
        setShowInfo(!isMobile);
        setShowShortcuts(false);
        setIsCarouselMode(false);
    }, [isMobile]);

    const allPhotoObjects: PhotoWithCategory[] = useMemo(() =>
        sections.flatMap(s => {
            return s.photos.map((p, index) => {
                // Alternating pattern with randomization to avoid clustering
                // Pattern: P-P-L-P-P-L (portrait-portrait-landscape repeats)
                // This ensures landscapes are spaced out and no long stretches of same orientation
                const positionInPattern = index % 6;
                let isLandscape: boolean;

                if (positionInPattern === 2 || positionInPattern === 5) {
                    // Landscape positions in the pattern
                    isLandscape = true;
                } else {
                    // Portrait positions
                    isLandscape = false;
                }

                return {
                    ...p,
                    category: s.title,
                    orientation: isLandscape ? 'landscape' as const : 'portrait' as const
                };
            });
        }),
        [sections]
    );
    const allPhotos: PhotoWithCategory[] = useMemo(() => allPhotoObjects, [allPhotoObjects]);

    const filtered = useMemo(() => {
        if (showCommissioned) {
            return allPhotos.filter(p => p.isCommissioned);
        }
        const regularPhotos = allPhotos.filter(p => !p.isCommissioned);
        return filter === "All" ? regularPhotos : regularPhotos.filter(p => p.category === filter);
    }, [allPhotos, filter, showCommissioned]);
    const activeIndex = active ? filtered.findIndex(p => p.id === active.id) : -1;
    const hasPrev = activeIndex > 0;
    const hasNext = activeIndex >= 0 && activeIndex < filtered.length - 1;
    const prevPhoto: PhotoWithCategory | null = hasPrev ? filtered[activeIndex - 1] : null;
    const nextPhoto: PhotoWithCategory | null = hasNext ? filtered[activeIndex + 1] : null;

    const goPrev = useCallback(() => {
        if (hasPrev) {
            setActive(filtered[activeIndex - 1]);
        }
    }, [hasPrev, activeIndex, filtered]);
    const goNext = useCallback(() => {
        if (hasNext) {
            setActive(filtered[activeIndex + 1]);
        } else if (activeIndex >= 0 && filtered.length > 0) {
            // Loop back to the start
            setActive(filtered[0]);
        }
    }, [hasNext, activeIndex, filtered]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (active) {
            const h = `#photo-${active.id}`;
            if (window.location.hash !== h) history.replaceState(null, '', h);
        } else if (window.location.hash.startsWith('#photo-')) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    }, [active]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const hash = window.location.hash;
        if (hash.startsWith('#photo-')) {
            const id = parseInt(hash.replace('#photo-', ''), 10);
            const found = allPhotos.find(p => p.id === id);
            if (found) {
                setActive(found);
                hashCheckedRef.current = true;
            }
        }
    }, [allPhotos]);

    // Check hash on initial mount - this runs only once
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (hashCheckedRef.current) return; // Already checked

        const hash = window.location.hash;
        if (hash.startsWith('#photo-')) {
            // Hash is present, check again when allPhotos is loaded
            // by triggering the above effect
        }
    }, []);

    useEffect(() => {
        if (active && !filtered.some(p => p.id === active.id)) {
            setActive(null);
        }
    }, [filter, active, filtered, showCommissioned]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        }
        if (active) {
            document.addEventListener("keydown", onKey);
            document.documentElement.classList.add("overflow-hidden");
        } else {
            document.documentElement.classList.remove("overflow-hidden");
        }
        return () => {
            document.removeEventListener("keydown", onKey);
            document.documentElement.classList.remove("overflow-hidden");
        };
    }, [active, close, goPrev, goNext]);

    // Lazy loading with Intersection Observer
    useEffect(() => {
        const currentTarget = observerTargetRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && displayCount < filtered.length) {
                    setDisplayCount(prev => Math.min(prev + 12, filtered.length));
                }
            },
            { threshold: 0.1, rootMargin: '200px' }
        );

        if (currentTarget) {
            observer.observe(currentTarget);
        }

        return () => {
            if (currentTarget) {
                observer.unobserve(currentTarget);
            }
        };
    }, [filtered.length, displayCount]);

    // Reset display count when filter changes
    useEffect(() => {
        setDisplayCount(12);
    }, [filter, showCommissioned]);

    return (
        <main className="w-full h-full">
            <div>
                <title>Ioannis Tsiakkas photography</title>
                <meta name="description" content="A curated photography showcase." />
                <meta name="robots" content="index,follow" />
            </div>

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
                    filtered={filtered}
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
                    filtered={filtered}
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
