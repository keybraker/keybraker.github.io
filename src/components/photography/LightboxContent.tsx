import CropOverlay from '@/components/photography/CropOverlay';
import { PhotoWithCategory } from '@/types/photo';
import { imageDownloader } from '@/utils/imageDownloader';
import { BLUR_DATA_URL } from '@/utils/watermark';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { MdInfo } from '@react-icons/all-files/md/MdInfo';
import Image from 'next/image';
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

export default function LightboxContent({
  active,
  prevPhoto,
  nextPhoto,
  goNext,
  goPrev,
  hasNext,
  hasPrev,
  close,
  showInfo,
  setShowInfo,
  showShortcuts,
  setShowShortcuts,
  isMobile,
  isCarouselMode,
  showCropMode,
  setShowCropMode,
  cropModalData,
  setCropModalData,
}: {
  active: PhotoWithCategory;
  prevPhoto: PhotoWithCategory | null;
  nextPhoto: PhotoWithCategory | null;
  goNext: () => void;
  goPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  close: () => void;
  showInfo: boolean;
  setShowInfo: (v: boolean) => void;
  showShortcuts: boolean;
  setShowShortcuts: (v: boolean) => void;
  isMobile: boolean;
  isCarouselMode: boolean;
  showCropMode: boolean;
  setShowCropMode: Dispatch<SetStateAction<boolean>>;
  cropModalData: { targetWidth: number; targetHeight: number } | null;
  setCropModalData: Dispatch<SetStateAction<{ targetWidth: number; targetHeight: number } | null>>;
}) {
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [zoomOrigin, setZoomOrigin] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number | null>(null);
  const carouselIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartRef.current;
    const threshold = 50;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && hasPrev) goPrev();
      else if (deltaX < 0 && hasNext) goNext();
    }
    touchStartRef.current = null;
  };

  const clampPan = useCallback(
    (desired: { x: number; y: number }) => {
      const viewport = viewportRef.current?.getBoundingClientRect();
      if (!viewport || !imageDimensions) return { x: 0, y: 0 };
      const imgAspect = imageDimensions.width / imageDimensions.height;
      const viewAspect = viewport.width / viewport.height;
      let baseWidth: number, baseHeight: number;
      if (viewAspect > imgAspect) {
        baseHeight = viewport.height;
        baseWidth = baseHeight * imgAspect;
      } else {
        baseWidth = viewport.width;
        baseHeight = baseWidth / imgAspect;
      }
      const scale = zoomLevel / 100;
      const zoomedWidth = baseWidth * scale;
      const zoomedHeight = baseHeight * scale;
      const overflowX = Math.max(0, (zoomedWidth - viewport.width) / 2);
      const overflowY = Math.max(0, (zoomedHeight - viewport.height) / 2);
      return {
        x: Math.max(-overflowX, Math.min(overflowX, desired.x)),
        y: Math.max(-overflowY, Math.min(overflowY, desired.y)),
      };
    },
    [imageDimensions, zoomLevel]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0 || zoomLevel <= 100) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => {
      if (!dragStart) return;
      const desired = { x: e.clientX - dragStart.x, y: e.clientY - dragStart.y };
      setPanOffset(clampPan(desired));
    };
    const onUp = () => {
      setIsDragging(false);
      setDragStart(null);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
  }, [isDragging, dragStart, clampPan]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (isMobile) return;
      e.preventDefault();
      const containerEl = imageContainerRef.current;
      if (!containerEl) return;
      const rect = containerEl.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomOrigin({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
      if (e.deltaY < 0) setZoomLevel((prev) => Math.min(prev + 25, 300));
      else if (e.deltaY > 0) setZoomLevel((prev) => Math.max(100, prev - 25));
    },
    [isMobile]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'i' && !showShortcuts) {
        e.preventDefault();
        setShowInfo(!showInfo);
      }
      if (e.key.toLowerCase() === 'p' && !isMobile) {
        e.preventDefault();
        // Handled at parent container via button; keep for parity if desired
      }
      if (e.key === '?') {
        e.preventDefault();
        setShowShortcuts(!showShortcuts);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showInfo, showShortcuts, setShowInfo, setShowShortcuts, isMobile]);

  useEffect(() => {
    if (isCarouselMode && !isMobile) {
      carouselIntervalRef.current = setInterval(() => {
        goNext();
      }, 5000);
    }
    return () => {
      if (carouselIntervalRef.current) clearInterval(carouselIntervalRef.current);
    };
  }, [isCarouselMode, isMobile, goNext]);

  useEffect(() => {
    setZoomLevel(100);
    setZoomOrigin({ x: 50, y: 50 });
    setPanOffset({ x: 0, y: 0 });
    setIsDragging(false);
    setDragStart(null);
  }, [active]);

  useEffect(() => {
    if (zoomLevel <= 100) {
      setPanOffset({ x: 0, y: 0 });
      return;
    }
    setPanOffset((prev) => clampPan(prev));
  }, [zoomLevel, clampPan]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-2 md:px-6 pb-24 gap-6 select-none relative" onClick={close}>
      {isMobile ? (
        <div className="w-full flex flex-col items-center justify-center gap-4" onClick={(e) => e.stopPropagation()}>
          <div className="w-full flex items-center justify-center overflow-hidden">
            <div className="flex items-center justify-center w-full max-h-[calc(70vh-8rem)]" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              {isImageLoading && <div className="absolute inset-0 bg-white/10 animate-pulse rounded-lg" />}
              <Image
                src={active.image}
                alt={active.caption}
                width={1600}
                height={1200}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="max-h-[calc(70vh-8rem)] w-auto object-contain select-none"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
                onContextMenu={(e) => e.preventDefault()}
                draggable={false}
                onLoadingComplete={() => setIsImageLoading(false)}
                onLoad={(e) => {
                  const img = e.target as HTMLImageElement;
                  setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
                }}
              />
            </div>
          </div>

          {showInfo && (
            <div className="w-full p-4" onClick={(e) => e.stopPropagation()}>
              <aside className="flex flex-col gap-3 text-tsiakkas-light max-w-full mx-auto">
                <h3 className="text-base font-semibold leading-relaxed italic">{"\""}{active.caption}{"\""}</h3>
                <div className="text-sm opacity-90">{active.location}, {active.country}</div>
                <div className="h-px bg-white/20 my-2" />
                <div className="flex flex-wrap gap-2">
                  {active.settings && active.settings.split(' · ').map((setting, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-mono rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                      {setting}
                    </span>
                  ))}
                  {imageDimensions && (
                    <span className="px-2 py-1 text-xs font-mono rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                      {imageDimensions.width} × {imageDimensions.height} px
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs opacity-60">© {new Date().getFullYear()} Ioannis Tsiakkas – All rights reserved.</div>
              </aside>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full max-w-[90vw] mx-auto flex flex-col md:flex-row items-center md:items-center gap-8" onClick={(e) => e.stopPropagation()}>
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <div ref={viewportRef} className="flex items-center justify-center w-full max-h-[calc(90vh-8rem)] " onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onWheel={handleWheel}>
              {isImageLoading && <div className="absolute inset-0 bg-white/10 animate-pulse rounded-lg" />}
              <div className={`relative ${zoomLevel > 100 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`} style={{ transform: `translate(${panOffset.x}px, ${panOffset.y}px)` }} onMouseDown={handleMouseDown}>
                <div
                  ref={imageContainerRef}
                  className="relative"
                  style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%` }}
                >
                  <Image
                    src={active.image}
                    alt={active.caption}
                    width={1600}
                    height={1200}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="max-h-[calc(90vh-8rem)] w-auto object-contain select-none"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                    onLoadingComplete={() => setIsImageLoading(false)}
                    onLoad={(e) => {
                      const img = e.target as HTMLImageElement;
                      setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight });
                    }}
                  />
                  <div className="absolute inset-0 bg-transparent" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none', WebkitUserSelect: 'none' }} />
                  {showCropMode && cropModalData && imageDimensions && (
                    <CropOverlay
                      imageWidth={imageDimensions.width}
                      imageHeight={imageDimensions.height}
                      targetWidth={cropModalData.targetWidth}
                      targetHeight={cropModalData.targetHeight}
                      containerRef={imageContainerRef}
                      onCancel={() => {
                        setShowCropMode(false);
                        setCropModalData(null);
                      }}
                      onConfirm={(cropData) => {
                        if (cropModalData) {
                          imageDownloader.downloadImageWithCustomCrop(
                            active,
                            cropModalData.targetWidth,
                            cropModalData.targetHeight,
                            cropData
                          );
                          setShowCropMode(false);
                          setCropModalData(null);
                        }
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {showInfo && !isMobile && (
            <aside className="w-full md:w-72 flex flex-col gap-4 text-tsiakkas-light">
              <h3 className="text-xl font-semibold leading-relaxed italic">{"\""}{active.caption}{"\""}</h3>
              <div className="text-base opacity-90">{active.location}, {active.country}</div>
              <div className="h-px bg-white/20 my-2" />
              <div className="flex flex-wrap gap-2">
                {active.settings && active.settings.split(' · ').map((setting, index) => (
                  <span key={index} className="px-3 py-1.5 text-sm font-mono rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    {setting}
                  </span>
                ))}
                {imageDimensions && (
                  <span className="px-3 py-1.5 text-sm font-mono rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                    {imageDimensions.width} × {imageDimensions.height} px
                  </span>
                )}
              </div>
              <div className="mt-2 text-xs opacity-60">© {new Date().getFullYear()} Ioannis Tsiakkas – All rights reserved.</div>
            </aside>
          )}
        </div>
      )}

      {showShortcuts && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={(e) => {
          if (e.target === e.currentTarget) setShowShortcuts(false);
        }}>
          <div className="bg-tsiakkas-dark/95 border border-white/20 rounded-lg p-6 max-w-md w-full text-tsiakkas-light" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <MdInfo size={24} />
                Keyboard Shortcuts
              </h2>
              <button onClick={() => setShowShortcuts(false)} className="p-1 hover:bg-white/20 rounded transition-all" aria-label="Close shortcuts">
                <MdClose size={24} />
              </button>
            </div>
            <div className="space-y-3 text-sm">
              {!isMobile ? (
                <>
                  <div className="flex justify-between"><span>Previous image</span><kbd className="px-2 py-1 bg-white/20 rounded text-xs">←</kbd></div>
                  <div className="flex justify-between"><span>Next image</span><kbd className="px-2 py-1 bg-white/20 rounded text-xs">→</kbd></div>
                  <div className="flex justify-between"><span>Toggle info</span><kbd className="px-2 py-1 bg-white/20 rounded text-xs">I</kbd></div>
                  <div className="flex justify-between"><span>Auto-play carousel</span><kbd className="px-2 py-1 bg-white/20 rounded text-xs">P</kbd></div>
                  <div className="flex justify-between"><span>Show shortcuts</span><kbd className="px-2 py-1 bg-white/20 rounded text-xs">?</kbd></div>
                  <div className="flex justify-between"><span>Close</span><kbd className="px-2 py-1 bg-white/20 rounded text-xs">Esc</kbd></div>
                </>
              ) : (
                <>
                  <div className="flex justify-between"><span>Swipe left/right</span><span className="text-xs opacity-70">Navigate images</span></div>
                  <div className="flex justify-between"><span>Tap info button</span><span className="text-xs opacity-70">Toggle photo info</span></div>
                  <div className="flex justify-between"><span>Show shortcuts</span><kbd className="px-2 py-1 bg-white/20 rounded text-xs">?</kbd></div>
                  <div className="flex justify-between"><span>Close</span><span className="text-xs opacity-70">Tap outside</span></div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-50" onClick={(e) => e.stopPropagation()}>
        <button onClick={(e) => { e.stopPropagation(); goPrev(); }} disabled={!hasPrev} aria-label="Previous photo" className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-tsiakkas-light hover:bg-white/30 hover:border-white/60 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 transition-all">
          <IoIosArrowBack size={28} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); goNext(); }} disabled={!hasNext} aria-label="Next photo" className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 text-tsiakkas-light hover:bg-white/30 hover:border-white/60 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 transition-all">
          <IoIosArrowForward size={28} />
        </button>
      </div>
    </div>
  );
}
