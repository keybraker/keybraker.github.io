import signature from "@assets/signature.png";
import Image from "next/image";

const site = "https://itsiakkas.com";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden">
      <div className="relative mx-auto flex w-full max-w-[1320px] items-center justify-center px-4 py-16">
        <Image
          src={signature}
          alt=""
          aria-hidden="true"
          width={1079}
          height={403}
          className="pointer-events-none absolute left-1/2 top-1/2 w-[200px] max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.16] dark:invert dark:opacity-[0.18]"
        />
        <p className="relative text-center text-[13px] leading-none text-tsiakkas-dark/[0.65] dark:text-white/[0.55]">
          Designed and created by me, {" "}
          <a
            href={site}
            className="transition-colors hover:text-tsiakkas-dark dark:hover:text-white focus-visible:text-tsiakkas-dark dark:focus-visible:text-white focus-visible:underline focus-visible:underline-offset-2 focus-visible:outline-none"
          >
            Keybraker
          </a>
        </p>
      </div>
    </footer>
  );
}
