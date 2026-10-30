import { DarkModeToggle } from "@/components/darkModeToggle";
import signature from "@assets/signature.png";
import Image from "next/image";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <>
      <div className="z-10 px-4 eq:px-0 place-self-center w-full eq:max-w-[1320px] py-4 border-t-2 border-tsiakkas-dark dark:border-tsiakkas-light">
        <div className="flex w-full flex-row items-center justify-between sm:grid sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-x-4">
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
          <div className="flex justify-end sm:col-start-3">
            <DarkModeToggle />
          </div>
        </div>
      </div>
      {/* Pinned to the bottom of the viewport so it stays visible at all times,
          mirroring the two-flag strip at the top of the header. */}
      <div className="fixed inset-x-0 bottom-0 z-10 flex flex-row justify-center pointer-events-none">
        <div className="w-full eq:max-w-[1320px] flex flex-row">
          <div
            aria-hidden="true"
            className="w-1/2 border-b-4 [border-image:linear-gradient(90deg,#0055A4_0,#0055A4_33%,#FFFFFF_33%,#FFFFFF_66%,#EF4135_66%,#EF4135_100%)_1]"
          />
          <div
            aria-hidden="true"
            className="w-1/2 border-b-4 [border-image:linear-gradient(90deg,#FFFFFF_0,#FFFFFF_33%,#D57800_33%,#D57800_66%,#FFFFFF_66%,#FFFFFF_100%)_1]"
          />
        </div>
      </div>
    </>
  );
}
