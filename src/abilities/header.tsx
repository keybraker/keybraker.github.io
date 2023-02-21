import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const mail = "mailto:" + "iantsiakkas@gmail.com";
const addr = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const gthb = "https://github.com/" + "Keybraker";
const twtr = "https://twitter.com/" + "RealTsiakkas";
const lnkd = "https://www.linkedin.com/in/" + "ioannis-t-3365151a2";

function AboutPageInner() {
  return (
    <div className="flex-start flex flex-row items-center justify-around gap-4 align-baseline">
      <a
        aria-label="By clicking you will be taken to Maps"
        rel="noopener noreferrer"
        target="_blank"
        href={addr}
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
        href={gthb}
      >
        <FaGithub className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={lnkd}
      >
        <FaLinkedin className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Twitter"
        rel="noopener noreferrer"
        target="_blank"
        href={twtr}
      >
        <FaTwitter className="antialiased" size={"20px"} />
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black">
      <div className="flex flex-col items-center justify-between gap-2 px-4 py-2 backdrop-blur-lg xs:flex-row xs:items-stretch">
        <span className="flex flex-col items-center gap-1 font-helvetica text-2xl font-semibold tn:flex-row xs:gap-2">
          <span>Ioannis</span>
          <span>Tsiakkas</span>
        </span>
        <AboutPageInner></AboutPageInner>
      </div>
    </header>
  );
}
