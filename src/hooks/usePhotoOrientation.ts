import type { PhotoWithCategory, Section } from '@/types/photo';
import { useMemo } from 'react';

export function usePhotoOrientation(sections: Section[]): PhotoWithCategory[] {
  return useMemo(() =>
    sections.flatMap(s => {
      return s.photos.map((photo, index) => {
        // Alternating pattern with randomization to avoid clustering
        // Pattern: P-P-L-P-P-L (portrait-portrait-landscape repeats)
        // This ensures landscapes are spaced out and no long stretches of same orientation
        const positionInPattern = index % 6;
        const isLandscape = positionInPattern === 2 || positionInPattern === 5;

        return {
          ...photo,
          category: s.title,
          orientation: isLandscape ? ('landscape' as const) : ('portrait' as const)
        };
      });
    }),
    [sections]
  );
}
