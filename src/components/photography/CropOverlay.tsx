import { HiDownload } from '@react-icons/all-files/hi/HiDownload';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { useCallback, useEffect, useRef, useState } from 'react';

interface CropOverlayProps {
  imageWidth: number;
  imageHeight: number;
  targetWidth: number;
  targetHeight: number;
  onConfirm: (cropData: { srcX: number; srcY: number; srcWidth: number; srcHeight: number }) => void;
  onCancel: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

interface CropBox {
  srcX: number;
  srcY: number;
  srcWidth: number;
  srcHeight: number;
}

export default function CropOverlay({
  imageWidth,
  imageHeight,
  targetWidth,
  targetHeight,
  onConfirm,
  onCancel,
  containerRef,
}: CropOverlayProps) {
  const [cropBox, setCropBox] = useState<CropBox>({
    srcX: 0,
    srcY: 0,
    srcWidth: imageWidth,
    srcHeight: imageHeight,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [draggedSide, setDraggedSide] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const srcRatio = imageWidth / imageHeight;
    const targetRatio = targetWidth / targetHeight;

    let initialCrop: CropBox = {
      srcX: 0,
      srcY: 0,
      srcWidth: imageWidth,
      srcHeight: imageHeight,
    };

    if (srcRatio > targetRatio) {
      initialCrop.srcWidth = Math.round(imageHeight * targetRatio);
      initialCrop.srcX = Math.round((imageWidth - initialCrop.srcWidth) / 2);
    } else if (srcRatio < targetRatio) {
      initialCrop.srcHeight = Math.round(imageWidth / targetRatio);
      initialCrop.srcY = Math.round((imageHeight - initialCrop.srcHeight) / 2);
    }

    setCropBox(initialCrop);
  }, [imageWidth, imageHeight, targetWidth, targetHeight]);

  const getScaleFactor = useCallback(() => {
    if (!containerRef.current) return { scaleX: 1, scaleY: 1 };

    const container = containerRef.current;
    const img = container.querySelector('img');
    if (!img) return { scaleX: 1, scaleY: 1 };

    const displayWidth = img.offsetWidth;
    const displayHeight = img.offsetHeight;

    return {
      scaleX: displayWidth / imageWidth,
      scaleY: displayHeight / imageHeight,
    };
  }, [containerRef, imageWidth, imageHeight]);

  const getHandleAt = (x: number, y: number, tolerance: number = 10): string | null => {
    const { scaleX, scaleY } = getScaleFactor();
    const container = containerRef.current;
    if (!container) return null;

    const rect = container.getBoundingClientRect();
    const containerX = x - rect.left;
    const containerY = y - rect.top;

    const displayCropX = cropBox.srcX * scaleX;
    const displayCropY = cropBox.srcY * scaleY;
    const displayCropWidth = cropBox.srcWidth * scaleX;
    const displayCropHeight = cropBox.srcHeight * scaleY;

    if (
      Math.abs(containerX - (displayCropX + displayCropWidth)) < tolerance &&
      Math.abs(containerY - displayCropY) < tolerance
    ) {
      return 'ne';
    }
    if (
      Math.abs(containerX - displayCropX) < tolerance &&
      Math.abs(containerY - displayCropY) < tolerance
    ) {
      return 'nw';
    }
    if (
      Math.abs(containerX - (displayCropX + displayCropWidth)) < tolerance &&
      Math.abs(containerY - (displayCropY + displayCropHeight)) < tolerance
    ) {
      return 'se';
    }
    if (
      Math.abs(containerX - displayCropX) < tolerance &&
      Math.abs(containerY - (displayCropY + displayCropHeight)) < tolerance
    ) {
      return 'sw';
    }

    if (
      Math.abs(containerY - displayCropY) < tolerance &&
      containerX > displayCropX &&
      containerX < displayCropX + displayCropWidth
    ) {
      return 'n';
    }
    if (
      Math.abs(containerY - (displayCropY + displayCropHeight)) < tolerance &&
      containerX > displayCropX &&
      containerX < displayCropX + displayCropWidth
    ) {
      return 's';
    }
    if (
      Math.abs(containerX - displayCropX) < tolerance &&
      containerY > displayCropY &&
      containerY < displayCropY + displayCropHeight
    ) {
      return 'w';
    }
    if (
      Math.abs(containerX - (displayCropX + displayCropWidth)) < tolerance &&
      containerY > displayCropY &&
      containerY < displayCropY + displayCropHeight
    ) {
      return 'e';
    }

    if (
      containerX > displayCropX &&
      containerX < displayCropX + displayCropWidth &&
      containerY > displayCropY &&
      containerY < displayCropY + displayCropHeight
    ) {
      return 'move';
    }

    return null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const handle = getHandleAt(e.clientX, e.clientY);
    if (handle) {
      setIsDragging(true);
      setDraggedSide(handle);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !dragStart) return;

      const { scaleX, scaleY } = getScaleFactor();
      const currentX = e.clientX;
      const currentY = e.clientY;
      const deltaX = (currentX - dragStart.x) / scaleX;
      const deltaY = (currentY - dragStart.y) / scaleY;

      const targetRatio = targetWidth / targetHeight;
      const newCropBox = { ...cropBox };

      if (draggedSide === 'move') {
        newCropBox.srcX = Math.max(0, Math.min(imageWidth - cropBox.srcWidth, cropBox.srcX + deltaX));
        newCropBox.srcY = Math.max(0, Math.min(imageHeight - cropBox.srcHeight, cropBox.srcY + deltaY));
      } else if (draggedSide === 'nw') {
        const newWidth = cropBox.srcWidth - deltaX;
        const newHeight = newWidth / targetRatio;
        if (newWidth > 50 && newHeight > 50) {
          newCropBox.srcWidth = newWidth;
          newCropBox.srcHeight = newHeight;
          newCropBox.srcX = cropBox.srcX + deltaX;
          newCropBox.srcY = cropBox.srcY + (cropBox.srcHeight - newHeight);
        }
      } else if (draggedSide === 'ne') {
        const newWidth = cropBox.srcWidth + deltaX;
        const newHeight = newWidth / targetRatio;
        if (newWidth > 50 && newHeight > 50) {
          newCropBox.srcWidth = newWidth;
          newCropBox.srcHeight = newHeight;
          newCropBox.srcY = cropBox.srcY + (cropBox.srcHeight - newHeight);
        }
      } else if (draggedSide === 'sw') {
        const newWidth = cropBox.srcWidth - deltaX;
        const newHeight = newWidth / targetRatio;
        if (newWidth > 50 && newHeight > 50) {
          newCropBox.srcWidth = newWidth;
          newCropBox.srcHeight = newHeight;
          newCropBox.srcX = cropBox.srcX + deltaX;
        }
      } else if (draggedSide === 'se') {
        const newWidth = cropBox.srcWidth + deltaX;
        const newHeight = newWidth / targetRatio;
        if (newWidth > 50 && newHeight > 50) {
          newCropBox.srcWidth = newWidth;
          newCropBox.srcHeight = newHeight;
        }
      } else if (draggedSide === 'n' || draggedSide === 's') {
        const newHeight = draggedSide === 'n' ? cropBox.srcHeight - deltaY : cropBox.srcHeight + deltaY;
        const newWidth = newHeight * targetRatio;
        const centerX = cropBox.srcX + cropBox.srcWidth / 2;
        if (newWidth > 50 && newHeight > 50 && newWidth <= imageWidth) {
          newCropBox.srcWidth = newWidth;
          newCropBox.srcHeight = newHeight;
          newCropBox.srcX = centerX - newWidth / 2;
          if (draggedSide === 'n') {
            newCropBox.srcY = cropBox.srcY + deltaY;
          }
        }
      } else if (draggedSide === 'w' || draggedSide === 'e') {
        const newWidth = draggedSide === 'w' ? cropBox.srcWidth - deltaX : cropBox.srcWidth + deltaX;
        const newHeight = newWidth / targetRatio;
        const centerY = cropBox.srcY + cropBox.srcHeight / 2;
        if (newWidth > 50 && newHeight > 50 && newHeight <= imageHeight) {
          newCropBox.srcWidth = newWidth;
          newCropBox.srcHeight = newHeight;
          if (draggedSide === 'w') {
            newCropBox.srcX = cropBox.srcX + deltaX;
          }
          newCropBox.srcY = centerY - newHeight / 2;
        }
      }

      newCropBox.srcX = Math.max(0, Math.min(imageWidth - newCropBox.srcWidth, newCropBox.srcX));
      newCropBox.srcY = Math.max(0, Math.min(imageHeight - newCropBox.srcHeight, newCropBox.srcY));

      setCropBox(newCropBox);
      setDragStart({ x: currentX, y: currentY });
    },
    [isDragging, dragStart, cropBox, imageWidth, imageHeight, targetWidth, targetHeight, getScaleFactor, draggedSide]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedSide(null);
    setDragStart(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove]);

