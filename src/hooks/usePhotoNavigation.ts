import type { PhotoWithCategory } from '@/types/photo';
import { useCallback, useEffect } from 'react';

interface UsePhotoNavigationReturn {
  activeIndex: number;
  hasPrev: boolean;
  hasNext: boolean;
  prevPhoto: PhotoWithCategory | null;
  nextPhoto: PhotoWithCategory | null;
  goPrev: () => void;
  goNext: () => void;
}

export function usePhotoNavigation(
  active: PhotoWithCategory | null,
  setActive: (photo: PhotoWithCategory | null) => void,
  filtered: PhotoWithCategory[],
  isMobile: boolean
): UsePhotoNavigationReturn {
  const activeIndex = active ? filtered.findIndex(p => p.id === active.id) : -1;
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex >= 0 && activeIndex < filtered.length - 1;
  const prevPhoto: PhotoWithCategory | null = hasPrev ? filtered[activeIndex - 1] : null;
  const nextPhoto: PhotoWithCategory | null = hasNext ? filtered[activeIndex + 1] : null;

  const goPrev = useCallback(() => {
    if (hasPrev) {
      setActive(filtered[activeIndex - 1]);
    }
  }, [hasPrev, activeIndex, filtered, setActive]);

  const goNext = useCallback(() => {
    if (hasNext) {
      setActive(filtered[activeIndex + 1]);
    } else if (activeIndex >= 0 && filtered.length > 0) {
      // Loop back to the start
      setActive(filtered[0]);
    }
  }, [hasNext, activeIndex, filtered, setActive]);

  // Handle keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActive(null);
      }
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
  }, [active, setActive, goPrev, goNext]);

  // Handle hash-based photo linking
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (active) {
      const h = `#photo-${active.id}`;
      if (window.location.hash !== h) history.replaceState(null, '', h);
    } else if (window.location.hash.startsWith('#photo-')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [active]);

  // Handle opening photo from hash on initial load
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (hash.startsWith('#photo-')) {
      const id = parseInt(hash.replace('#photo-', ''), 10);
      const found = filtered.find(p => p.id === id);
      if (found) {
        setActive(found);
      }
    }
  }, [filtered, setActive]);

  // Close photo if it gets filtered out
  useEffect(() => {
    if (active && !filtered.some(p => p.id === active.id)) {
      setActive(null);
    }
  }, [filtered, active, setActive]);

  return {
    activeIndex,
    hasPrev,
    hasNext,
    prevPhoto,
    nextPhoto,
    goPrev,
    goNext
  };
}
