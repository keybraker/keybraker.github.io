import { applyVisibleWatermark } from '@/utils/watermark';

interface PhotoWithCaption {
  caption: string;
  originalImage: string;
}

interface PhotoWithMetadata extends PhotoWithCaption {
  location: string;
  country: string;
  settings: string;
}

class ImageDownloader {
  private readonly ARTIST_NAME = 'Ioannis Tsiakkas';
  private readonly WEBSITE_URL = 'itsiakkas.com/photography';

  /**
   * Load an image from a source URL and return the Image object
   */
  private async loadImage(imageSrc: string): Promise<HTMLImageElement> {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';

    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${imageSrc}`));
      img.src = imageSrc;
    });
  }

  /**
   * Trigger browser download of a blob as a file
   */
  private downloadBlob(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Download image with visible and hidden watermark
   */
  async downloadImageWithWatermark(photo: PhotoWithCaption): Promise<void> {
    try {
      const img = await this.loadImage(photo.originalImage);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      applyVisibleWatermark(ctx, canvas, this.ARTIST_NAME);

      return new Promise((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to create blob'));
              return;
            }
            const filename = `${photo.caption.replace(/\s+/g, '_')}-${this.ARTIST_NAME.replace(/\s+/g, '_')}.jpg`;
            this.downloadBlob(blob, filename);
            resolve();
          },
          'image/jpeg',
          0.85
        );
      });
    } catch (err) {
      console.error('Failed to download image with watermark:', err);
      throw err;
    }
  }

  /**
   * Download image cropped to specified dimensions with watermark
   */
  async downloadImageCropped(
    photo: PhotoWithCaption,
    targetWidth: number,
    targetHeight: number
  ): Promise<void> {
    try {
      const img = await this.loadImage(photo.originalImage);

      const srcRatio = img.width / img.height;
      const targetRatio = targetWidth / targetHeight;

      let srcWidth = img.width;
      let srcHeight = img.height;
      let srcX = 0;
      let srcY = 0;

      // Crop to match target aspect ratio
      if (srcRatio > targetRatio) {
        srcWidth = Math.round(img.height * targetRatio);
        srcX = Math.round((img.width - srcWidth) / 2);
      } else if (srcRatio < targetRatio) {
        srcHeight = Math.round(img.width / targetRatio);
        srcY = Math.round((img.height - srcHeight) / 2);
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      canvas.width = targetWidth;
      canvas.height = targetHeight;
      ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

      applyVisibleWatermark(ctx, canvas, this.ARTIST_NAME);

      return new Promise((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to create blob'));
              return;
            }
            const filename = `${photo.caption.replace(/\s+/g, '_')}-${targetWidth}x${targetHeight}.jpg`;
            this.downloadBlob(blob, filename);
            resolve();
          },
          'image/jpeg',
          0.9
        );
      });
    } catch (err) {
      console.error('Failed to download cropped image:', err);
      throw err;
    }
  }

  /**
   * Download image with custom crop coordinates
   */
  async downloadImageWithCustomCrop(
    photo: PhotoWithCaption,
    targetWidth: number,
    targetHeight: number,
    cropData: { srcX: number; srcY: number; srcWidth: number; srcHeight: number }
  ): Promise<void> {
    try {
      const img = await this.loadImage(photo.originalImage);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      canvas.width = targetWidth;
      canvas.height = targetHeight;
      ctx.drawImage(
        img,
        cropData.srcX,
        cropData.srcY,
        cropData.srcWidth,
        cropData.srcHeight,
        0,
        0,
        targetWidth,
        targetHeight
      );

      applyVisibleWatermark(ctx, canvas, this.ARTIST_NAME);

      return new Promise((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to create blob'));
              return;
            }
            const filename = `${photo.caption.replace(/\s+/g, '_')}-${targetWidth}x${targetHeight}.jpg`;
            this.downloadBlob(blob, filename);
            resolve();
          },
          'image/jpeg',
          0.9
        );
      });
    } catch (err) {
      console.error('Failed to download image with custom crop:', err);
      throw err;
    }
  }

  /**
   * Download image as a Polaroid-style card with metadata
   */
  async downloadImageAsPolaroid(photo: PhotoWithMetadata): Promise<void> {
    try {
      const img = await this.loadImage(photo.originalImage);

      const borderSize = Math.round(img.width * 0.015);
      const isNotLandscape = img.height >= img.width;
      const bottomBorderSize = Math.round(img.width * (isNotLandscape ? 0.12 : 0.08));

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      canvas.width = img.width + 2 * borderSize;
      canvas.height = img.height + borderSize + bottomBorderSize;

      // Fill with white background and draw image
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, borderSize, borderSize);

      // Calculate font sizes
      const titleFontSize = Math.round(img.width * (isNotLandscape ? 0.032 : 0.02));
      const subtitleFontSize = Math.round(img.width * (isNotLandscape ? 0.018 : 0.012));
      const textPadding = Math.round(bottomBorderSize * 0.2);

      ctx.textBaseline = 'top';

      // Left side text
      const leftTextX = borderSize;
      let textY = img.height + borderSize + textPadding;

      ctx.font = `${titleFontSize}px "Georgia", "Garamond", serif`;
      ctx.fillStyle = '#2c2c2c';
      ctx.textAlign = 'left';
      ctx.fillText(photo.caption, leftTextX, textY);
      textY += titleFontSize + Math.round(titleFontSize * 0.3);

      ctx.font = `${subtitleFontSize}px "Georgia", "Garamond", serif`;
      ctx.fillStyle = '#666666';
      ctx.fillText(`${photo.location}, ${photo.country}`, leftTextX, textY);

      // Right side text
      const rightTextX = canvas.width - borderSize;
      let rightTextY = img.height + borderSize + textPadding;

      ctx.font = `${subtitleFontSize}px "Georgia", "Garamond", serif`;
      ctx.fillStyle = '#2c2c2c';
      ctx.textAlign = 'right';
      ctx.fillText(`Shot by ${this.ARTIST_NAME}`, rightTextX, rightTextY);
      rightTextY += subtitleFontSize + Math.round(subtitleFontSize * 0.3);

      ctx.fillStyle = '#999999';
      ctx.fillText(this.WEBSITE_URL, rightTextX, rightTextY);

      return new Promise((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to create blob'));
              return;
            }
            const filename = `${photo.caption.replace(/\s+/g, '_')}-Polaroid.jpg`;
            this.downloadBlob(blob, filename);
            resolve();
          },
          'image/jpeg',
          0.9
        );
      });
    } catch (err) {
      console.error('Failed to download image as Polaroid:', err);
      throw err;
    }
  }
}

// Export singleton instance for convenience
export const imageDownloader = new ImageDownloader();
