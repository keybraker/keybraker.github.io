import { useMemo, useState, useEffect } from 'react';
import type { PhotoWithCategory, Section } from '@/types/photo';
import { usePhotoOrientation } from './usePhotoOrientation';

interface UsePhotoFilteringReturn {
  filtered: PhotoWithCategory[];
  filter: string;
  setFilter: (filter: string) => void;
  showCommissioned: boolean;
  setShowCommissioned: (show: boolean) => void;
  displayCount: number;
  setDisplayCount: (count: number) => void;
}

export function usePhotoFiltering(sections: Section[]): UsePhotoFilteringReturn {
  const [filter, setFilter] = useState<string>("All");
  const [showCommissioned, setShowCommissioned] = useState(false);
  const [displayCount, setDisplayCount] = useState(12);

  const allPhotos = usePhotoOrientation(sections);

  const filtered = useMemo(() => {
    if (showCommissioned) {
      return allPhotos.filter(p => p.isCommissioned);
    }
    const regularPhotos = allPhotos.filter(p => !p.isCommissioned);
    return filter === "All" ? regularPhotos : regularPhotos.filter(p => p.category === filter);
  }, [allPhotos, filter, showCommissioned]);

  // Reset display count when filter changes
  useEffect(() => {
    setDisplayCount(12);
  }, [filter, showCommissioned]);

  return {
    filtered,
    filter,
    setFilter,
    showCommissioned,
    setShowCommissioned,
    displayCount,
    setDisplayCount
  };
}
