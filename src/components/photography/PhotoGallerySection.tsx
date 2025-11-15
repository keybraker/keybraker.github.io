import CopyrightNotice from '@/components/photography/CopyrightNotice';
import FiltersBar from '@/components/photography/FiltersBar';
import YearMonthGallery from '@/components/photography/YearMonthGallery';
import type { PhotoWithCategory, Section } from '@/types/photo';

interface PhotoGallerySectionProps {
  sections: Section[];
  filter: string;
  setFilter: (filter: string) => void;
  showCommissioned: boolean;
  setShowCommissioned: (show: boolean) => void;
  filtered: PhotoWithCategory[];
  displayCount: number;
  onOpen: (photo: PhotoWithCategory) => void;
  sentinelRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
  isLoading?: boolean;
}

export default function PhotoGallerySection({
  sections,
  filter,
  setFilter,
  showCommissioned,
  setShowCommissioned,
  filtered,
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
        filter={filter}
        setFilter={setFilter}
        showCommissioned={showCommissioned}
        setShowCommissioned={setShowCommissioned}
        isMobile={isMobile}
      />

      <YearMonthGallery
        photos={filtered}
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
