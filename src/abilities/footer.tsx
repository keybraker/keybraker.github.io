import signature from "@assets/signature.png";
import Image from "next/image";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <div className="z-10 px-4 eq:px-0 place-self-center w-full eq:max-w-[1320px] py-4 border-t-2 border-tsiakkas-dark dark:border-tsiakkas-light">
      <div className="flex w-full flex-row justify-center gap-4">
        <Image
          src={signature}
          alt=""
          width={96}
          height={64}
          className="subpixel-antialiased bg-tsiakkas-blueLight dark:bg-tsiakkas-electric-yellow transform rotate-3"
        />
        <a rel="noopener noreferrer" target="_blank" href={repo} className="hover:underline flex flex-wrap gap-1 text-md font-bold text-tsiakkas-dark dark:text-tsiakkas-light">
          Designed and created by me<br></br><span className="italic font-extrabold">Keybraker</span>
        </a>
      </div>
    </div>
  );
}
