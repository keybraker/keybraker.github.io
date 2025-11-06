import { MdClose } from "@react-icons/all-files/md/MdClose";
import { MdInfo } from "@react-icons/all-files/md/MdInfo";
import { MdInfoOutline } from "@react-icons/all-files/md/MdInfoOutline";
import { MdPause } from "@react-icons/all-files/md/MdPause";
import { MdPlayArrow } from "@react-icons/all-files/md/MdPlayArrow";
import { HiDownload } from "@react-icons/all-files/hi/HiDownload";
import { downloadImageWithWatermark, downloadImageAsPolaroid } from "@/utils/watermark";
import type { PhotoWithCategory } from '@/types/photo';
import { useState, useRef, useEffect } from 'react';

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
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const downloadMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target as Node)) {
        setShowDownloadMenu(false);
      }
    }

    if (showDownloadMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showDownloadMenu]);
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
        <div className="relative" ref={downloadMenuRef}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDownloadMenu(!showDownloadMenu);
            }}
            aria-label="Download image options"
            className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-tsiakkas-light hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-tsiakkas-light/40 flex items-center justify-center transition-all"
            title="Download options"
          >
            <HiDownload size={20} />
          </button>
          {showDownloadMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-tsiakkas-dark/95 rounded-xl shadow-2xl z-50 overflow-hidden border border-tsiakkas-light/50">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadImageWithWatermark(active);
                  setShowDownloadMenu(false);
                }}
                className="w-full px-5 py-4 text-left text-sm text-tsiakkas-light hover:bg-white/10 transition-all duration-200 border-b border-tsiakkas-light/10 last:border-b-0 group"
              >
                <p className="font-medium">With Watermark</p>
                <p className="text-xs text-tsiakkas-light/50 mt-1">Professional with signature</p>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  downloadImageAsPolaroid(active);
                  setShowDownloadMenu(false);
                }}
                className="w-full px-5 py-4 text-left text-sm text-tsiakkas-light hover:bg-white/10 transition-all duration-200 border-b border-tsiakkas-light/10 last:border-b-0 group"
              >
                <p className="font-medium">Polaroid Style</p>
                <p className="text-xs text-tsiakkas-light/50 mt-1">Elegant vintage frame</p>
              </button>
            </div>
          )}
        </div>
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
