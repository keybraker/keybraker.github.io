import MyWords from "@/components/myWords";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { HiDownload } from "@react-icons/all-files/hi/HiDownload";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { MdInfo } from "@react-icons/all-files/md/MdInfo";
import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
import { HiOutlineEyeOff } from "@react-icons/all-files/hi/HiOutlineEyeOff";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import fs from 'fs';
import path from 'path';

const exifParser = require('exif-parser');

type Photo = { id: number; caption: string; settings: string; location: string; country: string; image: string; originalImage: string };
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

    // Convert message to binary
    const messageBinary = message.split('').map(char =>
        char.charCodeAt(0).toString(2).padStart(8, '0')
    ).join('');

    // Add header: magic number (11111111) + message length (16 bits)
    const header = "11111111" + messageBinary.length.toString(2).padStart(16, '0');
    const fullBinary = header + messageBinary;

    // Embed binary data into LSB of red channel pixels
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

    // Set canvas dimensions
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw original image
    ctx.drawImage(img, 0, 0);

    // Apply LSB steganography
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const watermarkedData = applyLSBSteganography(imageData, hiddenMessage);
    ctx.putImageData(watermarkedData, 0, 0);

    // Apply visible watermark
    applyVisibleWatermark(ctx, canvas, visibleText);

    return canvas;
}

/**
 * Downloads the image with dynamically applied watermarks
 * Applies both LSB steganography and visible watermark at download time
 */
async function downloadImageWithWatermark(photo: Photo) {
    try {
        // Create watermark messages
        const hiddenMessage = `© ${new Date().getFullYear()} Ioannis Tsiakkas. All rights reserved. Original photo: ${photo.caption}`;
        const visibleText = 'Ioannis Tsiakkas';

        // Load the original image and apply watermarks
        const canvas = await createWatermarkedImage(
            photo.originalImage,
            hiddenMessage,
            visibleText
        );

        // Convert canvas to blob and download
        canvas.toBlob((blob) => {
            if (!blob) {
                console.error('Failed to create blob from canvas');
                return;
            }
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${photo.caption.replace(/\s+/g, '_')}-Ioannis_Tsiakkas.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, 'image/png');
    } catch (error) {
        console.error('Failed to download image with watermark:', error);
    }
}

function commissionInfo() {
    return (
        <section aria-labelledby="contact-heading" className="w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-tsiakkas-dark/10 via-transparent to-tsiakkas-light/10 dark:from-tsiakkas-light/10 dark:via-transparent dark:to-tsiakkas-dark/10 rounded-2xl"></div>

            <div className="relative w-full flex flex-col gap-2 items-start py-12 px-6 md:px-12">
                <div className="text-start space-y-6 max-w-4xl">
                    <h2 className="text-2xl md:text-4xl font-light tracking-wide text-tsiakkas-dark dark:text-tsiakkas-light mb-4">
                        Commissioned Works
                    </h2>

                    <div className="flex flex-col text-start text-lg md:text-xl leading-relaxed text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 font-light italic max-w-4xl mx-auto">
                        <p>
                            Specializing in products, editorial narratives, and brand storytelling through the lens of artistry.
                        </p>
                        <p>Let&apos;s collaborate to create something truly extraordinary.</p>
                        <a
                            href="mailto:tsiakkas-photography@gmail.com"
                            className="
                            group relative flex items-center gap-3 rounded-xl px-8 py-4 text-base font-medium mt-4 w-fit
                            border-2 border-tsiakkas-dark/30 dark:border-tsiakkas-light/30
                            bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm
                            dark:from-white/5 dark:to-white/2
                            hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10
                            dark:hover:from-white/10 dark:hover:to-white/5
                            text-tsiakkas-dark dark:text-tsiakkas-light
                            hover:shadow-lg hover:shadow-tsiakkas-dark/15 dark:hover:shadow-tsiakkas-light/15
                            hover:scale-105 hover:border-tsiakkas-dark/50 dark:hover:border-tsiakkas-light/50
                            transform transition-all duration-300 ease-out
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/50 dark:focus:ring-tsiakkas-light/50
                        "
                            aria-label="Send me an email"
                            title="tsiakkas-photography@gmail.com"
                        >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <HiOutlineMail className="text-xl relative z-10" />
                            <span className="font-mono tracking-wider relative z-10">Commission Inquiry</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>)
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
    const photosDir = path.join(process.cwd(), 'public', 'photos');
    const watermarkedDir = path.join(process.cwd(), 'public', 'photos-watermarked');

    // Read original photos directory (JPG files)
    const files = fs.readdirSync(photosDir).filter(file =>
        file.endsWith('.jpg') || file.endsWith('.JPG') || file.endsWith('.jpeg') || file.endsWith('.JPEG')
    );

    const tempPhotos = files.map((file, index) => {
        const name = file.replace(/\.(jpg|JPG|jpeg|JPEG)$/, '');
        const parts = name.split('-');
        if (parts.length < 3) return null;
        const country = parts.pop()!.replace(/_/g, ' ');
        const location = parts.pop()!.replace(/_/g, ' ');
        const title = parts.join('-').replace(/_/g, ' ');

        // Check if watermarked version exists (PNG format)
        const watermarkedFile = file.replace(/\.(jpg|JPG|jpeg|JPEG)$/, '.png');
        const watermarkedPath = path.join(watermarkedDir, watermarkedFile);
        const useWatermarked = fs.existsSync(watermarkedPath);

        // Read EXIF data from original JPG
        const buffer = fs.readFileSync(path.join(photosDir, file));
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

        return {
            id: index + 1,
            caption: title,
            settings,
            location,
            country,
            // Use watermarked PNG if available, otherwise fall back to original JPG
            image: useWatermarked ? `/photos-watermarked/${watermarkedFile}` : `/photos/${file}`,
            originalImage: `/photos/${file}`, // Always store the original JPG path
            section: country // Use country as the section/category
        };
    }).filter(Boolean) as { id: number; caption: string; settings: string; location: string; country: string; image: string; originalImage: string; section: string }[];

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
            originalImage: tp.originalImage
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
    const [active, setActive] = useState<PhotoWithCategory | null>(null);
    const [filter, setFilter] = useState<string>("All");
    const [isZoomed, setIsZoomed] = useState(false);
    const [showInfo, setShowInfo] = useState(true);
    const [showShortcuts, setShowShortcuts] = useState(false);

    const close = useCallback(() => {
        setActive(null);
        setIsZoomed(false);
        setShowInfo(true);
        setShowShortcuts(false);
    }, []);

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
    const filtered = filter === "All" ? allPhotos : allPhotos.filter(p => p.category === filter);
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
            if (found) setActive(found);
        }
    }, [allPhotos]);

    useEffect(() => {
        if (active && !filtered.some(p => p.id === active.id)) {
            setActive(null);
        }
    }, [filter, active, filtered]);

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

                {MyWords({ text: "My work, in my own shots", className: "mt-12 mb-8" })}

                <nav className="flex flex-wrap gap-3 justify-start" aria-label="Photo categories filter">
                    {["All", ...sections.map(s => s.title)].map(cat => {
                        const activeFilter = filter === cat;
                        return (
                            <button
                                key={cat}
                                aria-pressed={activeFilter}
                                onClick={() => setFilter(cat)}
                                className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 ${activeFilter
                                    ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                                    : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'} `}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </nav>

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

                {/* {commissionInfo()} */}

                <div className="text-start text-12 tracking-wide text-tsiakkas-dark dark:text-tsiakkas-light opacity-70">
                    <p>All photographs on this page are original works created and owned exclusively by Ioannis Tsiakkas. They may not be copied, redistributed, or used in any form, including for any commercial purpose, without explicit written permission.</p>
                    <p>Photographs may be downloaded and used solely for personal purposes, such as personal wallpapers.</p>
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
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowInfo(!showInfo); }}
                                aria-label={showInfo ? "Hide photo info" : "Show photo info"}
                                className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all"
                                title="Press 'I' to toggle (I key)"
                            >
                                {showInfo ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
                            </button>
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
                    />
                </div>
            )}
        </main>
    );
}

