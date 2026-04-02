import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const THUMBNAIL_ROOT = path.join(process.cwd(), "public", "photos-thumbs");
const THUMBNAIL_MAX_DIMENSION = 960;
const THUMBNAIL_QUALITY = 72;

export async function ensurePhotoThumbnail({
  sourcePath,
  fileName,
  folder,
}: {
  sourcePath: string;
  fileName: string;
  folder: "personal" | "commissioned";
}): Promise<string> {
  const outputDir = path.join(THUMBNAIL_ROOT, folder);
  const outputFileName = `${fileName.replace(/\.(jpg|jpeg|png)$/i, "")}.webp`;
  const outputPath = path.join(outputDir, outputFileName);

  await fs.mkdir(outputDir, { recursive: true });

  const sourceStats = await fs.stat(sourcePath);
  const thumbnailStats = await fs.stat(outputPath).catch(() => null);

  if (thumbnailStats && thumbnailStats.mtimeMs >= sourceStats.mtimeMs) {
    return `/photos-thumbs/${folder}/${outputFileName}`;
  }

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: THUMBNAIL_MAX_DIMENSION,
      height: THUMBNAIL_MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: THUMBNAIL_QUALITY })
    .toFile(outputPath);

  return `/photos-thumbs/${folder}/${outputFileName}`;
}
