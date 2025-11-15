import { useEffect, useRef, useState } from 'react';

export function useLazyLoading(
  filtered: { length: number },
  displayCount: number,
  setDisplayCount: (count: number) => void
): { observerTargetRef: React.RefObject<HTMLDivElement>; isLoading: boolean } {
  const observerTargetRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const loadingTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const currentTarget = observerTargetRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayCount < filtered.length) {
          setIsLoading(true);
          if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
          loadingTimeoutRef.current = setTimeout(() => {
            setDisplayCount(Math.min(displayCount + 12, filtered.length));
            setIsLoading(false);
          }, 300);
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
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
    };
  }, [filtered.length, displayCount, setDisplayCount]);

  return { observerTargetRef, isLoading };
}
