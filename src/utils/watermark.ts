export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';

/**
 * Apply LSB steganography to embed a hidden message in image data
 */
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

/**
 * Apply a visible watermark text to a canvas
 */
export async function applyVisibleWatermark(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  text: string
): Promise<void> {
  const fontSize = Math.max(10, Math.round(Math.max(canvas.width, canvas.height) * 0.012));
  await document.fonts.load(`500 ${fontSize}px "Fraunces"`);
  ctx.font = `500 ${fontSize}px "Fraunces", serif`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';

  ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
  ctx.shadowBlur = Math.max(Math.round(fontSize * 0.15), 1);
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = Math.max(Math.round(fontSize * 0.025), 1);

  const x = canvas.width / 2;
  const padding = Math.max(Math.round(fontSize * 0.6), 6);
  const y = canvas.height - padding;
  ctx.fillText(text, x, y);
}

/**
 * Create a watermarked image with embedded hidden message
 */
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
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${imageSrc}`));
    img.src = imageSrc;
  });

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const watermarkedData = applyLSBSteganography(imageData, hiddenMessage);
  ctx.putImageData(watermarkedData, 0, 0);

  await applyVisibleWatermark(ctx, canvas, visibleText);

  return canvas;
}