  const { scaleX, scaleY } = getScaleFactor();
  const displayCropX = cropBox.srcX * scaleX;
  const displayCropY = cropBox.srcY * scaleY;
  const displayCropWidth = cropBox.srcWidth * scaleX;
  const displayCropHeight = cropBox.srcHeight * scaleY;

  return (
    <>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full cursor-crosshair z-40"
        onMouseDown={handleMouseDown}
        style={{ pointerEvents: 'auto' }}
      >
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(0, 0, 0, 0.5)" />

        <rect
          x={displayCropX}
          y={displayCropY}
          width={displayCropWidth}
          height={displayCropHeight}
          fill="rgba(0, 0, 0, 0)"
          pointerEvents="none"
        />

        <rect
          x={displayCropX}
          y={displayCropY}
          width={displayCropWidth}
          height={displayCropHeight}
          fill="none"
          stroke="rgb(255, 200, 0)"
          strokeWidth="2"
          pointerEvents="none"
        />

        <circle cx={displayCropX} cy={displayCropY} r="6" fill="rgb(255, 200, 0)" />
        <circle cx={displayCropX + displayCropWidth} cy={displayCropY} r="6" fill="rgb(255, 200, 0)" />
        <circle cx={displayCropX} cy={displayCropY + displayCropHeight} r="6" fill="rgb(255, 200, 0)" />
        <circle cx={displayCropX + displayCropWidth} cy={displayCropY + displayCropHeight} r="6" fill="rgb(255, 200, 0)" />

        <circle cx={displayCropX + displayCropWidth / 2} cy={displayCropY} r="5" fill="rgb(255, 200, 0)" />
        <circle cx={displayCropX + displayCropWidth / 2} cy={displayCropY + displayCropHeight} r="5" fill="rgb(255, 200, 0)" />
        <circle cx={displayCropX} cy={displayCropY + displayCropHeight / 2} r="5" fill="rgb(255, 200, 0)" />
        <circle cx={displayCropX + displayCropWidth} cy={displayCropY + displayCropHeight / 2} r="5" fill="rgb(255, 200, 0)" />
      </svg>

      <div className="absolute top-4 left-4 z-50 text-xs text-tsiakkas-light/70 bg-tsiakkas-dark/60 border border-tsiakkas-light/70 backdrop-blur-sm px-3 py-2 rounded-2xl">
        Drag edges or corners to adjust crop. Target: {targetWidth} × {targetHeight}
      </div>

      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={onCancel}
          className="p-2 rounded-full bg-tsiakkas-dark/60 hover:bg-tsiakkas-dark/80 text-tsiakkas-light border border-tsiakkas-light/70 backdrop-blur-sm transition-all flex items-center justify-center"
          title="Cancel crop"
        >
          <MdClose size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-4 z-50">
        <button
          onClick={() => onConfirm(cropBox)}
          className="px-4 py-2 rounded-full bg-tsiakkas-light/20 hover:bg-tsiakkas-light/30 text-tsiakkas-light backdrop-blur-sm font-medium transition-all flex items-center justify-center gap-2"
          title="Download with this crop"
        >
          <HiDownload size={16} />
          <span className="text-sm">Download</span>
        </button>
      </div>
    </>
  );
}
