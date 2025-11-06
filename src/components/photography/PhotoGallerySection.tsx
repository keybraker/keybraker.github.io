import FiltersBar from '@/components/photography/FiltersBar';
import PhotoMasonry from '@/components/photography/PhotoMasonry';
import CopyrightNotice from '@/components/photography/CopyrightNotice';
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

      <PhotoMasonry
        photos={filtered}
        displayCount={displayCount}
        onOpen={onOpen}
        sentinelRef={sentinelRef}
        isMobile={isMobile}
      />

      <CopyrightNotice isMobile={isMobile} />
    </>
  );
}
