export interface SpinningAvatarProps {
  src: string;
  alt: string;
  size?: string;
  smSize?: string;
}

export default function SpinningAvatar({
  src,
  alt,
  size = "w-48 h-48",
  smSize = "sm:w-56 sm:h-56",
}: SpinningAvatarProps) {
  return (
    <div
      className={`relative ${size} ${smSize}`}
      style={{ animation: "spin 12s linear infinite" }}
    >
      <img
        loading="lazy"
        decoding="async"
        width="224"
        height="224"
        src={src}
        alt={alt}
        className="
          w-full h-full
          rounded-full
          object-cover
          border
          border-tsiakkas-dark/20 dark:border-tsiakkas-light/100
          shadow-lg
        "
      />
    </div>
  );
}