function LightboxContent({ active, goNext, goPrev, hasNext, hasPrev, close, isZoomed, setIsZoomed, showInfo, setShowInfo, showShortcuts, setShowShortcuts }: {
    active: PhotoWithCategory; goNext: () => void; goPrev: () => void; hasNext: boolean; hasPrev: boolean; close: () => void; isZoomed: boolean; setIsZoomed: (v: boolean) => void; showInfo: boolean; setShowInfo: (v: boolean) => void; showShortcuts: boolean; setShowShortcuts: (v: boolean) => void;
}) {
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
    const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
    const onTouchMove = (e: React.TouchEvent) => {
        if (touchStartX != null) {
            setTouchCurrentX(e.touches[0].clientX);
        }
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX == null) return;
        const delta = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) > 60) {
            if (delta > 0) goPrev(); else goNext();
        }
        setTouchStartX(null);
        setTouchCurrentX(null);
    };

    const swipeTranslate = touchStartX && touchCurrentX ? touchCurrentX - touchStartX : 0;

    const handleZoomClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setZoomOrigin({ x, y });
        setIsZoomed(!isZoomed);
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
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [showInfo, showShortcuts, setShowInfo, setShowShortcuts]);

    return (
        <div className="flex-1 flex flex-col items-center justify-center px-2 md:px-6 pb-24 gap-6 select-none relative" onClick={close}>
            <div className="w-full max-w-[90vw] mx-auto flex flex-col md:flex-row items-start md:items-stretch gap-8" onClick={(e) => e.stopPropagation()}>
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                    {/* Image Container */}
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
                        <div className={`relative transition-transform duration-300 border border-white/70 ${isZoomed ? 'cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`} style={{ transform: isZoomed ? 'scale(2)' : 'scale(1)', transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%` }} onClick={handleZoomClick}>
                            {/* Loading skeleton */}
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
                {/* Info Sidebar - Toggleable */}
                {showInfo && (
                    <aside className="w-full md:w-72 flex flex-col gap-4 text-tsiakkas-light">
                        {/* Image Name */}
                        <h3 className="text-xl font-semibold leading-relaxed">{active.caption}</h3>

                        {/* Location */}
                        <div className="text-base italic opacity-90">
                            {active.location}, {active.country}
                        </div>

                        {/* Camera Settings in Pills */}
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
                            </div>
                        )}

                        {/* Image Dimensions */}
                        {imageDimensions && (
                            <div className="text-sm font-mono opacity-80">
                                {imageDimensions.width} × {imageDimensions.height} px
                            </div>
                        )}

                        <div className="mt-2 text-xs opacity-60">© {new Date().getFullYear()} Ioannis Tsiakkas – All rights reserved.</div>
                    </aside>
                )}
            </div>

            {/* Keyboard Shortcuts Modal */}
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
                                <span>Click image</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Zoom in/out</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>Swipe (mobile)</span>
                                <span className="text-xs bg-white/10 px-2 py-1 rounded">Navigate</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/10">
                                <span>I</span>
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

            {/* Fixed Navigation Buttons Container - Always at Bottom */}
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
