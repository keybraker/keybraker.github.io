import type { PhotoWithCategory, Section } from '@/types/photo';
import { useMemo } from 'react';

export function usePhotoOrientation(sections: Section[]): PhotoWithCategory[] {
  return useMemo(() =>
    sections.flatMap(s => {
      return s.photos.map((photo) => {
        const isLandscape = photo.width > photo.height;

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
