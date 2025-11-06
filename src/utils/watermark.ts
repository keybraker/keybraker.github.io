// Utilities for dynamic client-side watermarking.

export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';

export async function createWatermarkedImage(
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

export function applyVisibleWatermark(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  text: string,
  imgWidth: number
): void {
  const fontSize = 96;
  ctx.font = `italic ${fontSize}px "Cormorant Garamond", "Didot", "Times New Roman", serif`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';

  const shadowBlur = Math.max(Math.round(fontSize * 0.33), 4);
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = shadowBlur;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = Math.max(Math.round(fontSize * 0.08), 2);

  const x = canvas.width / 2;
  const padding = Math.max(Math.round(fontSize * 0.6), 10);
  const y = canvas.height - padding;
  ctx.fillText(text, x, y);
}

export function applyLSBSteganography(imageData: ImageData, message: string): ImageData {
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
    // eslint-disable-next-line no-console
    console.error('Failed to download image with watermark:', err);
  }
}
