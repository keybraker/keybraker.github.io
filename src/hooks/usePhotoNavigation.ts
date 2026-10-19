import type { PhotoWithCategory } from '@/types/photo';
import { isEditableTarget } from '@/utils/isEditableTarget';
import { useCallback, useEffect, useRef } from 'react';

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
  isShortcutsOpen: boolean
): UsePhotoNavigationReturn {
  const initialHashHandledRef = useRef(false);
  const requestedPhotoIdRef = useRef<string | null>(null);
  const activeIndex = active ? filtered.findIndex(p => p.id === active.id) : -1;
  const canNavigate = activeIndex >= 0 && filtered.length > 1;
  const hasPrev = canNavigate;
  const hasNext = canNavigate;
  const prevPhoto: PhotoWithCategory | null = canNavigate
    ? filtered[(activeIndex - 1 + filtered.length) % filtered.length]
    : null;
  const nextPhoto: PhotoWithCategory | null = canNavigate
    ? filtered[(activeIndex + 1) % filtered.length]
    : null;

  const goPrev = useCallback(() => {
    if (canNavigate) {
      setActive(filtered[(activeIndex - 1 + filtered.length) % filtered.length]);
    }
  }, [canNavigate, activeIndex, filtered, setActive]);

  const goNext = useCallback(() => {
    if (canNavigate) {
      setActive(filtered[(activeIndex + 1) % filtered.length]);
    }
  }, [canNavigate, activeIndex, filtered, setActive]);

  // Handle keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // Never hijack keys while the user is typing or a modal layer is open.
      if (
        isEditableTarget(e.target) ||
        isShortcutsOpen ||
        document.querySelector('[data-photo-modal-open]')
      ) return;

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
  }, [active, setActive, goPrev, goNext, isShortcutsOpen]);

  // Handle shared photo links before syncing the active photo back to the URL.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!initialHashHandledRef.current) {
      initialHashHandledRef.current = true;
      const match = window.location.hash.match(/^#photo-(.+)$/);
      if (match) {
        const key = decodeURIComponent(match[1]);
        const found = filtered.find(photo => photo.id === key)
          // Legacy numeric links pointed at readdir-order indices.
          ?? (/^\d+$/.test(key)
            ? filtered.find(photo => photo.legacyId === Number(key))
            : undefined);

        if (found) {
          requestedPhotoIdRef.current = found.id;
          setActive(found);
          return;
        }
      }
    }

    if (requestedPhotoIdRef.current !== null) {
      if (active?.id !== requestedPhotoIdRef.current) return;
      requestedPhotoIdRef.current = null;
    }

    if (active) {
      const hash = `#photo-${encodeURIComponent(active.id)}`;
      if (window.location.hash !== hash) history.replaceState(null, '', hash);
    } else if (window.location.hash.startsWith('#photo-')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [active, filtered, setActive]);

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
