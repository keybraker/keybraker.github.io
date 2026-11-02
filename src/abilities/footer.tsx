import signature from "@assets/signature.png";
import Image from "next/image";

const repo = "https://itsiakkas.com";

export default function Footer() {
  return (
    <>
      <div className="z-10 px-4 eq:px-0 place-self-center w-full eq:max-w-[1320px] py-4 border-t-2 border-tsiakkas-dark dark:border-tsiakkas-light">
        <div className="flex w-full flex-row items-center justify-center sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-x-4">
          <div className="hidden sm:flex sm:col-start-1 sm:justify-start">
            <Image
              src={signature}
              alt=""
              width={1079}
              height={403}
              className="h-auto w-24 subpixel-antialiased bg-tsiakkas-blueLight dark:bg-tsiakkas-electric-yellow"
            />
          </div>
          <a rel="noopener noreferrer" target="_blank" href={repo} className="hover:underline whitespace-nowrap text-sm sm:text-md font-bold text-tsiakkas-dark dark:text-tsiakkas-light sm:col-start-2 sm:justify-self-center">
            Designed and created by me{" "}
            <span className="italic font-extrabold">Keybraker</span>
          </a>
        </div>
      </div>
    </>
  );
}
