import MyWords from "@/components/myWords";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import fs from 'fs';
import path from 'path';
const exifParser = require('exif-parser');


type Photo = { id: number; caption: string; settings: string; location: string; image: string };
type Section = { title: string; photos: Photo[] };

const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

type PhotoWithCategory = Photo & { category: string };

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

    const variant = photo.id % 5;
    const isPortrait = photo.id % 3 === 0;
    // const heightClass = isPortrait ? 'h-[520px]' : (variant % 2 === 0 ? 'h-[340px]' : 'h-[400px]');
    const heightClass = 'w-[420px] h-[420px]';

    return (
        <button
            type="button"
            onClick={() => onOpen(photo)}
            aria-label="Open image fullscreen"
            className={`
                group relative mb-8 w-full break-inside-avoid
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40
                rounded-sm overflow-hidden ring-1 ring-tsiakkas-dark/10 dark:ring-tsiakkas-light/10
                bg-white/40 dark:bg-white/5 backdrop-blur-[2px] transition-colors
            `}
        >
            <div className={`relative ${heightClass}`}>
                <Image
                    src={imgSrc}
                    alt={photo.caption}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className={`object-cover select-none transition duration-500 ease-out group-hover:blur-sm group-focus-visible:blur-sm ${isPortrait ? 'object-center' : 'object-center'}`}
                />
            </div>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 py-6 text-center
                bg-black/50 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                <div className="text-lg font-semibold tracking-wide text-tsiakkas-light drop-shadow-md">
                    {photo.settings}
                </div>
                <div className="text-lg font-thin italic tracking-wide text-tsiakkas-light drop-shadow-md">
                    {photo.location}
                </div>
            </div>
        </button>
    );
}

export async function getStaticProps() {
    const photosDir = path.join(process.cwd(), 'public', 'photos');
    const files = fs.readdirSync(photosDir).filter(file => file.endsWith('.jpg') || file.endsWith('.JPG'));
    const tempPhotos = files.map((file, index) => {
        const name = file.replace('.jpg', '').replace('.JPG', '');
        const parts = name.split('-');
        if (parts.length < 3) return null;
        const section = parts.pop()!;
        const location = parts.pop()!.replace(/_/g, ' ');
        const title = parts.join(' ').replace(/_/g, ' ');
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
            // ignore
        }

        return {
            id: index + 1,
            caption: title,
            settings,
            location,
            image: `/photos/${file}`,
            section
        };
    }).filter(Boolean) as { id: number; caption: string; settings: string; location: string; image: string; section: string }[];
    const sectionMap = new Map<string, Photo[]>();
    tempPhotos.forEach(tp => {
        if (!sectionMap.has(tp.section)) sectionMap.set(tp.section, []);
        sectionMap.get(tp.section)!.push({
            id: tp.id,
            caption: tp.caption,
            settings: tp.settings,
            location: tp.location,
            image: tp.image
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

    const close = useCallback(() => {
        setActive(null);
        setIsZoomed(false);
    }, []);

    const allPhotoObjects: PhotoWithCategory[] = useMemo(() => sections.flatMap(s => s.photos.map(p => ({ ...p, category: s.title }))), [sections]);
    const allPhotos: PhotoWithCategory[] = useMemo(() => allPhotoObjects, [allPhotoObjects]);
    const filtered = filter === "All" ? allPhotos : allPhotos.filter(p => p.category === filter);
    const activeIndex = active ? filtered.findIndex(p => p.id === active.id) : -1;
    const hasPrev = activeIndex > 0;
    const hasNext = activeIndex >= 0 && activeIndex < filtered.length - 1;

    const goPrev = useCallback(() => {
        if (hasPrev) setActive(filtered[activeIndex - 1]);
    }, [hasPrev, activeIndex, filtered]);
    const goNext = useCallback(() => {
        if (hasNext) setActive(filtered[activeIndex + 1]);
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

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full">
                    {filtered.map(p => (
                        <PhotoCard key={p.id} photo={p} onOpen={setActive as any} />
                    ))}
                </div>

                {/* {commissionInfo()} */}

                <div className="text-start text-12 tracking-wide text-tsiakkas-dark dark:text-tsiakkas-light opacity-70">
                    <p>All photographs on this page are original works created and owned exclusively by Ioannis Tsiakkas. They may not be copied, redistributed, or used in any form, including for any commercial purpose, without explicit written permission. Not for commercial use.</p>
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
                                onClick={close}
                                aria-label="Close fullscreen viewer"
                                className="text-tsiakkas-light hover:opacity-80 text-xl font-bold px-3 py-1 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 rounded"
                            >
                                ×
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
                    />
                </div>
            )}
        </main>
    );
}

function LightboxContent({ active, goNext, goPrev, hasNext, hasPrev, close, isZoomed, setIsZoomed }: {
    active: PhotoWithCategory; goNext: () => void; goPrev: () => void; hasNext: boolean; hasPrev: boolean; close: () => void; isZoomed: boolean; setIsZoomed: (v: boolean) => void;
}) {
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX == null) return;
        const delta = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) > 60) {
            if (delta > 0) goPrev(); else goNext();
        }
        setTouchStartX(null);
    };
    return (
        <div className="flex-1 flex flex-col items-center justify-center px-2 md:px-6 pb-10 gap-6 select-none relative" onClick={close}>
            <div className="w-full max-w-[90vw] mx-auto flex flex-col md:flex-row items-start md:items-stretch gap-8" onClick={(e) => e.stopPropagation()}>
                <div className={`flex-1 flex items-center justify-center relative ${isZoomed ? 'overflow-auto max-h-[90vh]' : ''}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-6 z-10">
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            disabled={!hasPrev}
                            aria-label="Previous photo"
                            className="pointer-events-auto h-11 w-11 flex items-center justify-center rounded-full bg-black/30 text-tsiakkas-light hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 transition"
                        >
                            <IoIosArrowBack size={26} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            disabled={!hasNext}
                            aria-label="Next photo"
                            className="pointer-events-auto h-11 w-11 flex items-center justify-center rounded-full bg-black/30 text-tsiakkas-light hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 transition"
                        >
                            <IoIosArrowForward size={26} />
                        </button>
                    </div>
                    <div className={`transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
                        <Image
                            src={active.image}
                            alt={active.caption}
                            width={1600}
                            height={1200}
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                            className="max-h-[90vh] w-auto object-contain select-none"
                            priority
                        />
                    </div>
                </div>
                <aside className="w-full md:w-72 flex flex-col gap-4 text-tsiakkas-light text-sm">
                    <div className="text-[11px] font-mono tracking-wide">{active.settings}</div>
                    <div className="italic text-[11px] opacity-80">{active.location}</div>
                    <p className="italic leading-relaxed">{active.caption}</p>
                    <div className="mt-2 text-[10px] opacity-60">© {new Date().getFullYear()} Ioannis Tsiakkas – All rights reserved.</div>
                </aside>
            </div>
        </div>
    );
}
