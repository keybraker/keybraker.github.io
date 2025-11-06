import Image from 'next/image';
import { BLUR_DATA_URL } from '@/utils/watermark';
import { PhotoWithCategory } from '@/types/photo';

export default function PhotoCard({
  photo,
  onOpen,
  isMobile,
}: {
  photo: PhotoWithCategory;
  onOpen: (p: PhotoWithCategory) => void;
  isMobile: boolean;
}) {
  const imgSrc = photo.image;
  return (
    <button
      type="button"
      onClick={() => onOpen(photo)}
      aria-label="Open image fullscreen"
      className={`
          group relative w-full h-full
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40
          border-2 sm:border-4 border-tsiakkas-dark/90 dark:border-tsiakkas-light/90 sm:border-tsiakkas-light/90 sm:dark:border-tsiakkas-dark/90
          overflow-hidden ring-0 ring-tsiakkas-dark/10 dark:ring-tsiakkas-light/10
          backdrop-blur-[2px] transition-colors
      `}
    >
      <div className="relative w-full h-full">
        <Image
          src={imgSrc}
          alt={photo.caption}
          fill
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="
            object-cover select-none transition duration-500 ease-out group-hover:blur-sm group-focus-visible:blur-sm
          "
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
      </div>

      <div className="
        pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 py-6 text-center
        bg-black/20 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300
      ">
        <div className="text-xl font-normal italic tracking-wide text-tsiakkas-light drop-shadow-md">{photo.caption}</div>
      </div>
    </button>
  );
}
