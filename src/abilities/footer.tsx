import Image from "next/image";
import signature from "@static/signature.png";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <>
      <div className="mt-4 border border-gray-300"></div>
      <div className="flex flex-col items-center justify-between xs:flex-row xs:items-stretch">
        <span className="flex w-full flex-row justify-between text-sm">
          <Image src={signature} alt="The source of truth" width={84} />
          <a rel="noopener noreferrer" target="_blank" href={repo}>
            <span className="hover:underline">
              Created by me with NextJS and Tailwind.
            </span>
          </a>
        </span>
      </div>
    </>
  );
}
