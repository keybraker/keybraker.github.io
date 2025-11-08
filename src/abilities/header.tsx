import { DarkModeToggle } from "@/components/darkModeToggle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { IoIosPaper } from "@react-icons/all-files/io/IoIosPaper";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { MdPhotoCamera } from "@react-icons/all-files/md/MdPhotoCamera";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const mail = "mailto:" + "iantsiakkas@gmail.com";
const address = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const github = "https://github.com/" + "Keybraker";
const linkedin = "https://www.linkedin.com/in/" + "itsiakkas";

function AboutPageInner({ showPhotographyLink, showResumeIcon }: { showPhotographyLink: boolean, showResumeIcon: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const baseIconClasses = "antialiased transition-all duration-300 ease-out";
  const dimmedClasses = "opacity-30 grayscale";

  const iconWrapper = (id: string, node: JSX.Element, props?: any) => (
    <span
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      onFocus={() => setHovered(id)}
      onBlur={() => setHovered(null)}
      className={`flex transition-all duration-300 ease-out ${hovered && hovered !== id ? dimmedClasses : ""}`}
      {...props}
    >
      {node}
    </span>
  );

  return (
    <div className="flex flex-row items-center justify-between xs:justify-around gap-4 align-baseline text-tsiakkas-dark dark:text-tsiakkas-light">
      {showPhotographyLink && !showResumeIcon && (
        <Link
          href="/photography"
          aria-label="Go to photography page"
          className="focus:outline-none"
        >
          {iconWrapper("photography",
            <span className="
            md:flex md:gap-2 md:border md:rounded-full md:border-tsiakkas-dark md:dark:border-tsiakkas-light
            md:px-3 md:py-[2px] md:items-center md:snap-center
          md:hover:bg-tsiakkas-dark/20 md:hover:dark:bg-tsiakkas-light/20
            md:transition-all md:duration-300
          ">
              <span className="pb-[2px] font-extrabold hidden md:block italic">Photography</span>
              <span className=""><MdPhotoCamera className={baseIconClasses} size={"20px"} /></span>
            </span>)}
        </Link>
      )}
      {showResumeIcon && (
        <Link
          href="/"
          aria-label="Go to resume (home) page"
          className="focus:outline-none"
        >
          {iconWrapper("resume", <span className="
            md:flex md:gap-2 md:border md:rounded-full md:border-tsiakkas-dark md:dark:border-tsiakkas-light
            md:px-3 md:py-[2px] md:items-center md:snap-center
          md:hover:bg-tsiakkas-dark/20 md:hover:dark:bg-tsiakkas-light/20
            md:transition-all md:duration-300
          ">
            <span className="pb-[2px] font-extrabold hidden md:block italic">Resume</span>
            <span className=""><IoIosPaper className={baseIconClasses} size={"20px"} /></span>
          </span>)}
        </Link>
      )}
      {(showPhotographyLink || showResumeIcon) && (
        <div className={`h-5 w-[2px] bg-tsiakkas-dark dark:bg-tsiakkas-light mx-2 transition-all duration-300 ease-out ${hovered ? dimmedClasses : ""}`}></div>
      )}
      <a
        aria-label="By clicking you will be taken to Maps"
        rel="noopener noreferrer"
        target="_blank"
        href={address}
        className="focus:outline-none"
      >
        {iconWrapper("location", <MdLocationOn className={baseIconClasses} size={"20px"} />)}
      </a>
      <a
        aria-label="By clicking you will be taken to Mail"
        rel="noopener noreferrer"
        target="_blank"
        href={mail}
        className="focus:outline-none"
      >
        {iconWrapper("mail", <MdEmail className={baseIconClasses} size={"20px"} />)}
      </a>
      <a
        aria-label="By clicking you will be taken to Github"
        rel="noopener noreferrer"
        target="_blank"
        href={github}
        className="focus:outline-none"
      >
        {iconWrapper("github", <FaGithub className={baseIconClasses} size={"20px"} />)}
      </a>
      <a
        aria-label="By clicking you will be taken to LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={linkedin}
        className="focus:outline-none"
      >
        {iconWrapper("linkedin", <FaLinkedin className={baseIconClasses} size={"20px"} />)}
      </a>
      <div className={`h-5 w-[2px] bg-tsiakkas-dark dark:bg-tsiakkas-light mx-2 transition-all duration-300 ease-out ${hovered ? dimmedClasses : ""}`}></div>
      {/* Dark mode toggle also participates */}
      <div
        onMouseEnter={() => setHovered("darkmode")}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered("darkmode")}
        onBlur={() => setHovered(null)}
        className={`transition-all duration-300 ease-out ${hovered && hovered !== "darkmode" ? dimmedClasses : ""}`}
      >
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const isPhotography = router.pathname.startsWith('/photography');
  const isHome = router.pathname === '/';

  const firstSegment = router.pathname.split('/').filter(Boolean)[0];
  const routeLabel = isHome
    ? 'resume'
    : firstSegment
      ? firstSegment
        .replace(/-/g, ' ')
      : 'resume';

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
              {routeLabel && (
                <span className="
                  font-light italic tracking-wide flex flex-row gap-1
                  items-center justify-center leading-tight self-center
                ">
                  <span className="opacity-60 text-3xl leading-none">×</span>
                  <span className="leading-none">{routeLabel}</span>
                </span>
              )}
            </h1>
          </Link>
          <AboutPageInner showPhotographyLink={!isPhotography && isHome} showResumeIcon={!isHome} />
        </div>
      </div>
    </header>
  );
}
