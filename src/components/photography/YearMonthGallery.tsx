import React from 'react';
import { groupPhotosByYearMonth, YearGroup } from '@/functions/groupPhotosByYearMonth';
import PhotoMasonry from '@/components/photography/PhotoMasonry';
import type { PhotoWithCategory } from '@/types/photo';

interface YearMonthGalleryProps {
  photos: PhotoWithCategory[];
  displayCount: number;
  onOpen: (p: PhotoWithCategory) => void;
  sentinelRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
}

export default function YearMonthGallery({
  photos,
  displayCount,
  onOpen,
  sentinelRef,
  isMobile
}: YearMonthGalleryProps) {
  const grouped: YearGroup[] = groupPhotosByYearMonth(photos);

  const flatOrdered: PhotoWithCategory[] = grouped.flatMap(g => g.months.flatMap(m => m.photos));
  const visibleSet = new Set(flatOrdered.slice(0, displayCount).map(p => p.id));

  return (
    <div className="flex flex-col w-full gap-12">
      {grouped.map(yearGroup => (
        <div key={yearGroup.year} className="flex flex-col gap-24">
          {/* <h2 className="
            text-3xl font-extrabold italic tracking-wide text-center text-tsiakkas-dark dark:text-tsiakkas-light
          ">
            {yearGroup.year === 0 ? 'Undated' : yearGroup.year}
          </h2> */}
          {yearGroup.months.map(monthGroup => {
            const monthPhotos = monthGroup.photos.filter(p => visibleSet.has(p.id));
            if (monthPhotos.length === 0) return null; // not yet revealed
            return (
              <div
                key={`${yearGroup.year}-${monthGroup.month}`}
                className="
                  flex flex-col gap-4 px-4 pt-2 pb-6
                  bg-tsiakkas-dark/5 dark:bg-tsiakkas-light/5
                  rounded-2xl
                "
              >
                <h3 className="text-2xl text-tsiakkas-dark/80 dark:text-tsiakkas-light/80">
                  <div className="flex items-baseline gap-3 pb-3 border-b border-tsiakkas-dark/10 dark:border-tsiakkas-light/10">
                  <span className="font-bold tracking-tight bg-gradient-to-r from-tsiakkas-dark to-tsiakkas-dark/60 dark:from-tsiakkas-light dark:to-tsiakkas-light/60 bg-clip-text text-transparent">
                    {monthGroup.label}
                  </span>
                  {yearGroup.year !== 0 && (
                    <span className="text-sm font-extrabold italic text-tsiakkas-dark/50 dark:text-tsiakkas-light/50 ml-auto">
                    {yearGroup.year}
                    </span>
                  )}
                  </div>
                </h3>
                <PhotoMasonry
                  photos={monthPhotos}
                  displayCount={monthPhotos.length}
                  onOpen={onOpen}
                  sentinelRef={sentinelRef}
                  isMobile={isMobile}
                />
              </div>
            );
          })}
        </div>
      ))}
      {displayCount < photos.length && <div ref={sentinelRef} className="h-4 w-full" />}
    </div>
  );
}
