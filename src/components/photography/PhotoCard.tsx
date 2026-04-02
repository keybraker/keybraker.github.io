import { PhotoWithCategory } from '@/types/photo';
import { BLUR_DATA_URL } from '@/utils/watermark';
import Image from 'next/image';

export default function PhotoCard({
  photo,
  onOpen,
  isMobile,
  priority = false,
}: {
  photo: PhotoWithCategory;
  onOpen: (p: PhotoWithCategory) => void;
  isMobile: boolean;
  priority?: boolean;
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
          border sm:border
          border-tsiakkas-dark/10 dark:border-tsiakkas-light/10
          sm:border-tsiakkas-dark/10 sm:dark:border-tsiakkas-light/10
          ring-tsiakkas-light/10 dark:ring-tsiakkas-dark/10
          overflow-hidden ring-0 rounded-md ${isMobile ? '' : 'backdrop-blur-[2px] transition-colors'}
      `}
    >
      <div className="relative w-full h-full">
        <Image
          src={imgSrc}
          alt=""
          fill
          placeholder={isMobile ? 'empty' : 'blur'}
          blurDataURL={isMobile ? undefined : BLUR_DATA_URL}
          sizes={isMobile ? '100vw' : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'}
          priority={priority}
          style={isMobile ? undefined : { transition: 'filter 500ms ease-out' }}
          className={isMobile
            ? 'object-cover select-none'
            : 'object-cover select-none group-hover:blur-sm group-focus-visible:blur-sm'}
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
      </div>

      {!isMobile && (
        <div className="
          pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 py-6 text-center
          bg-black/20 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300
        ">
          <div className="text-xl font-normal italic tracking-wide text-tsiakkas-light drop-shadow-md">{photo.caption}</div>
        </div>
      )}
    </button>
  );
}
