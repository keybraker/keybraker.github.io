import MyWords from "@/components/myWords";
import { HiDownload } from "@react-icons/all-files/hi/HiDownload";
import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
import { HiOutlineEyeOff } from "@react-icons/all-files/hi/HiOutlineEyeOff";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { MdInfo } from "@react-icons/all-files/md/MdInfo";
import { MdInfoOutline } from "@react-icons/all-files/md/MdInfoOutline";
import fs from 'fs';
import Image from "next/image";
import path from 'path';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const exifParser = require('exif-parser');

type Photo = { id: number; caption: string; settings: string; location: string; country: string; image: string; originalImage: string; isCommissioned: boolean };
type Section = { title: string; photos: Photo[] };

const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

type PhotoWithCategory = Photo & { category: string; orientation: 'portrait' | 'landscape' };
// ============================================================================
// WATERMARK UTILITY FUNCTIONS
// ============================================================================

/**
 * Applies LSB (Least Significant Bit) steganography to embed hidden copyright text
 * @param imageData - Canvas ImageData object containing pixel data
 * @param message - The hidden message to embed
 * @returns Modified ImageData with embedded message
 */
function applyLSBSteganography(imageData: ImageData, message: string): ImageData {
    const data = imageData.data;

    const messageBinary = message.split('').map(char =>
        char.charCodeAt(0).toString(2).padStart(8, '0')
    ).join('');

    const header = "11111111" + messageBinary.length.toString(2).padStart(16, '0');
    const fullBinary = header + messageBinary;

    let bitIndex = 0;
    for (let i = 0; i < data.length && bitIndex < fullBinary.length; i += 4) {
        if (bitIndex < fullBinary.length) {
            // Modify the least significant bit of the red channel
            data[i] = (data[i] & 0xFE) | parseInt(fullBinary[bitIndex]);
            bitIndex++;
        }
    }

    return imageData;
}

/**
 * Draws visible watermark text on canvas
 * @param ctx - Canvas 2D context
 * @param canvas - Canvas element
 * @param text - Watermark text to display
 */
