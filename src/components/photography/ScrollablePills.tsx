import { HiOutlineChevronLeft } from '@react-icons/all-files/hi/HiOutlineChevronLeft';
import { HiOutlineChevronRight } from '@react-icons/all-files/hi/HiOutlineChevronRight';
import { ReactNode, useEffect, useRef, useState } from 'react';

// Sub-pixel rounding can leave scrollLeft a fraction of a pixel short of either end.
const EDGE_TOLERANCE_PX = 1;
// Each edge overlay is a 28px arrow (w-7) plus a 1px divider.
const ARROW_GUTTER_PX = 29;

const edgeOverlayClass = 'absolute inset-y-0 flex items-stretch bg-tsiakkas-light dark:bg-tsiakkas-dark';
const edgeButtonClass =
  'flex w-7 shrink-0 items-center justify-center text-tsiakkas-dark/70 transition hover:text-tsiakkas-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-tsiakkas-dark/40 dark:text-tsiakkas-light/70 dark:hover:text-tsiakkas-light dark:focus-visible:ring-tsiakkas-light/40';
const dividerClass = 'w-px bg-tsiakkas-dark/20 dark:bg-tsiakkas-light/20';

export default function ScrollablePills({
  label,
  children,
  transparentEdges = false,
}: {
  label: string;
  children: ReactNode;
  transparentEdges?: boolean;
}) {
  const navRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const content = contentRef.current;
    if (!nav || !content) return;

    const update = () => {
      setCanScrollLeft(nav.scrollLeft > EDGE_TOLERANCE_PX);
      setCanScrollRight(nav.scrollLeft + nav.clientWidth < nav.scrollWidth - EDGE_TOLERANCE_PX);
    };

    // Keyboard focus can land on a pill hidden under an arrow, so scroll it clear of both gutters.
    const keepFocusVisible = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      if (!nav.contains(target)) return;
      const navRect = nav.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      if (targetRect.left < navRect.left + ARROW_GUTTER_PX) {
        nav.scrollLeft -= navRect.left + ARROW_GUTTER_PX - targetRect.left;
      } else if (targetRect.right > navRect.right - ARROW_GUTTER_PX) {
        nav.scrollLeft += targetRect.right - (navRect.right - ARROW_GUTTER_PX);
      }
    };

    update();
    // Pill widths change once web fonts load, so watch the content as well as the scroller.
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    observer.observe(content);
    nav.addEventListener('scroll', update);
    nav.addEventListener('focusin', keepFocusVisible);

    return () => {
      observer.disconnect();
      nav.removeEventListener('scroll', update);
      nav.removeEventListener('focusin', keepFocusVisible);
    };
  }, []);

  const scrollPills = (direction: -1 | 1) => {
    const nav = navRef.current;
    if (!nav) return;
    nav.scrollBy({ left: direction * nav.clientWidth * 0.75, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-w-0">
      {canScrollLeft && (
        <div className={`${edgeOverlayClass} ${transparentEdges ? 'bg-transparent' : ''} left-0`}>
          <button type="button" aria-label={`Scroll ${label.toLowerCase()} left`} onClick={() => scrollPills(-1)} className={edgeButtonClass}>
            <HiOutlineChevronLeft size={16} />
          </button>
          <span aria-hidden="true" className={dividerClass} />
        </div>
      )}

      {/* Arrows overlay the scroller so its width stays fixed when they appear. */}
      <nav
        ref={navRef}
        aria-label={label}
        className="flex w-full min-w-0 flex-nowrap overflow-x-auto overflow-y-hidden no-scrollbar overscroll-x-contain p-1.5"
      >
        <div ref={contentRef} className="flex shrink-0 gap-3">
          {children}
        </div>
      </nav>

      {canScrollRight && (
        <div className={`${edgeOverlayClass} ${transparentEdges ? 'bg-transparent' : ''} right-0`}>
          <span aria-hidden="true" className={dividerClass} />
          <button type="button" aria-label={`Scroll ${label.toLowerCase()} right`} onClick={() => scrollPills(1)} className={edgeButtonClass}>
            <HiOutlineChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
