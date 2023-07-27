import Image from "next/image";
import signature from "@assets/signature.png";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <>
      <div className="sticky bottom-0 z-40 py-4 bg-tsiakkas-light dark:bg-tsiakkas-dark border-t-2 border-tsiakkas-dark dark:border-tsiakkas-light flex flex-col justify-center place-self-center max-w-[83rem] w-full">
        <div className="flex w-full flex-row justify-between">
          <Image src={signature} alt="signature" width={84} />
          <a rel="noopener noreferrer" target="_blank" href={repo}>
            <div className="flex flex-col hover:underline text-tsiakkas-dark dark:text-tsiakkas-light text-sm">
              <span>Made by me with NextJS and Tailwind.</span>
              <span>Take a look at keybraker.github.io.</span>
            </div>
          </a>
        </div>
        <div className="absolute z-[3] bottom-0 left-0 right-0 flex items-end justify-center h-16 opacity-[0.05] dark:opacity-[0.05]">
          <span className="select-none text-vws leading-vws text-medwork-dark dark:text-medwork-light font-bold overflow-hidden h-3/7 tracking-widest">
            TSIAKKAS
          </span>
        </div>
      </div>
    </>
  );
}
