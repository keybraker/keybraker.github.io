export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';

async function createWatermarkedImage(
  imageSrc: string,
  hiddenMessage: string,
  visibleText: string
): Promise<HTMLCanvasElement> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get canvas context');

  const img = new window.Image();
  img.crossOrigin = 'anonymous';

  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
    img.src = imageSrc;
  });

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const watermarkedData = applyLSBSteganography(imageData, hiddenMessage);
  ctx.putImageData(watermarkedData, 0, 0);

  applyVisibleWatermark(ctx, canvas, visibleText, img.width);

  return canvas;
}

function applyVisibleWatermark(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  text: string,
  imgWidth: number
): void {
  const fontSize = Math.round(Math.max(canvas.width, canvas.height) * 0.015);
  ctx.font = `italic ${fontSize}px "Cormorant Garamond", "Didot", "Times New Roman", serif`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';

  const shadowBlur = Math.max(Math.round(fontSize * 0.2), 1);
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = shadowBlur;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = Math.max(Math.round(fontSize * 0.04), 1);

  const x = canvas.width / 2;
  const padding = Math.max(Math.round(fontSize * 0.3), 3);
  const y = canvas.height - padding;
  ctx.fillText(text, x, y);
}

function applyLSBSteganography(imageData: ImageData, message: string): ImageData {
  const data = imageData.data;
  const messageBinary = message
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');

  const header = '11111111' + messageBinary.length.toString(2).padStart(16, '0');
  const fullBinary = header + messageBinary;

  let bitIndex = 0;
  for (let i = 0; i < data.length && bitIndex < fullBinary.length; i += 4) {
    data[i] = (data[i] & 0xfe) | parseInt(fullBinary[bitIndex]);
    bitIndex++;
  }

  return imageData;
}

export async function downloadImageWithWatermark(photo: { caption: string; originalImage: string }) {
  try {
    const hiddenMessage = `© ${new Date().getFullYear()} Ioannis Tsiakkas. All rights reserved. Original photo: ${photo.caption}`;
    const visibleText = 'Ioannis Tsiakkas';

    const canvas = await createWatermarkedImage(photo.originalImage, hiddenMessage, visibleText);

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${photo.caption.replace(/\s+/g, '_')}-Ioannis_Tsiakkas.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      'image/jpeg',
      0.85
    );
  } catch (err) {
    console.error('Failed to download image with watermark:', err);
  }
}

export async function downloadImageCropped(photo: { caption: string; originalImage: string }, targetWidth: number, targetHeight: number) {
  try {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = photo.originalImage;
    });

    const srcRatio = img.width / img.height;
    const targetRatio = targetWidth / targetHeight;

    let srcWidth = img.width;
    let srcHeight = img.height;
    let srcX = 0;
    let srcY = 0;

    // If source and target have different aspect ratios, crop to match target
    if (srcRatio > targetRatio) {
      // Source is wider; crop from sides
      srcWidth = Math.round(img.height * targetRatio);
      srcX = Math.round((img.width - srcWidth) / 2);
    } else if (srcRatio < targetRatio) {
      // Source is taller; crop from top/bottom
      srcHeight = Math.round(img.width / targetRatio);
      srcY = Math.round((img.height - srcHeight) / 2);
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

    // Apply watermark to the cropped image
    const visibleText = 'Ioannis Tsiakkas';
    applyVisibleWatermark(ctx, canvas, visibleText, targetWidth);

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${photo.caption.replace(/\s+/g, '_')}-${targetWidth}x${targetHeight}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      'image/jpeg',
      0.9
    );
  } catch (err) {
    console.error('Failed to download cropped image:', err);
  }
}

export async function downloadImageAsPolaroid(photo: { caption: string; location: string; country: string; settings: string; originalImage: string }) {
  try {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = photo.originalImage;
    });

    const borderSize = Math.round(img.width * 0.015); // 1.5% ultra-thin white border on sides and top

    // For portrait and square images, make the bottom border larger
    const isNotLandscape = img.height >= img.width;
    const bottomBorderSize = Math.round(img.width * (isNotLandscape ? 0.12 : 0.08)); // 12% for portrait/square, 8% for landscape

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    canvas.width = img.width + 2 * borderSize;
    canvas.height = img.height + borderSize + bottomBorderSize;

    // Fill canvas with white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the image
    ctx.drawImage(img, borderSize, borderSize);

    // Add text at the bottom
    // For portrait and square images, use larger font sizes
    const titleFontSize = Math.round(img.width * (isNotLandscape ? 0.032 : 0.02));
    const subtitleFontSize = Math.round(img.width * (isNotLandscape ? 0.018 : 0.012));

    ctx.textBaseline = 'top';

    const textPadding = Math.round(bottomBorderSize * 0.2);
    const leftTextX = borderSize;
    const rightTextX = canvas.width - borderSize;
    let textY = img.height + borderSize + textPadding;

    // Title (image caption) - LEFT SIDE
    ctx.font = `${titleFontSize}px "Georgia", "Garamond", serif`;
    ctx.fillStyle = '#2c2c2c';
    ctx.textAlign = 'left';
    ctx.fillText(photo.caption, leftTextX, textY);
    textY += titleFontSize + Math.round(titleFontSize * 0.3);

    // Location, Country - LEFT SIDE
    ctx.font = `${subtitleFontSize}px "Georgia", "Garamond", serif`;
    ctx.fillStyle = '#666666';
    ctx.textAlign = 'left';
    ctx.fillText(`${photo.location}, ${photo.country}`, leftTextX, textY);

    // Reset to right side for credit
    let rightTextY = img.height + borderSize + textPadding;

    // "Shot by Ioannis Tsiakkas" - RIGHT SIDE
    ctx.font = `${subtitleFontSize}px "Georgia", "Garamond", serif`;
    ctx.fillStyle = '#2c2c2c';
    ctx.textAlign = 'right';
    ctx.fillText('Shot by Ioannis Tsiakkas', rightTextX, rightTextY);
    rightTextY += subtitleFontSize + Math.round(subtitleFontSize * 0.3);

    // Website URL
    ctx.font = `${subtitleFontSize}px "Georgia", "Garamond", serif`;
    ctx.fillStyle = '#999999';
    ctx.textAlign = 'right';
    ctx.fillText('itsiakkas.com/photography', rightTextX, rightTextY);

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${photo.caption.replace(/\s+/g, '_')}-Polaroid.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      'image/jpeg',
      0.9
    );
  } catch (err) {
    console.error('Failed to download image as Polaroid:', err);
  }
}
