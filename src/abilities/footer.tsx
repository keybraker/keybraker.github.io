import Image from "next/image";
import signature from "@assets/signature.png";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    // bg-tsiakkas-light dark:bg-tsiakkas-dark
    <>
      <div className="sticky bottom-0 z-10 px-4 py-4 border-t-2 backdrop-blur-sm border-tsiakkas-dark dark:border-tsiakkas-light flex flex-col justify-center place-self-center max-w-[83rem] w-full">
        <div className="flex w-full flex-row justify-between">
          <Image src={signature} alt="signature" width={84} />
          <a rel="noopener noreferrer" target="_blank" href={repo}>
            <div className="flex flex-col hover:underline text-tsiakkas-dark dark:text-tsiakkas-light text-sm">
              <span>Made by me with NextJS and Tailwind.</span>
              <span>Take a look at keybraker.github.io.</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}