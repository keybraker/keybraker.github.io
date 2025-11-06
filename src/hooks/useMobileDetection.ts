import { useEffect, useRef, useState } from 'react';

interface UseMobileDetectionReturn {
  isMobile: boolean;
}

export function useMobileDetection(): UseMobileDetectionReturn {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile };
}
