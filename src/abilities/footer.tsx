import Image from "next/image";
import signature from "@static/signature.png";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <>
      <div className="border border-gray-300 mt-4"></div>
      <div className="flex flex-col xs:flex-row justify-between items-center xs:items-stretch">
        <span className="w-full flex flex-row justify-between text-sm hover:underline">
          <Image src={signature} alt="The source of truth" width={84} />
          <a rel="noopener noreferrer" target="_blank" href={repo}>
            <span>Created with by me witn NextJS and Tailwind</span>
          </a>
        </span>
      </div>
    </>
  );
}
