import { ImFilePdf } from "@react-icons/all-files/im/ImFilePdf";
import { HiOutlineReply } from "@react-icons/all-files/hi/HiOutlineReply";
import { HiOutlineDownload } from "@react-icons/all-files/hi/HiOutlineDownload";
import { useEffect, useState } from "react";
import { description } from "@/pages";

const mail = "iantsiakkas@gmail.com";
const mailDisplay = "iantsiakkas AT gmail DOT com";
const mailto = "mailto:" + mail;
const subject = "?subject=" + "Hey%20Ioannis";
// const body = "&body=" + "Email%20Body";

const date = new Date(); // Replace with your date object
const options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
} as Intl.DateTimeFormatOptions;
const formattedDate = date.toLocaleString("en-US", options);

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export default function Email() {
  const hasMounted = useHasMounted();

  return (
    <section className="mb-12 rounded-[10px] bg-verge-cyan text-tsiakkas-dark p-4 shadow-xl">
      {/* <HeadScene /> */}
      <div className="flex-start flex justify-between">
        <div className="flex flex-col">
          <span>
            from:{" "}
            <a
              className="font-semibold hover:underline"
              href={`${mailto}${subject}`}
            >
              {mailDisplay}
            </a>
          </span>
          <span>to: you</span>
          <span>subject: Welcome to my website</span>
        </div>
        <div className="flex flex-col items-end">
          {hasMounted ? (
            <span>{formattedDate}</span>
          ) : null}
          <span className="italic">one attachment (1)</span>
        </div>
      </div>

      <div className="my-4 border border-dashed border-tsiakkas-dark"></div>

      <div>
        <p>Hello,</p>

        <p className="mt-2 whitespace-pre-line">{description}</p>
        <p className="mt-2 whitespace-pre-line">
          You can take a look at some of my work on my Github page here{" "}
          <a
            aria-label="Clicking here will take you to my github page"
            href="https://github.com/keybraker"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            github.com/keybraker
          </a>
          .
        </p>
        <p className="mt-2 whitespace-pre-line">
          If you have any ideas you wish to share with me, feel free to reply.
        </p>

        <p className="mt-4">Kindly, Ioannis</p>
      </div>

      <div className="flex-end align-start h-42 mt-7 flex justify-between gap-1 text-tsiakkas-dark dark:text-tsiakkas-light ">
        <a
          className="flex h-full w-24 items-center justify-around gap-0 hover:text-tsiakkas-dark rounded-full bg-tsiakkas-light dark:bg-tsiakkas-dark py-1.5 px-2.5 shadow-md hover:bg-gray-300"
          href={`${mailto}${subject}`}
        >
          <HiOutlineReply />
          <span>Reply</span>
        </a>

        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition duration-500 group-hover:opacity-70 group-hover:duration-200"></div>
          <a
            className="relative flex h-full w-28 items-center justify-around gap-0 rounded-md bg-tsiakkas-light dark:bg-tsiakkas-dark shadow-md ring-1 ring-gray-900/5 hover:bg-gray-300"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="ioannis_tsiakkas_resume.pdf"
          >
            <span className="contents group-hover:hidden">
              <ImFilePdf />
              <span>Resume</span>
            </span>
            <span className="hidden group-hover:contents dark:text-tsiakkas-dark text-tsiakkas-dark">
              <HiOutlineDownload />
              <span>72.11 Kb</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
