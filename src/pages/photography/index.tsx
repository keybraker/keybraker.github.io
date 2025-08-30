import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

// Types
type Photo = { id: number; caption: string; settings: string; location: string };
type Section = { title: string; photos: Photo[] };

// Shared placeholder image & blur data
const placeholderImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

// Photo data (grouped logically – IDs segmented per category)
const landscapes: Photo[] = [
    { id: 1, caption: "First light bleeding over a silent ridge – a reminder that patience pays in gold.", settings: "24mm · f/8 · 1/125s · ISO 100", location: "Crete, Greece" },
    { id: 2, caption: "A shy river hiding under morning mist; elegance in the almost becoming.", settings: "70mm · f/5.6 · 1/200s · ISO 200", location: "Black Forest" },
    { id: 3, caption: "Wind-combed grass leaning into the unseen conversation offshore.", settings: "35mm · f/11 · 1/160s · ISO 100", location: "North Sea" },
    { id: 4, caption: "Distant peaks dissolving into layered pastel breathing.", settings: "105mm · f/9 · 1/250s · ISO 200", location: "Alps" },
    { id: 5, caption: "A single tree orchestrating the quiet around it.", settings: "50mm · f/4 · 1/320s · ISO 100", location: "Central Europe" },
    { id: 6, caption: "Desert light carving temporary hieroglyphs in sand.", settings: "35mm · f/8 · 1/400s · ISO 100", location: "Sahara" },
    { id: 7, caption: "Filtered forest light stitching warmth through a cool green hush.", settings: "35mm · f/2.8 · 1/160s · ISO 250", location: "Black Forest" },
    { id: 8, caption: "Coastal twilight exhaling color that refuses to let the day end.", settings: "18mm · f/13 · 2s · ISO 64", location: "Azores" },
];

const zurichAtNight: Photo[] = [
    { id: 101, caption: "Tram lines glowing while the river swallows the city lights.", settings: "35mm · f/1.8 · 1/50s · ISO 1250", location: "Zürich, Switzerland" },
    { id: 102, caption: "Reflections layering time across quiet cobblestone.", settings: "50mm · f/2.2 · 1/60s · ISO 1600", location: "Zürich, Switzerland" },
    { id: 103, caption: "Midnight façades breathing in sodium dusk.", settings: "28mm · f/2.8 · 1/25s · ISO 2000", location: "Zürich, Switzerland" },
    { id: 104, caption: "Rain-brushed arcades humming with after-hours neon.", settings: "35mm · f/2 · 1/40s · ISO 3200", location: "Zürich, Switzerland" },
    { id: 105, caption: "Clock face suspended over the river's dark grammar.", settings: "85mm · f/2.2 · 1/80s · ISO 1600", location: "Zürich, Switzerland" },
    { id: 106, caption: "Bridge ribs holding the hush between late footsteps.", settings: "24mm · f/4 · 1/15s · ISO 2500", location: "Zürich, Switzerland" },
];

const cats: Photo[] = [
    { id: 201, caption: "Sun-warmed whiskers measuring the morning.", settings: "85mm · f/2 · 1/320s · ISO 200", location: "Home Studio" },
    { id: 202, caption: "A velvet pause between curiosity and pounce.", settings: "50mm · f/1.8 · 1/250s · ISO 400", location: "Kitchen Window" },
    { id: 203, caption: "Moonlit guardian on a silent railing.", settings: "35mm · f/2.2 · 1/80s · ISO 1250", location: "Balcony" },
];

const sections: Section[] = [
    { title: "Zurich at night", photos: zurichAtNight },
    { title: "Cats", photos: cats },
    { title: "Landscapes", photos: landscapes },
];

// Flatten photos with category for filtering
type PhotoWithCategory = Photo & { category: string };
const allPhotoObjects: PhotoWithCategory[] = sections.flatMap(s => s.photos.map(p => ({ ...p, category: s.title })));

