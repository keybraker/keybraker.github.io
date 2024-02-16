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
    <header className="sticky top-0 z-10 flex flex-col justify-center place-self-center max-w-[560px] eq:max-w-[1320px] w-full px-4 eq:px-0">
      <div className="
        flex flex-col items-center justify-between px-4 pt-2 pb-4 tn:pt-2 tn:pb-4 gap-4 bg-tsiakkas-light dark:bg-tsiakkas-dark xs:py-4 xs:flex-row sm:items-stretch
        border-b-2 border-tsiakkas-dark dark:border-tsiakkas-light
      ">
        <Link href="/">
          <h1 className="flex flex-col self-center text-center gap-1 font-helvetica text-2xl font-bold leading-100 text-tsiakkas-dark dark:text-tsiakkas-light tn:flex-row xs:gap-2">
            <span>Ioannis</span>
            <span>Tsiakkas</span>
          </h1>
        </Link>
        <AboutPageInner></AboutPageInner>
      </div>
    </header>
  );
}
