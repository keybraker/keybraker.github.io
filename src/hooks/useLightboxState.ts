import { useState, useEffect } from 'react';

interface UseLightboxStateReturn {
  showInfo: boolean;
  setShowInfo: (v: boolean) => void;
  showShortcuts: boolean;
  setShowShortcuts: (v: boolean) => void;
  isCarouselMode: boolean;
  setIsCarouselMode: (v: boolean) => void;
}

export function useLightboxState(isMobile: boolean): UseLightboxStateReturn {
  const [showInfo, setShowInfo] = useState(true);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [isCarouselMode, setIsCarouselMode] = useState(false);

  useEffect(() => {
    setShowInfo(true);
  }, [isMobile]);

  return {
    showInfo,
    setShowInfo,
    showShortcuts,
    setShowShortcuts,
    isCarouselMode,
    setIsCarouselMode
  };
}
