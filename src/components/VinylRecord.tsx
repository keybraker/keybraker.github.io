export interface VinylRecordProps {
  src: string;
  alt: string;
  size?: string;
  smSize?: string;
  labelPercent?: string;
}

export default function VinylRecord({
  src,
  alt,
  size = "w-56 h-56",
  smSize = "sm:w-64 sm:h-64",
  labelPercent = "58%",
}: VinylRecordProps) {
  return (
    <div
      className={`relative ${size} ${smSize}`}
      style={{ animation: "spin 12s linear infinite" }}
    >
      {/* Vinyl disc background */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[radial-gradient(circle_at_center,_#1a1a1a_55%,_#0d0d0d_56%,_#1a1a1a_58%,_#0d0d0d_59%,_#1a1a1a_61%,_#0d0d0d_62%,_#1a1a1a_64%,_#0d0d0d_65%,_#1a1a1a_67%,_#0d0d0d_68%,_#1a1a1a_70%,_#0d0d0d_71%,_#1a1a1a_73%,_#0d0d0d_74%,_#1a1a1a_76%,_#0d0d0d_77%,_#1a1a1a_79%,_#0d0d0d_80%,_#111111_84%,_#0a0a0a_100%)]
          shadow-2xl
        "
        style={{
          boxShadow:
            "0 0 0 1px #222, 0 0 0 3px #111, 0 0 0 4px #1a1a1a, 0 0 0 6px #0d0d0d, 0 0 0 7px #1a1a1a, 0 0 0 9px #0d0d0d, 0 4px 20px rgba(0,0,0,0.5)",
        }}
      />
      {/* Vinyl shine overlay */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[radial-gradient(ellipse_at_30%_30%,_rgba(255,255,255,0.08)_0%,_transparent_50%)]
          pointer-events-none
        "
      />
      {/* Center label (avatar) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full overflow-hidden border-2 border-[#222]"
          style={{ width: labelPercent, height: labelPercent }}
        >
          <img
            loading="lazy"
            decoding="async"
            width="224"
            height="224"
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Center hole */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6%] h-[6%] rounded-full bg-tsiakkas-light dark:bg-[#f6f1eb] shadow-inner" />
    </div>
  );
}