function applyVisibleWatermark(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, text: string): void {
    // Calculate font size based on image width to maintain consistency across portrait and landscape
    // Reference: 1000px width = 24px font
    const baseFontSize = 24;
    const referenceWidth = 1000;
    const fontSize = Math.max(Math.round((canvas.width / referenceWidth) * baseFontSize), 16);

    ctx.font = `bold italic ${fontSize}px "Playfair Display", "Times New Roman", serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    // Scale shadow blur proportionally to font size
    const shadowBlur = Math.max(Math.round(fontSize * 0.33), 4);
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = shadowBlur;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = Math.max(Math.round(fontSize * 0.08), 2);

    // Draw watermark at the bottom center with proportional padding
    const x = canvas.width / 2;
    const padding = Math.max(Math.round(fontSize * 0.6), 10);
    const y = canvas.height - padding;
    ctx.fillText(text, x, y);
}

/**
 * Loads an image and applies both LSB steganography and visible watermark
 * @param imageSrc - Source URL of the image
 * @param hiddenMessage - Hidden message for steganography
 * @param visibleText - Visible watermark text
 * @returns Promise resolving to canvas element with watermarked image
 */
async function createWatermarkedImage(
    imageSrc: string,
    hiddenMessage: string,
    visibleText: string
): Promise<HTMLCanvasElement> {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    // Load image
    const img = new window.Image();
    img.crossOrigin = 'anonymous';

    await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageSrc;
    });

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const watermarkedData = applyLSBSteganography(imageData, hiddenMessage);
    ctx.putImageData(watermarkedData, 0, 0);

    applyVisibleWatermark(ctx, canvas, visibleText);

    return canvas;
}

/**
 * Downloads the image with dynamically applied watermarks
 * Applies both LSB steganography and visible watermark at download time
 */
async function downloadImageWithWatermark(photo: Photo) {
    try {
        const hiddenMessage = `© ${new Date().getFullYear()} Ioannis Tsiakkas. All rights reserved. Original photo: ${photo.caption}`;
        const visibleText = 'Ioannis Tsiakkas';

        const canvas = await createWatermarkedImage(
            photo.originalImage,
            hiddenMessage,
            visibleText
        );

        canvas.toBlob((blob) => {
            if (!blob) {
                console.error('Failed to create blob from canvas');
                return;
            }
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${photo.caption.replace(/\s+/g, '_')}-Ioannis_Tsiakkas.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, 'image/jpeg', 0.85);
    } catch (error) {
        console.error('Failed to download image with watermark:', error);
    }
}

function commissionInfo() {
    return (
        <section aria-labelledby="contact-heading" className="w-full text-start">
            <div className="flex flex-col gap-6">
                {MyWords({ text: "Commissioned Works" })}
                <div className="flex flex-col gap-0 text-base md:text-lg leading-relaxed text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 font-light">
                    <p>Available for event photography, product shoots, and commercial projects, get in touch to discuss your photography needs.</p>
                    <p>For inquiries and bookings, please contact me <a href="mailto:iantsiakkas@gmail.com" className="underline hover:opacity-80 transition-opacity">here</a>.</p>
                </div>
            </div>
        </section>
    )
}

function PhotoCard({ photo, onOpen }: { photo: PhotoWithCategory; onOpen: (p: PhotoWithCategory) => void }) {
    const imgSrc = photo.image;
    return (
        <button
            type="button"
            onClick={() => onOpen(photo)}
            aria-label="Open image fullscreen"
            className={`
                group relative w-full h-full
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40
                rounded-sm overflow-hidden ring-1 ring-tsiakkas-dark/10 dark:ring-tsiakkas-light/10
                bg-white/40 dark:bg-white/5 backdrop-blur-[2px] transition-colors
            `}
        >
            <div className="relative w-full h-full">
                <Image
                    src={imgSrc}
                    alt={photo.caption}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className={`object-cover select-none transition duration-500 ease-out group-hover:blur-sm group-focus-visible:blur-sm`}
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                />
            </div>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 py-6 text-center
                bg-black/50 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                <div className="text-xl font-light italic tracking-wide text-tsiakkas-light drop-shadow-md">
                    {photo.location}, {photo.country}
                </div>
            </div>
        </button>
    );
}

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
    const [isZoomed, setIsZoomed] = useState(false);
    const [showInfo, setShowInfo] = useState(!isMobile);
    const [showShortcuts, setShowShortcuts] = useState(false);
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
        setIsZoomed(false);
        setShowInfo(!isMobile);
        setShowShortcuts(false);
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

    const goPrev = useCallback(() => {
        if (hasPrev) {
            setActive(filtered[activeIndex - 1]);
            setIsZoomed(false);
        }
    }, [hasPrev, activeIndex, filtered]);
    const goNext = useCallback(() => {
        if (hasNext) {
            setActive(filtered[activeIndex + 1]);
            setIsZoomed(false);
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

    return (
        <main className="w-full h-full">
            <div>
                <title>Ioannis Tsiakkas photography</title>
                <meta name="description" content="A curated photography showcase." />
                <meta name="robots" content="index,follow" />
            </div>
            <div id="top" className="relative flex flex-col gap-8">

                <div className="mt-12 mb-8">
                    {showCommissioned ? commissionInfo() : MyWords({ text: "My work, in my own shots" })}
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-3 justify-between items-start md:items-center" aria-label="Photo categories filter">
                    <nav className="flex flex-wrap gap-3 justify-start">
                        {["All", ...sections.map(s => s.title)].map(cat => {
                            const activeFilter = !showCommissioned && filter === cat;
                            return (
                                <button
                                    key={cat}
                                    aria-pressed={activeFilter}
                                    onClick={() => {
                                        setShowCommissioned(false);
                                        setFilter(cat);
                                    }}
                                    className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 ${activeFilter
                                        ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                                        : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'} `}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </nav>

                    <button
                        aria-pressed={showCommissioned}
                        onClick={() => setShowCommissioned(!showCommissioned)}
                        className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 flex-shrink-0 ${showCommissioned
                            ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                            : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'} `}
                    >
                        Commissioned Work
                    </button>
                </div>

                <div className="grid gap-6 w-full auto-rows-[300px] grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
                    {filtered.map(p => (
                        <div
                            key={p.id}
                            style={{
                                gridColumn: p.orientation === 'landscape' ? 'span 2' : 'span 2',
                                gridRow: p.orientation === 'landscape' ? 'span 1' : 'span 2'
                            }}
                        >
                            <PhotoCard photo={p} onOpen={setActive as any} />
                        </div>
                    ))}
                </div>

                <div className="text-center text-12 tracking-wide text-tsiakkas-dark dark:text-tsiakkas-light opacity-70">
                    <p>All photographs on this page are original works created and owned exclusively by Ioannis Tsiakkas.</p>
                    <p>They MAY BE copied, redistributed, or used in any form, apart from any commercial purpose, without explicit written permission.</p>
                    <p>For full resolution of images please contact me at <a href="mailto:iantsiakkas@gmail.com" className="underline hover:opacity-80 transition-opacity">here</a>.</p>
                </div>
            </div>

            {active && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Fullscreen image viewer"
                    className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
                    onClick={close}
                >
                    <div className="flex flex-row items-center justify-between p-4 gap-4" onClick={(e) => e.stopPropagation()}>
                        <span className="text-[11px] font-mono px-2 py-1 text-tsiakkas-light/70 bg-tsiakkas-light/10 rounded select-none">{activeIndex + 1}/{filtered.length}</span>
                        <div className="flex flex-row gap-2 items-center ml-auto">
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowShortcuts(!showShortcuts); }}
                                aria-label="Show keyboard shortcuts"
                                className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all text-lg font-bold"
                                title="Press '?' for shortcuts"
                            >
                                ?
                            </button>
                            {isMobile ? (
                                <button
                                    onClick={(e) => { e.stopPropagation(); setShowInfo(!showInfo); }}
                                    aria-label={showInfo ? "Hide photo info" : "Show photo info"}
                                    className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all"
                                    title="Press 'I' to toggle (I key)"
                                >
                                    {showInfo ? <MdInfo size={20} /> : <MdInfoOutline size={20} />}
                                </button>
                            ) : (
                                <button
                                    onClick={(e) => { e.stopPropagation(); setShowInfo(!showInfo); }}
                                    aria-label={showInfo ? "Hide photo info" : "Show photo info"}
                                    className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all"
                                    title="Press 'I' to toggle (I key)"
                                >
                                    {showInfo ? <MdInfo size={20} /> : <MdInfoOutline size={20} />}
                                </button>
                            )}
                            <button
                                onClick={() => downloadImageWithWatermark(active)}
                                aria-label="Download image with watermark"
                                className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all"
                            >
                                <HiDownload size={20} />
                            </button>
                            <button
                                onClick={close}
                                aria-label="Close fullscreen viewer"
                                className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all leading-none"
                            >
                                <MdClose size={20} />
                            </button>
                        </div>
                    </div>
                    <LightboxContent
                        active={active}
                        goNext={goNext}
                        goPrev={goPrev}
                        hasNext={hasNext}
                        hasPrev={hasPrev}
                        close={close}
                        isZoomed={isZoomed}
                        setIsZoomed={setIsZoomed}
                        showInfo={showInfo}
                        setShowInfo={setShowInfo}
                        showShortcuts={showShortcuts}
                        setShowShortcuts={setShowShortcuts}
                        isMobile={isMobile}
                    />
                </div>
            )}
        </main>
    );
}

