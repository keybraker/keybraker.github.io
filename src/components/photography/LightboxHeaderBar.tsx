import { MdClose } from "@react-icons/all-files/md/MdClose";
import { MdInfo } from "@react-icons/all-files/md/MdInfo";
import { MdInfoOutline } from "@react-icons/all-files/md/MdInfoOutline";
import { MdPause } from "@react-icons/all-files/md/MdPause";
import { MdPlayArrow } from "@react-icons/all-files/md/MdPlayArrow";
import { HiDownload } from "@react-icons/all-files/hi/HiDownload";
import { downloadImageWithWatermark } from "@/utils/watermark";
import type { PhotoWithCategory } from '@/types/photo';

interface LightboxHeaderBarProps {
  activeIndex: number;
  total: number;
  isMobile: boolean;
  showInfo: boolean;
  setShowInfo: (v: boolean) => void;
  showShortcuts: boolean;
  setShowShortcuts: (v: boolean) => void;
  isCarouselMode: boolean;
  setIsCarouselMode: (v: boolean) => void;
  onClose: () => void;
  active: PhotoWithCategory;
}

export default function LightboxHeaderBar({
  activeIndex,
  total,
  isMobile,
  showInfo,
  setShowInfo,
  showShortcuts,
  setShowShortcuts,
  isCarouselMode,
  setIsCarouselMode,
  onClose,
  active,
}: LightboxHeaderBarProps) {
  return (
    <div
      className="flex flex-row items-center justify-between p-4 gap-4"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="text-[11px] font-mono px-2 py-1 text-tsiakkas-light/70 bg-tsiakkas-light/10 rounded select-none">
        {activeIndex + 1}/{total}
      </span>
      <div className="flex flex-row gap-2 items-center ml-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowShortcuts(!showShortcuts);
          }}
          aria-label="Show keyboard shortcuts"
          className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all text-lg font-bold"
          title="Press '?' for shortcuts"
        >
          ?
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowInfo(!showInfo);
          }}
          aria-label={showInfo ? "Hide photo info" : "Show photo info"}
          className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all"
          title="Toggle info (I)"
        >
          {showInfo ? <MdInfo size={20} /> : <MdInfoOutline size={20} />}
        </button>
        {!isMobile && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsCarouselMode(!isCarouselMode);
            }}
            aria-label={isCarouselMode ? "Stop carousel" : "Start carousel"}
            className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all"
            title="Auto-play carousel (5 second interval)"
          >
            {isCarouselMode ? <MdPause size={20} /> : <MdPlayArrow size={20} />}
          </button>
        )}
        <button
          onClick={() => downloadImageWithWatermark(active)}
          aria-label="Download image with watermark"
          className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all"
        >
          <HiDownload size={20} />
        </button>
        <button
          onClick={onClose}
          aria-label="Close fullscreen viewer"
          className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all leading-none"
        >
          <MdClose size={20} />
        </button>
      </div>
    </div>
  );
}
