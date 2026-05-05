import CopyrightNotice from '@/components/photography/CopyrightNotice';
import FiltersBar from '@/components/photography/FiltersBar';
import YearMonthGallery from '@/components/photography/YearMonthGallery';
import type { YearGroup } from '@/functions/groupPhotosByYearMonth';
import type { PhotoWithCategory, Section } from '@/types/photo';

interface PhotoGallerySectionProps {
  sections: Section[];
  trips?: string[];
  filter: string;
  setFilter: (filter: string) => void;
  showCommissioned: boolean;
  setShowCommissioned: (show: boolean) => void;
  filtered: PhotoWithCategory[];
  groupedPhotos: YearGroup[];
  displayCount: number;
  onOpen: (photo: PhotoWithCategory) => void;
  sentinelRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
  isLoading?: boolean;
}

export default function PhotoGallerySection({
  sections,
  trips = [],
  filter,
  setFilter,
  showCommissioned,
  setShowCommissioned,
  filtered,
  groupedPhotos,
  displayCount,
  onOpen,
  sentinelRef,
  isMobile,
  isLoading = false,
}: PhotoGallerySectionProps) {
  return (
    <>
      <FiltersBar
        sections={sections}
        trips={trips}
        filter={filter}
        setFilter={setFilter}
        showCommissioned={showCommissioned}
        setShowCommissioned={setShowCommissioned}
        isMobile={isMobile}
      />

      <YearMonthGallery
        grouped={groupedPhotos}
        totalCount={filtered.length}
        displayCount={displayCount}
        onOpen={onOpen}
        sentinelRef={sentinelRef}
        isMobile={isMobile}
        isLoading={isLoading}
      />

      <CopyrightNotice isMobile={isMobile} />
    </>
  );
}
