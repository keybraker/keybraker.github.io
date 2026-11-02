import { DarkModeToggle } from "@/components/darkModeToggle";
import SpinningAvatar from "@/components/SpinningAvatar";
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

function FilledCoffeeIcon({ className, size = 20 }: { className?: string; size?: number | string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" fill="none" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <path d="M6 1v3M10 1v3M14 1v3" fill="none" />
    </svg>
  );
}

function AboutPageInner({ activePage }: { activePage: string | null }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const baseIconClasses = "antialiased transition-all duration-300 ease-out";
  const dimmedClasses = "opacity-30 grayscale";
  const destinations = [
    { id: "resume", href: "/resume", label: "Resume", icon: <IoIosPaper size={16} /> },
    { id: "photography", href: "/photography", label: "Photography", icon: <MdPhotoCamera size={16} /> },
    { id: "support", href: "/support", label: "Support", icon: <FilledCoffeeIcon size={16} /> },
  ];

  const iconClasses = (id: string) =>
    `flex transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tsiakkas-dark/30 dark:focus-visible:ring-tsiakkas-light/40 ${hovered && hovered !== id ? dimmedClasses : ""
    }`;

  return (
    <div className="flex items-center justify-self-center gap-2 text-tsiakkas-dark dark:text-tsiakkas-light md:justify-self-end">
      <nav
        aria-label="Main pages"
        className="flex items-center gap-[3px] rounded-xl bg-tsiakkas-dark/5 p-1.5 text-tsiakkas-dark dark:bg-tsiakkas-light/5 dark:text-tsiakkas-light"
      >
        {destinations.map(({ id, href, label, icon }) => {
          const isActive = activePage === id;

          return (
            <Link
              key={id}
              href={href}
              title={label}
              aria-label={`Go to ${label.toLowerCase()} page`}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center justify-center rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tsiakkas-dark/30 dark:focus-visible:ring-tsiakkas-light/40 ${isActive
                ? "bg-tsiakkas-dark text-tsiakkas-light shadow-sm dark:bg-tsiakkas-light dark:text-tsiakkas-dark"
                : "hover:bg-tsiakkas-dark/10 dark:hover:bg-tsiakkas-light/10"
                }`}
            >
              <span className={baseIconClasses}>{icon}</span>
            </Link>
          );
        })}
      </nav>
      <span
        aria-hidden="true"
        className="mx-2 h-5 w-[2px] bg-tsiakkas-dark dark:bg-tsiakkas-light"
      />
      <div className="flex items-center gap-0">
        <a
          title="Location"
          aria-label="By clicking you will be taken to Maps"
          rel="noopener noreferrer"
          target="_blank"
          href={address}
          onMouseEnter={() => setHovered("location")}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered("location")}
          onBlur={() => setHovered(null)}
          className={`${iconClasses("location")} py-1.5 pr-1.5 pl-0`}
        >
          <MdLocationOn className={baseIconClasses} size="20px" />
        </a>
        <a
          title="Email"
          aria-label="By clicking you will be taken to Mail"
          rel="noopener noreferrer"
          target="_blank"
          href={mail}
          onMouseEnter={() => setHovered("mail")}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered("mail")}
          onBlur={() => setHovered(null)}
          className={`${iconClasses("mail")} p-1.5`}
        >
          <MdEmail className={baseIconClasses} size="20px" />
        </a>
        <a
          title="GitHub"
          aria-label="By clicking you will be taken to Github"
          rel="noopener noreferrer"
          target="_blank"
          href={github}
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered("github")}
          onBlur={() => setHovered(null)}
          className={`${iconClasses("github")} p-1.5`}
        >
          <FaGithub className={baseIconClasses} size="20px" />
        </a>
        <a
          title="LinkedIn"
          aria-label="By clicking you will be taken to LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
          href={linkedin}
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered("linkedin")}
          onBlur={() => setHovered(null)}
          className={`${iconClasses("linkedin")} p-1.5`}
        >
          <FaLinkedin className={baseIconClasses} size="20px" />
        </a>
        <div
          title="Toggle theme"
          onMouseEnter={() => setHovered("theme")}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered("theme")}
          onBlur={() => setHovered(null)}
          className={`${iconClasses("theme")} p-1.5`}
        >
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const activePage = router.pathname.startsWith("/photography")
    ? "photography"
    : router.pathname === "/resume"
      ? "resume"
      : router.pathname === "/support"
        ? "support"
        : null;

  const firstSegment = router.pathname.split('/').filter(Boolean)[0];
  const routeLabel = isHome
    ? 'overview'
    : firstSegment
      ? firstSegment
        .replace(/-/g, ' ')
      : 'resume';

  return (
    <header className="sticky top-0 z-10 flex flex-col justify-center place-self-center w-full eq:max-w-[1320px] bg-tsiakkas-light dark:bg-tsiakkas-dark">
      <div className="px-4 eq:px-0">
        <div className="
        grid grid-cols-1 justify-items-center gap-4
        md:grid-cols-[1fr_auto] md:items-center md:justify-items-stretch
        px-0 tn:px-4 pt-2 tn:pt-2 pb-4 tn:pb-4
        xs:py-4
        border-b-2
        border-tsiakkas-dark dark:border-tsiakkas-light
      ">
          <div className="flex flex-row items-center gap-3 md:justify-self-start">
            <div className="hidden sm:block">
              <SpinningAvatar
                src="https://avatars.githubusercontent.com/u/23459466?v=4"
                alt="Ioannis Tsiakkas"
                size="w-7 h-7"
                smSize="sm:w-7 sm:h-7"
              />
            </div>
            <Link href="/" className="flex flex-row items-center gap-3">
              <h1 className="font-serif
                flex flex-col self-center tn:flex-row tn:items-baseline xs:gap-2 gap-1
                text-center text-2xl font-extrabold leading-none
                text-tsiakkas-dark dark:text-tsiakkas-light
              ">
                <span>Tsiakkas</span>
                <span>Ioannis</span>
                {routeLabel && (
                  <span className="
                  font-light italic tracking-wide flex flex-row gap-1
                  items-baseline justify-center leading-tight
                ">
                    <span className="opacity-60 text-3xl leading-none">×</span>
                    <span className="text-2xl leading-none">{routeLabel}</span>
                  </span>
                )}
              </h1>
            </Link>
          </div>
          <AboutPageInner activePage={activePage} />
        </div>
      </div>
    </header>
  );
}
