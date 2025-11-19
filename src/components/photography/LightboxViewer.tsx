import LightboxContent from '@/components/photography/LightboxContent';
import LightboxHeaderBar from '@/components/photography/LightboxHeaderBar';
import type { PhotoWithCategory } from '@/types/photo';
import { useState } from 'react';

interface LightboxViewerProps {
  active: PhotoWithCategory;
  activeIndex: number;
  filtered: PhotoWithCategory[];
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
  setIsCarouselMode: (v: boolean) => void;
  showSearchBox: boolean;
  setShowSearchBox: (v: boolean) => void;
}

export default function LightboxViewer({
  active,
  activeIndex,
  filtered,
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
  setIsCarouselMode,
  showSearchBox,
  setShowSearchBox,
}: LightboxViewerProps) {
  const [showCropMode, setShowCropMode] = useState(false);
  const [cropModalData, setCropModalData] = useState<{
    targetWidth: number;
    targetHeight: number;
  } | null>(null);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image viewer"
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-xl"
      onClick={close}
    >
      <LightboxHeaderBar
        activeIndex={activeIndex}
        total={filtered.length}
        isMobile={isMobile}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        showShortcuts={showShortcuts}
        setShowShortcuts={setShowShortcuts}
        isCarouselMode={isCarouselMode}
        setIsCarouselMode={setIsCarouselMode}
        onClose={close}
        active={active}
        showCropMode={showCropMode}
        setShowCropMode={setShowCropMode}
        setCropModalData={setCropModalData}
      />
      <LightboxContent
        active={active}
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
        showCropMode={showCropMode}
        setShowCropMode={setShowCropMode}
        cropModalData={cropModalData}
        setCropModalData={setCropModalData}
        isMobile={isMobile}
        isCarouselMode={isCarouselMode}
      />
    </div>
  );
}
