import Image from "next/image";
import signature from "@assets/signature.png";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <div className="z-10 px-4 py-4 border-t-2 border-tsiakkas-dark dark:border-tsiakkas-light place-self-center max-w-[82rem] w-full">
      <div className="flex w-full flex-row justify-between">
        <Image src={signature} alt="signature" width={84} />
        <a rel="noopener noreferrer" target="_blank" href={repo}>
          <div className="flex flex-wrap gap-2  hover:underline text-tsiakkas-dark dark:text-tsiakkas-light text-sm">
            <span>Designed and created by me.</span>
            <span>Using NextJS and Tailwind [keybraker.github.io].</span>
          </div>
        </a>
      </div>
    </div>
  );
}
