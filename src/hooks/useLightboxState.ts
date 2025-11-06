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
  const [showInfo, setShowInfo] = useState(!isMobile);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [isCarouselMode, setIsCarouselMode] = useState(false);

  // Update showInfo when mobile state changes
  useEffect(() => {
    setShowInfo(!isMobile);
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
