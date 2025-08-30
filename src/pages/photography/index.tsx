import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

type Photo = {
    id: number;
    caption: string;
    settings: string;
    location: string;
};

type Section = {
    title: string;
    photos: Photo[];
};

const placeholderImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const landscapes: Photo[] = [
    { id: 1, caption: "First light bleeding over a silent ridge – a small reminder that patience always pays in golden hues.", settings: "24mm · f/8 · 1/125s · ISO 100", location: "Crete, Greece" },
    { id: 2, caption: "A shy river hiding under morning mist; elegance in the art of almost being seen.", settings: "35mm · f/11 · 1/60s · ISO 160", location: "Epirus, Greece" },
    { id: 3, caption: "Mountains wearing a brief blush of alpenglow – nature's quiet standing ovation.", settings: "70mm · f/5.6 · 1/200s · ISO 125", location: "Alps" },
    { id: 4, caption: "Still water translating sky into a language only reflection understands.", settings: "50mm · f/9 · 1/100s · ISO 80", location: "Lake District" },
    { id: 5, caption: "Heavy clouds wandering slow – tension and calm sharing the same breath.", settings: "28mm · f/5 · 1/320s · ISO 200", location: "Iceland" },
    { id: 6, caption: "Wind-scripted dunes tracing time in soft, repeating geometry.", settings: "85mm · f/4 · 1/400s · ISO 100", location: "Sahara" },
    { id: 7, caption: "Filtered forest light stitching warmth through a cool green hush.", settings: "35mm · f/2.8 · 1/160s · ISO 250", location: "Black Forest" },
    { id: 8, caption: "The coast exhaling color as twilight refuses to let the day end.", settings: "18mm · f/13 · 2.0s · ISO 64", location: "Azores" },
];

