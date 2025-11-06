import React from 'react';
import PhotoCard from './PhotoCard';
import { PhotoWithCategory } from '@/types/photo';

export default function PhotoMasonry({
  photos,
  displayCount,
  onOpen,
  sentinelRef,
  isMobile,
}: {
  photos: PhotoWithCategory[];
  displayCount: number;
  onOpen: (p: PhotoWithCategory) => void;
  sentinelRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
}) {
  return (
    <>
      <div className="grid gap-6 w-full auto-rows-[300px] grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
        {photos.slice(0, displayCount).map((p) => (
          <div
            key={p.id}
            style={{
              gridColumn: p.orientation === 'landscape' ? 'span 2' : 'span 2',
              gridRow: p.orientation === 'landscape' ? 'span 1' : 'span 2',
            }}
          >
            <PhotoCard photo={p} onOpen={onOpen} isMobile={isMobile} />
          </div>
        ))}
      </div>
      {displayCount < photos.length && <div ref={sentinelRef} className="h-4 w-full" aria-label="Loading indicator" />}
    </>
  );
}
