import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const mail = "mailto:" + "iantsiakkas@gmail.com";
const address = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const github = "https://github.com/" + "Keybraker";
const twitter = "https://twitter.com/" + "RealTsiakkas";
const linkedin = "https://www.linkedin.com/in/" + "itsiakkas";

function AboutPageInner() {
  return (
    <div className="flex-start flex flex-row items-center justify-around gap-4 align-baseline text-tsiakkas-dark dark:text-tsiakkas-light">
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
    <header className="sticky top-0 z-10 border-b-2 border-tsiakkas-dark dark:border-tsiakkas-light flex flex-col justify-center place-self-center max-w-[83rem] w-full">
      <div className="flex flex-col items-center justify-between gap-2 px-0 pt-2 pb-4 bg-tsiakkas-light dark:bg-tsiakkas-dark xs:py-4 xs:flex-row sm:items-stretch">
        <span className="italic flex flex-col self-center text-center gap-1 font-helvetica text-2xl font-semibold text-tsiakkas-dark dark:text-tsiakkas-light tn:flex-row xs:gap-2">
          <span>Ioannis</span>
          <span>Tsiakkas</span>
        </span>
        <AboutPageInner></AboutPageInner>
      </div>
    </header>
  );
}