const zurichAtNight: Photo[] = [
    { id: 101, caption: "Tram lines glowing while the river swallows the city lights.", settings: "35mm · f/1.8 · 1/50s · ISO 1250", location: "Zürich, Switzerland" },
    { id: 102, caption: "Reflections layering time across quiet cobblestone.", settings: "50mm · f/2.2 · 1/60s · ISO 1600", location: "Zürich, Switzerland" },
    { id: 103, caption: "Cathedral towers sketching calm into the night fog.", settings: "24mm · f/4 · 1/15s · ISO 800", location: "Zürich, Switzerland" },
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

function slugify(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function PhotoCard({ photo, onOpen }: { photo: Photo; onOpen: (p: Photo) => void }) {
    const imgSrc = placeholderImage;
    return (
        <div className="flex flex-col gap-0">
            <button
                type="button"
                onClick={() => onOpen(photo)}
                aria-label="Open image fullscreen"
                className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40"
            >
                <Image
                    src={imgSrc}
                    alt={photo.caption}
                    width={800}
                    height={600}
                    className="h-64 w-full object-cover select-none  cursor-zoom-in"
                />
            </button>
            <div className="w-full flex flex-col gap-4 text-tsiakkas-dark bg-tsiakkas-dark/10 dark:bg-tsiakkas-light/10 p-4">
                <div className="flex flex-row justify-between">
                    <div className="text-start text-[11px] font-bold tracking-wide">{photo.settings}</div>
                    <div className="text-end text-[11px] font-bold tracking-wide italic">{photo.location}</div>
                </div>
            </div>
        </div>
    );
}

export default function PhotographyPage() {
    const [active, setActive] = useState<Photo | null>(null);

    const close = useCallback(() => setActive(null), []);


    const allPhotos: Photo[] = useMemo(() => [...zurichAtNight, ...cats, ...landscapes], []);
    const activeIndex = active ? allPhotos.findIndex(p => p.id === active.id) : -1;
    const hasPrev = activeIndex > 0;
    const hasNext = activeIndex >= 0 && activeIndex < allPhotos.length - 1;

    const goPrev = useCallback(() => {
        if (hasPrev) setActive(allPhotos[activeIndex - 1]);
    }, [hasPrev, activeIndex, allPhotos]);
    const goNext = useCallback(() => {
        if (hasNext) setActive(allPhotos[activeIndex + 1]);
    }, [hasNext, activeIndex, allPhotos]);


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
            <div id="top" className="flex flex-col gap-8">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-extrabold font-serif leading-tight">Photography</h2>
                    <p className="text-md leading-relaxed">
                        I like to document the world around me with my photos, to catch the vibrancy of city street, the movement of people in time. I want to share my vision of the world, one frame at a time.
                        And for people to relieve the moment I captured, to feel the same emotions I felt when I pressed the shutter button.
                    </p>
                    <p className="text-md leading-relaxed">
                        I also provide services such as product photography. You can see some of my work here, and if you wish to get in contact with me for any project, you can contact me at {" "}
                        <a
                            href="mailto:hello@ioannistsiakkas.com"
                            className="underline decoration-dotted hover:decoration-solid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40"
                        >
                            hello@ioannistsiakkas.com
                        </a>
                    </p>
                </div>

                <nav className="flex flex-wrap gap-4 text-[12px] font-semibold tracking-wide justify-center">
                    {sections.map(s => (
                        <a key={s.title} href={`#${slugify(s.title)}`} className="underline decoration-dashed underline-offset-4 hover:decoration-solid">
                            {s.title}
                        </a>
                    ))}
                </nav>

                <div className="flex flex-col gap-16">
                    {sections.map((section, idx) => {
                        const prev = idx > 0 ? sections[idx - 1] : null;
                        const next = idx < sections.length - 1 ? sections[idx + 1] : null;
                        return (
                            <section
                                key={section.title}
                                id={slugify(section.title)}
                                className="flex flex-col gap-6 relative"
                            >
                                <div className="absolute inset-0 rounded-md bg-tsiakkas-dark/5 dark:bg-tsiakkas-light/5 opacity-30 pointer-events-none" />
                                <div className="relative flex flex-col gap-6 p-6">
                                    <h3 className="text-2xl font-bold font-serif mb-2">{section.title}</h3>
                                    <div className="grid gap-8 grid-cols-1 tn:grid-cols-2 lg:grid-cols-3">
                                        {section.photos.map(p => (
                                            <PhotoCard key={p.id} photo={p} onOpen={setActive} />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
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
                        <div className="flex flex-row gap-2 items-center">
                            <span className="text-[10px] font-mono px-2 py-1 text-tsiakkas-light/60 bg-tsiakkas-light/10 rounded select-none">{activeIndex + 1}/{allPhotos.length}</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
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
    active: Photo; goNext: () => void; goPrev: () => void; hasNext: boolean; hasPrev: boolean; close: () => void;
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
        <div className="flex-1 flex flex-col items-center justify-center px-4 pb-12 gap-6 select-none relative" onClick={close}>
            {/* Overlay navigation arrows */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-6 md:px-10">
                <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    disabled={!hasPrev}
                    aria-label="Previous photo"
                    className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-black/30 text-tsiakkas-light hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 transition"
                >
                    <IoIosArrowBack size={28} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    disabled={!hasNext}
                    aria-label="Next photo"
                    className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-black/30 text-tsiakkas-light hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 transition"
                >
                    <IoIosArrowForward size={28} />
                </button>
            </div>
            <div
                className="flex items-center justify-center max-w-full"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <Image
                    src={placeholderImage}
                    alt={active.caption}
                    width={1600}
                    height={1200}
                    className="max-h-[70vh] w-auto object-contain select-none"
                    priority
                />
            </div>
            <div className="max-w-3xl w-full text-center flex flex-col gap-2 text-tsiakkas-light px-2" onClick={(e) => e.stopPropagation()}>
                <div className="text-[12px] tracking-wide font-semibold flex flex-row justify-center gap-4 flex-wrap">
                    <span>{active.settings}</span>
                    <span className="italic opacity-80">{active.location}</span>
                </div>
                <p className="italic text-sm opacity-90 leading-relaxed">{active.caption}</p>
                <p className="text-[10px] opacity-60 mt-2">© {new Date().getFullYear()} Ioannis Tsiakkas – All rights reserved.</p>
            </div>
        </div>
    );
}
