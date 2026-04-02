import type { PhotoWithCategory } from "@/types/photo";
import { useEffect } from "react";

export function useImagePreloading(
  prevPhoto: PhotoWithCategory | null,
  nextPhoto: PhotoWithCategory | null,
) {
  useEffect(() => {
    const preloadImage = (photo: PhotoWithCategory) => {
      const img = new Image();
      img.src = photo.originalImage;
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
