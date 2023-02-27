import Image from "next/image";
import signature from "@asssets/signature.png";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-between border-t border-gray-300 xs:flex-row xs:items-stretch">
        <span className="mt-4 flex w-full flex-row justify-between text-sm">
          <Image src={signature} alt="The source of truth" width={84} />
          <a rel="noopener noreferrer" target="_blank" href={repo}>
            <span className="flex flex-col hover:underline">
              <span>Made by me with NextJS and Tailwind.</span>
              <span>Take a look at keybraker.github.io</span>
            </span>
          </a>
        </span>
      </div>
    </>
  );
}
