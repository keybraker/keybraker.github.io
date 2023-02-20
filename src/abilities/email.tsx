import { GrDocumentPdf } from "@react-icons/all-files/gr/GrDocumentPdf";
import { HiOutlineReply } from "@react-icons/all-files/hi/HiOutlineReply";
import { HiDocumentDownload } from "@react-icons/all-files/hi/HiDocumentDownload";
import React, { useState } from "react";

const mail = "iantsiakkas@gmail.com";
const mailto = "mailto:" + mail;
const subject = "?subject=" + "Hey%20Ioannis";
const body = "&body=" + "Email%20Body";

const date = new Date(); // Replace with your date object
const options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
} as Intl.DateTimeFormatOptions;
const formattedDate = date.toLocaleString("en-US", options);

function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export default function Email() {
  const hasMounted = useHasMounted();

  return (
    <section className="mb-12 rounded-[10px] border border-black bg-blue-100 p-2.5 shadow-xl">
      {/* <HeadScene /> */}
      <div className="flex-start flex justify-between">
        <div className="flex flex-col">
          <span>
            from:{" "}
            <a className="font-semibold" href={`${mailto}${subject}`}>
              {mail}
            </a>
          </span>
          <span>to: you</span>
        </div>
        <div className="flex flex-col items-end">
          {hasMounted ? (
            <span className="text-gray-600">{formattedDate}</span>
          ) : null}
          <span className="italic">(1) one attachment</span>
        </div>
      </div>

      <div className="my-4 border border-dashed border-black"></div>

      <div>
        <p>Hello,</p>

        <p class="mt-2 whitespace-pre-line">
          I&apos;m a Software Engineer with experience in building web
          applications. I mainly focus on the backend client and infrastructure
          but have also worked in the frontend. Currently working as a backend
          developer at{" "}
          <a
            href="https://fairlo.se/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Fairlo
          </a>
          .
        </p>
        <p class="mt-2 whitespace-pre-line">
          You can take a look at some of my work on my Github page by clicking{" "}
          <a
            aria-label="Clicking here will take you to my github page"
            href="https://github.com/keybraker"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {" "}
            github.com/keybraker{" "}
          </a>
          .
        </p>
        <p class="mt-2 whitespace-pre-line">
          If you have any ideas you wish to share, feel free to reply.
        </p>

        <p class="mt-2 whitespace-pre-line">Kindly, Ioannis Tsiakkas</p>
      </div>

      <div className="flex-end align-start mt-7 flex justify-between gap-1">
        <a
          className="black mt-1 flex items-center justify-between gap-2 rounded-[18px] border border-black bg-white py-1.5 px-2.5 shadow-md hover:bg-gray-200"
          href={`${mailto}${subject}`}
        >
          <HiOutlineReply />
          <span>Reply</span>
        </a>
        <a
          className="black group mt-1 flex items-center justify-between gap-2 rounded-md border border-black bg-white p-1 py-2 px-3  shadow-md hover:bg-gray-200"
          href="/static/ioannis_tsiakkas_resume.pdf"
          download="ioannis_tsiakkas_resume.pdf"
        >
          <span className="contents group-hover:hidden">
            <GrDocumentPdf />
            <span>Resume</span>
          </span>
          <span className="hidden group-hover:contents">
            <HiDocumentDownload />
            <span>72.11 Kb</span>
          </span>
        </a>
      </div>
    </section>
  );
}