function LightboxContent({ active, goNext, goPrev, hasNext, hasPrev, close, isZoomed, setIsZoomed, showInfo, setShowInfo, showShortcuts, setShowShortcuts, isMobile }: {
    active: PhotoWithCategory; goNext: () => void; goPrev: () => void; hasNext: boolean; hasPrev: boolean; close: () => void; isZoomed: boolean; setIsZoomed: (v: boolean) => void; showInfo: boolean; setShowInfo: (v: boolean) => void; showShortcuts: boolean; setShowShortcuts: (v: boolean) => void; isMobile: boolean;
}) {
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
    const [zoomLevel, setZoomLevel] = useState(100);
    const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [touchDistance, setTouchDistance] = useState<number | null>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const onTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 1) {
            setTouchStartX(e.touches[0].clientX);
        } else if (e.touches.length === 2) {
            // Pinch zoom start
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            setTouchDistance(Math.sqrt(dx * dx + dy * dy));
        }
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && touchDistance !== null) {
            // Pinch zoom in progress
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const newDistance = Math.sqrt(dx * dx + dy * dy);
            const ratio = newDistance / touchDistance;

            // Calculate midpoint for zoom origin
            const midX = ((e.touches[0].clientX + e.touches[1].clientX) / 2);
            const midY = ((e.touches[0].clientY + e.touches[1].clientY) / 2);

            if (imageContainerRef.current) {
                const rect = imageContainerRef.current.getBoundingClientRect();
                const x = ((midX - rect.left) / rect.width) * 100;
                const y = ((midY - rect.top) / rect.height) * 100;
                setZoomOrigin({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
            }

            setZoomLevel(prev => Math.max(100, Math.min(300, prev * ratio)));
            setTouchDistance(newDistance);
        } else if (touchStartX != null && e.touches.length === 1) {
            setTouchCurrentX(e.touches[0].clientX);
        }
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (e.touches.length < 2) {
            setTouchDistance(null);
        }
        if (touchStartX == null) return;
        const delta = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) > 60 && zoomLevel === 100) {
            if (delta > 0) goPrev(); else goNext();
        }
        setTouchStartX(null);
        setTouchCurrentX(null);
    };

    const swipeTranslate = touchStartX && touchCurrentX ? touchCurrentX - touchStartX : 0;

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.button === 0) {
            e.preventDefault();
            const rect = imageContainerRef.current?.getBoundingClientRect();
            if (rect) {
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setZoomOrigin({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
            }
            setZoomLevel(prev => Math.min(prev + 50, 300));
        }
    };

    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setZoomLevel(prev => Math.max(100, prev - 50));
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === 'i' && !showShortcuts) {
                e.preventDefault();
                setShowInfo(!showInfo);
            }
            if (e.key === '?') {
                e.preventDefault();
                setShowShortcuts(!showShortcuts);
            }
            if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                setZoomLevel(prev => Math.min(prev + 50, 300));
            }
            if (e.key === '-' || e.key === '_') {
                e.preventDefault();
                setZoomLevel(prev => Math.max(100, prev - 50));
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [showInfo, showShortcuts, setShowInfo, setShowShortcuts, active]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!isMobile && imageContainerRef.current?.contains(e.target as Node)) {
                e.preventDefault();

                const rect = imageContainerRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setZoomOrigin({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });

                if (e.deltaY < 0) {
                    setZoomLevel(prev => Math.min(prev + 25, 300));
                } else {
                    setZoomLevel(prev => Math.max(100, prev - 25));
                }
            }
        };

        document.addEventListener('wheel', handleWheel, { passive: false });
        return () => document.removeEventListener('wheel', handleWheel);
    }, [isMobile]);

    useEffect(() => {
        // Reset zoom when active image changes
        setZoomLevel(100);
        setZoomOrigin({ x: 50, y: 50 });
    }, [active]);

    return (
        <div className="flex-1 flex flex-col items-center justify-center px-2 md:px-6 pb-24 gap-6 select-none relative" onClick={close}>
            {isMobile ? (
                // Mobile layout: image, info overlay, buttons stacked vertically
                <div className="w-full flex flex-col items-center justify-center gap-4" onClick={(e) => e.stopPropagation()}>
                    {/* Image Container - Smaller on mobile */}
                    <div className="w-full flex items-center justify-center overflow-hidden">
                        <div
                            className={`flex items-center justify-center w-full transition-transform ${touchStartX ? '' : 'duration-500'} ${isZoomed ? 'overflow-auto max-h-[calc(70vh-8rem)]' : ''}`}
                            style={{
                                transform: `translateX(${swipeTranslate}px)`,
                                transitionDuration: touchStartX ? '0ms' : '500ms'
                            }}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div
                                ref={imageContainerRef}
                                className={`relative transition-transform duration-300 border border-white/70 ${zoomLevel > 100 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                                style={{
                                    transform: `scale(${zoomLevel / 100})`,
                                    transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`
                                }}
                                onClick={handleImageClick}
                                onContextMenu={handleContextMenu}
                            >
                                {isImageLoading && (
                                    <div className="absolute inset-0 bg-white/10 animate-pulse rounded" style={{ width: '1600px', height: '1200px' }} />
                                )}
                                <Image
                                    src={active.image}
                                    alt={active.caption}
                                    width={1600}
                                    height={1200}
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    className="max-h-[calc(70vh-8rem)] w-auto object-contain select-none"
                                    priority
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                    unoptimized
                                    onLoadingComplete={() => setIsImageLoading(false)}
                                    onLoad={(e) => {
                                        const img = e.target as HTMLImageElement;
                                        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
                                        setIsImageLoading(false);
                                    }}
                                />
                                <div
                                    className="absolute inset-0 bg-transparent"
                                    onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                                />
                            </div>
                        </div>
                    </div>

                    {showInfo && (
                        <div
                            className="w-full p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <aside className="flex flex-col gap-3 text-tsiakkas-light max-w-full mx-auto">
                                <h3 className="text-base font-semibold leading-relaxed italic">{'"'}{active.caption}{'"'}</h3>
                                <div className="text-sm opacity-90">
                                    {active.location}, {active.country}
                                </div>
                                <div className="h-px bg-white/20 my-2" />
                                {active.settings && (
                                    <div className="flex flex-wrap gap-2">
                                        {active.settings.split(' · ').map((setting, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs font-mono rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                                            >
                                                {setting}
                                            </span>
                                        ))}
                                        {/* <span
                                            key={'resolution'}
                                            className="px-2 py-1 text-xs font-mono rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                                        >
                                            {imageDimensions && (
                                                <div className="text-sm font-mono opacity-80">
                                                    {imageDimensions.width} × {imageDimensions.height} px
                                                </div>
                                            )}
                                        </span> */}
                                    </div>
                                )}
                                <div className="mt-1 text-xs opacity-60">© {new Date().getFullYear()} Ioannis Tsiakkas – All rights reserved.</div>
                            </aside>
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-full max-w-[90vw] mx-auto flex flex-col md:flex-row items-center md:items-center gap-8" onClick={(e) => e.stopPropagation()}>
                    <div className="flex-1 flex items-center justify-center overflow-hidden">
                        <div
                            className={`flex items-center justify-center w-full transition-transform ${touchStartX ? '' : 'duration-500'} ${isZoomed ? 'overflow-auto max-h-[calc(90vh-8rem)]' : ''}`}
                            style={{
                                transform: `translateX(${swipeTranslate}px)`,
                                transitionDuration: touchStartX ? '0ms' : '500ms'
                            }}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div
                                ref={imageContainerRef}
                                className={`relative transition-transform duration-300 border-4 border-white/80 ${zoomLevel > 100 ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                                style={{
                                    transform: `scale(${zoomLevel / 100})`,
                                    transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`
                                }}
                                onClick={handleImageClick}
                                onContextMenu={handleContextMenu}
                            >
                                {isImageLoading && (
                                    <div className="absolute inset-0 bg-white/10 animate-pulse rounded" style={{ width: '1600px', height: '1200px' }} />
                                )}
                                <Image
                                    src={active.image}
                                    alt={active.caption}
                                    width={1600}
                                    height={1200}
                                    placeholder="blur"
                                    blurDataURL={BLUR_DATA_URL}
                                    className="max-h-[calc(90vh-8rem)] w-auto object-contain select-none"
                                    priority
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable={false}
                                    unoptimized
                                    onLoadingComplete={() => setIsImageLoading(false)}
                                    onLoad={(e) => {
                                        const img = e.target as HTMLImageElement;
                                        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
                                        setIsImageLoading(false);
                                    }}
                                />
                                <div
                                    className="absolute inset-0 bg-transparent"
                                    onContextMenu={(e) => e.preventDefault()}
                                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                                />
                            </div>
                        </div>
                    </div>

                    {showInfo && !isMobile && (
                        <aside className="w-full md:w-72 flex flex-col gap-4 text-tsiakkas-light">
                            <h3 className="text-xl font-semibold leading-relaxed italic">{'"'}{active.caption}{'"'}</h3>
                            <div className="text-base opacity-90">
                                {active.location}, {active.country}
                            </div>
                            <div className="h-px bg-white/20 my-2" />

                            {active.settings && (
                                <div className="flex flex-wrap gap-2">
                                    {active.settings.split(' · ').map((setting, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 text-sm font-mono rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                                        >
                                            {setting}
                                        </span>
                                    ))}
                                    <span
                                        key={'resolution'}
                                        className="px-3 py-1.5 text-sm font-mono rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                                    >
                                        {imageDimensions && (
                                            <div className="text-sm font-mono opacity-80">
                                                {imageDimensions.width} × {imageDimensions.height} px
                                            </div>
                                        )}
                                    </span>
                                </div>
                            )}
                            <div className="mt-2 text-xs opacity-60">© {new Date().getFullYear()} Ioannis Tsiakkas – All rights reserved.</div>
                        </aside>
                    )}
                </div>
            )}

            {showShortcuts && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setShowShortcuts(false);
                    }}
                >
                    <div className="bg-tsiakkas-dark/95 border border-white/20 rounded-lg p-6 max-w-md w-full text-tsiakkas-light" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                <MdInfo size={24} />
                                Keyboard Shortcuts
                            </h2>
                            <button
                                onClick={() => setShowShortcuts(false)}
                                className="p-1 hover:bg-white/20 rounded transition-all"
                                aria-label="Close shortcuts"
                            >
                                <MdClose size={24} />
                            </button>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>← / → Arrow</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Previous/Next</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>Escape</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Close viewer</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>Scroll in / Left Click / + Key</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Zoom in</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>Scroll out / Right Click / - Key</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Zoom out</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>Pinch (mobile)</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Zoom</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>Swipe (mobile)</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Navigate</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>i</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Toggle info</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>?</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">This menu</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-50" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    disabled={!hasPrev}
                    aria-label="Previous photo"
                    className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-tsiakkas-light hover:bg-white/30 hover:border-white/60 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 transition-all"
                >
                    <IoIosArrowBack size={28} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    disabled={!hasNext}
                    aria-label="Next photo"
                    className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-tsiakkas-light hover:bg-white/30 hover:border-white/60 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 transition-all"
                >
                    <IoIosArrowForward size={28} />
                </button>
            </div>
        </div>
    );
}
