import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import Link from "next/link";

const mail = "mailto:" + "iantsiakkas@gmail.com";
const address = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const github = "https://github.com/" + "Keybraker";
const twitter = "https://twitter.com/" + "RealTsiakkas";
const linkedin = "https://www.linkedin.com/in/" + "itsiakkas";

function AboutPageInner() {
  return (
    <div className="flex flex-row items-center justify-between xs:justify-around gap-4 align-baseline text-tsiakkas-dark dark:text-tsiakkas-light">
      <a
        aria-label="By clicking you will be taken to Maps"
        rel="noopener noreferrer"
        target="_blank"
        href={address}
      >
        <MdLocationOn className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Mail"
        rel="noopener noreferrer"
        target="_blank"
        href={mail}
      >
        <MdEmail className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Github"
        rel="noopener noreferrer"
        target="_blank"
        href={github}
      >
        <FaGithub className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={linkedin}
      >
        <FaLinkedin className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Twitter"
        rel="noopener noreferrer"
        target="_blank"
        href={twitter}
      >
        <FaTwitter className="antialiased" size={"20px"} />
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex flex-col justify-center place-self-center max-w-[560px] eq:max-w-[1320px] w-full bg-tsiakkas-light dark:bg-tsiakkas-dark">
      <div className="text-tsiakkas-dark dark:text-tsiakkas-light w-full flex flex-row">
        <div className="w-1/2 text-start italic text-[10px] border-b-4 [border-image:linear-gradient(90deg,#000000_0,#000000_33%,#DD0000_33%,#DD0000_66%,#FFCC00_66%,#FFCC00_100%)_1]">
        </div>
        <div className="w-1/2 text-end italic text-[10px] border-b-4 [border-image:linear-gradient(90deg,#0D5EAF_0,#0D5EAF_33%,#FFFFFF_33%,#FFFFFF_66%,#0D5EAF_66%,#0D5EAF_100%)_1]">
        </div>
      </div>
      <div className="px-4 eq:px-0">
        <div className="
        flex flex-col sm:flex-row items-center justify-around xs:justify-between
        px-0 tn:px-4 pt-2 tn:pt-2 pb-4 tn:pb-4 gap-4
        bg-tsiakkas-light dark:bg-tsiakkas-dark xs:py-4 sm:items-stretch
        border-b-2 border-tsiakkas-dark dark:border-tsiakkas-light
      ">
          <Link href="/">
            <h1 className="
                flex flex-col self-center text-center font-helvetica text-2xl font-bold leading-100 tn:flex-row xs:gap-2 gap-1
                text-tsiakkas-dark dark:text-tsiakkas-light
              ">
              <span>Tsiakkas</span>
              <span>Ioannis</span>
            </h1>
          </Link>
          <AboutPageInner />
        </div>
      </div>
    </header>
  );
}
