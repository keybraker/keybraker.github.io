import { useEffect, useRef } from 'react';

export function useLazyLoading(
  filtered: { length: number },
  displayCount: number,
  setDisplayCount: (count: number) => void
): { observerTargetRef: React.RefObject<HTMLDivElement> } {
  const observerTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentTarget = observerTargetRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayCount < filtered.length) {
          setDisplayCount(Math.min(displayCount + 12, filtered.length));
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [filtered.length, displayCount, setDisplayCount]);

  return { observerTargetRef };
}
