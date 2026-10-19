import LightboxContent from '@/components/photography/LightboxContent';
import LightboxHeaderBar from '@/components/photography/LightboxHeaderBar';
import type { PhotoWithCategory } from '@/types/photo';
import { useEffect, useRef, useState } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialogRef.current?.focus();

    return () => {
      const previous = previouslyFocusedRef.current;
      if (previous && document.contains(previous)) previous.focus();
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;
      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);

      if (focusable.length === 0) {
        e.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement as HTMLElement | null;

      if (!current || !dialog.contains(current)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && (current === first || current === dialog)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image viewer"
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-xl focus:outline-none"
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
        setIsCarouselMode={setIsCarouselMode}
      />
    </div>
  );
}
