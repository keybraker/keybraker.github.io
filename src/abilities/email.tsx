import { GrDocumentPdf } from "@react-icons/all-files/gr/GrDocumentPdf";
import { HiOutlineReply } from "@react-icons/all-files/hi/HiOutlineReply";
import dayjs from "dayjs";

const mail = "iantsiakkas@gmail.com";
const mailto = "mailto:" + mail;
const subject = "?subject=" + "Hey%20Ioannis";
const body = "&body=" + "Email%20Body";
const date = dayjs().format("MMM DD, YYYY, HH:mm");

export default function Email() {
  return (
    <div className="shadow-xl bg-blue-100 border-black border rounded-[10px] p-2.5 mb-12">
      {/* <HeadScene /> */}
      <div className="flex flex-start justify-between">
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
          <time className="text-gray-400">{date}</time>
          <span className="italic">(1) one attachment</span>
        </div>
      </div>

      <div className="border border-dashed border-black my-4"></div>

      <div>
        <p>Hello,</p>
        <br />
        <p>
          I&apos;m a Software Engineer with experience in building web
          applications.
          <br />
          I mainly focus on the backend client and infrastructure but have also
          worked in the frontend.
          <br />
          Currently working as a backend developer at{" "}
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
        <br />
        <p>
          You can take a look at some of my work on my Github page by clicking{" "}
          <a
            href="https://github.com/keybraker"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            here
          </a>
          .
        </p>
        <br />
        <p>If you have any ideas you wish to share, feel free to reply.</p>
        <br />
        Kindly,
        <br />
        Ioannis Tsiakkas
      </div>
      <div className="flex flex-end align-start justify-between mt-7 gap-1">
        <a
          className="shadow-md hover:bg-gray-200 bg-white border border-black rounded-[18px] flex justify-between items-center gap-2 py-1.5 px-2.5 black mt-1"
          href={`${mailto}${subject}`}
        >
          <HiOutlineReply />
          <span>Reply</span>
        </a>
        <a
          className="shadow-md hover:bg-gray-200 bg-white border border-black rounded-md flex justify-between items-center gap-2 py-2 px-3 black mt-1"
          href="/static/ioannis_tsiakkas_resume.pdf"
          download="ioannis_tsiakkas_resume.pdf"
        >
          <GrDocumentPdf />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
}
