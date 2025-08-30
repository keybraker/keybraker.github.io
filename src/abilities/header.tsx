import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { MdPhotoCamera } from "@react-icons/all-files/md/MdPhotoCamera";
import Link from "next/link";
import { useRouter } from "next/router";
import DarkModeToggle from "../components/DarkModeToggle";

const mail = "mailto:" + "iantsiakkas@gmail.com";
const address = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const github = "https://github.com/" + "Keybraker";
const linkedin = "https://www.linkedin.com/in/" + "itsiakkas";

function AboutPageInner({ showPhotographyLink }: { showPhotographyLink: boolean }) {
  return (
    <div className="flex flex-row items-center justify-between xs:justify-around gap-4 align-baseline text-tsiakkas-dark dark:text-tsiakkas-light">
      {showPhotographyLink && (
        <Link
          href="/photography"
          aria-label="Go to photography page"
          className="group relative flex items-center justify-center h-8 w-8 rounded-md
            border border-tsiakkas-dark/10 dark:border-tsiakkas-light/10
            text-tsiakkas-dark dark:text-tsiakkas-light
            bg-tsiakkas-dark/10 dark:bg-tsiakkas-light/10
            hover:bg-tsiakkas-dark/10 dark:hover:bg-tsiakkas-light/20
            shadow-[0_0_0_1px_rgba(0,0,0,0.06)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.15)]
            hover:shadow-[0_2px_6px_-1px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_2px_6px_-1px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.25)]
            transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tsiakkas-dark/40 dark:focus:ring-tsiakkas-light/40"
        >
          <MdPhotoCamera size={18} className="opacity-80 group-hover:opacity-100 transition" />
        </Link>
      )}
      {showPhotographyLink && (
        <div className="h-5 w-[2px] bg-tsiakkas-dark dark:bg-tsiakkas-light mx-2"></div>
      )}
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
      <div className="h-5 w-[2px] bg-tsiakkas-dark dark:bg-tsiakkas-light mx-2"></div>
      <DarkModeToggle />
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const isPhotography = router.pathname.startsWith('/photography');
  const isHome = router.pathname === '/';

  const firstSegment = router.pathname.split('/').filter(Boolean)[0];
  const routeLabel = !isHome && firstSegment
    ? firstSegment
      .replace(/-/g, ' ')
    : '';

  return (
    <header className="sticky top-0 z-10 flex flex-col justify-center place-self-center max-w-[820px] eq:max-w-[1320px] w-full bg-tsiakkas-light dark:bg-tsiakkas-dark">
      <div className="text-tsiakkas-light dark:text-tsiakkas-dark w-full flex flex-row">
        <div className="w-1/2 text-start italic text-[10px] border-b-4 [border-image:linear-gradient(90deg,#000000_0,#000000_33%,#DD0000_33%,#DD0000_66%,#FFCC00_66%,#FFCC00_100%)_1]">
        </div>
        <div className="w-1/2 text-end italic text-[10px] border-b-4 [border-image:linear-gradient(90deg,#0D5EAF_0,#0D5EAF_33%,#FFFFFF_33%,#FFFFFF_66%,#0D5EAF_66%,#0D5EAF_100%)_1]">
        </div>
      </div>
      <div className="px-4 eq:px-0">
        <div className="
        flex flex-col sm:flex-row items-center justify-around xs:justify-between
        px-0 tn:px-4 pt-2 tn:pt-2 pb-4 tn:pb-4 gap-4
        xs:py-4 sm:items-stretch
        border-b-2
        border-tsiakkas-dark dark:border-tsiakkas-light
      ">
          <Link href="/">
            <h1 className="font-serif
                flex flex-col self-center tn:flex-row xs:gap-2 gap-1
                text-center text-2xl font-extrabold leading-100
                text-tsiakkas-dark dark:text-tsiakkas-light
              ">
              <span>Tsiakkas</span>
              <span>Ioannis</span>
              {!isHome && routeLabel && (
                <span className="
                  font-light not-italic tracking-wide flex flex-row gap-1
                  items-center justify-center leading-tight self-center
                ">
                  <span className="opacity-60 text-3xl leading-none">×</span>
                  <span className="leading-none">{routeLabel}</span>
                </span>
              )}
            </h1>
          </Link>
          <AboutPageInner showPhotographyLink={!isPhotography} />
        </div>
      </div>
    </header>
  );
}
