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
    <div className="flex flex-row flex-start justify-around gap-4">
      <a href={addr}>
        <MdLocationOn />
      </a>
      <a href={mail}>
        <MdEmail />
      </a>
      <a href={gthb}>
        <FaGithub />
      </a>
      <a href={lnkd}>
        <FaLinkedin />
      </a>
      <a href={twtr}>
        <FaTwitter />
      </a>
    </div>
  );
}

export default function LandingName() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <span className="text-xl font-helvetica font-semibold antialiased">
          Ioannis Tsiakkas
        </span>
        <AboutPageInner></AboutPageInner>
      </div>
      <div className="border border-black mb-4"></div>
    </>
  );
}
