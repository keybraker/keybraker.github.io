import { useEffect } from 'react';
import type { PhotoWithCategory } from '@/types/photo';

export function useImagePreloading(
  prevPhoto: PhotoWithCategory | null,
  nextPhoto: PhotoWithCategory | null
) {
  useEffect(() => {
    const preloadImage = (photo: PhotoWithCategory) => {
      const img = new Image();
      img.src = photo.image;
      // The image will be cached by the browser for faster loading
    };

    if (prevPhoto) {
      preloadImage(prevPhoto);
    }
    if (nextPhoto) {
      preloadImage(nextPhoto);
    }
  }, [prevPhoto, nextPhoto]);
}
