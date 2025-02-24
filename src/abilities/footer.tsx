import Image from "next/image";
import signature from "@assets/signature.png";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <div className="
      z-10 px-4 py-4
      border-t-2 border-tsiakkas-dark dark:border-tsiakkas-light
      place-self-center max-w-[560px] eq:max-w-[1320px] w-full"
    >
      <div className="flex w-full flex-row justify-between gap-4">
        <Image
          src={signature}
          alt="signature"
          width={148}
          height={84}
          className="subpixel-antialiased bg-tsiakkas-electric-orange dark:bg-tsiakkas-electric-yellow transform rotate-3"
        />
        <a rel="noopener noreferrer" target="_blank" href={repo}>
          <div className="flex flex-wrap gap-2 hover:underline text-tsiakkas-dark dark:text-tsiakkas-light text-sm">
            Designed and created by me<br></br>@keybraker.github.io
          </div>
        </a>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="w-full border-t-2 [border-image:linear-gradient(90deg,#0D5EAF_0,#0D5EAF_33%,#FFFFFF_33%,#FFFFFF_66%,#0D5EAF_66%,#0D5EAF_100%)_1]"></div>
        <div className="w-full border-t-2 [border-image:linear-gradient(90deg,#000000_0,#000000_33%,#DD0000_33%,#DD0000_66%,#FFCC00_66%,#FFCC00_100%)_1]"></div>
      </div>
    </div>
  );
}