function slugify(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function PhotoCard({ photo, onOpen }: { photo: PhotoWithCategory; onOpen: (p: PhotoWithCategory) => void }) {
    const imgSrc = placeholderImage; // placeholder for all
    // Deterministic stylistic variations (avoid SSR/client mismatch)
    const variant = photo.id % 5; // 0-4
    const isPortrait = photo.id % 3 === 0; // simple rule for diversity
    const heightClass = isPortrait ? 'h-[520px]' : (variant % 2 === 0 ? 'h-[340px]' : 'h-[400px]');
    // Removed positional offsets to keep spacing consistent
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
                shadow-[0_4px_16px_-4px_rgba(0,0,0,0.25)] dark:shadow-[0_4px_18px_-6px_rgba(0,0,0,0.55)]
            `}
        >
            <div className={`relative w-full ${heightClass}`}>
                <Image
                    src={imgSrc}
                    alt={photo.caption}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className={`object-cover select-none transition duration-500 ease-out group-hover:blur-sm group-focus-visible:blur-sm ${isPortrait ? 'object-center' : 'object-center'}`}
                />
            </div>
            {/* Overlay info (hidden until hover/focus) centered */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 py-6 text-center
                bg-black/0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                <div className="text-md font-semibold tracking-wide text-tsiakkas-light drop-shadow-sm">
                    {photo.settings}
                </div>
                <div className="text-md font-thin italic tracking-wide text-tsiakkas-light/80 drop-shadow-sm">
                    {photo.location}
                </div>
            </div>
        </button>
    );
}

export default function PhotographyPage() {
    const [active, setActive] = useState<PhotoWithCategory | null>(null);
    const [filter, setFilter] = useState<string>("All");

    const close = useCallback(() => setActive(null), []);


    const allPhotos: PhotoWithCategory[] = useMemo(() => allPhotoObjects, []);
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

    // If active photo filtered out, close lightbox
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
        <>
            <Head>
                <title>Photography | Ioannis Tsiakkas</title>
                <meta name="description" content="A curated landscape photography showcase." />
                <meta name="robots" content="index,follow" />
            </Head>
            <div id="top" className="relative flex flex-col gap-16">{/* modified wrapper */}
                {/* Ambient subtle artistic backdrop */}
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">{/* new backdrop container */}
                    <div
                        className="absolute inset-0 opacity-[0.55] dark:opacity-[0.35] mix-blend-multiply dark:mix-blend-screen"
                        style={{
                            backgroundImage: `radial-gradient(at 28% 20%, rgba(0,0,0,0.05), transparent 60%), radial-gradient(at 78% 80%, rgba(0,0,0,0.045), transparent 65%)`
                        }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.10] dark:opacity-[0.14]"
                        style={{
                            backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAACqZ0cjAAAAPElEQVR4Ae3PMQ0AIBDDwMS/56wAAl2E1GQt8HkzM2ZmZmZmZmZmZj4BkfKe1p3XgqNHjx49evTo0aPHvwAQvUY2rG35QwAAAABJRU5ErkJggg==)',
                            backgroundSize: '180px 180px'
                        }}
                    />
                </div>

                {/* Text-only top section (no background image) */}
                <section className="w-full flex flex-col items-center gap-8 pt-10 px-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-center text-tsiakkas-dark dark:text-tsiakkas-light">Photography</h2>
                    <div className="flex flex-col gap-6 max-w-3xl w-full">
                        <p className="text-md leading-relaxed">
                            I document urban atmosphere, still landscapes, and the subtle narratives in motion. Each frame is a study of tone, patience, and timing.
                        </p>
                        <p className="text-md leading-relaxed">
                            I also take on commissioned work (products, editorial, brand storytelling). For inquiries: {" "}
                            <a
                                href="mailto:hello@ioannistsiakkas.com"
                                className="underline decoration-dotted hover:decoration-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40"
                            >
                                hello@ioannistsiakkas.com
                            </a>.
                        </p>
                    </div>
                </section>

                {/* Filter bar */}
                <nav className="flex flex-wrap gap-3 justify-center px-2" aria-label="Photo categories filter">
                    {["All", ...sections.map(s => s.title)].map(cat => {
                        const activeFilter = filter === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-[11px] uppercase tracking-wide px-4 py-1 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40 ${activeFilter
                                    ? 'bg-tsiakkas-dark text-tsiakkas-light dark:bg-tsiakkas-light dark:text-tsiakkas-dark border-tsiakkas-dark dark:border-tsiakkas-light'
                                    : 'border-tsiakkas-dark/30 dark:border-tsiakkas-light/30 text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 hover:text-tsiakkas-dark dark:hover:text-tsiakkas-light hover:border-tsiakkas-dark/60 dark:hover:border-tsiakkas-light/60'} `}
                                aria-pressed={activeFilter}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </nav>

                {/* Masonry gallery */}
                <div className="w-full max-w-6xl mx-auto px-2">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                        {filtered.map(p => (
                            <PhotoCard key={p.id} photo={p} onOpen={setActive as any} />
                        ))}
                    </div>
                </div>
                <div className="mt-24 text-center text-[11px] tracking-wide text-tsiakkas-dark dark:text-tsiakkas-light opacity-70 px-6">
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
                                onClick={() => {
                                    try {
                                        const url = window.location.href;
                                        if (navigator?.clipboard?.writeText) navigator.clipboard.writeText(url);
                                    } catch { }
                                }}
                                aria-label="Copy link to this photo"
                                className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wide rounded bg-tsiakkas-light/10 text-tsiakkas-light hover:bg-tsiakkas-light/20 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40"
                            >Copy Link</button>
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
                    />
                </div>
            )}
        </>
    );
}

function LightboxContent({ active, goNext, goPrev, hasNext, hasPrev, close }: {
    active: PhotoWithCategory; goNext: () => void; goPrev: () => void; hasNext: boolean; hasPrev: boolean; close: () => void;
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
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-stretch gap-8" onClick={(e) => e.stopPropagation()}>
                <div className="flex-1 flex items-center justify-center relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                    {/* Overlay nav arrows */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-6">
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
                    <Image
                        src={placeholderImage}
                        alt={active.caption}
                        width={1600}
                        height={1200}
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="max-h-[72vh] w-auto object-contain select-none"
                        priority
                    />
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
