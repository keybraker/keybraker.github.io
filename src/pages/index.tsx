import EducationPage from "@/abilities/education";
import Email from "@/abilities/email";
import ExperiencePage from "@/abilities/experience";
import ProjectsPage from "@/abilities/projects";
import SkillPage from "@/abilities/skills";
import SoftwareEngineeringPage from "@/abilities/softwareEngineering";
import Category, { CategoryProps } from "@/components/category";
import MyWords from "@/components/myWords";
import Head from "next/head";

const title = "Ioannis Tsiakkas";
export const description =
  "I'm a software engineer with professional experience in building web applications. \
  My main focus is on the backend client (where the logic is), infrastructure, and system architecture. \
  I have always found UX/UI fascinating and am thus always working on a side website. \
  I am passionate about low-level programming and building things that solve my own and others' problems.";

const categories: CategoryProps[] = [
  {
    title: "Professional Experience",
    description:
      "In my professional career, I have worked in a variety of projects, ranging from web development, API design and implementation to cloud computing and infrastructure. \
    I have worked in both small and large teams, in agile environments, in the frontend and backend.",
    colour: "bg-verge-purple",
  },
  {
    title: "Technical Skills",
    description:
      "I have a strong background in computer science, with a focus on software engineering. \
    I have worked with a variety of programming languages, frameworks, and tools, and I am always eager to learn new technologies. \
    I am a team player, and I enjoy working in a team environment. \
    Learning fast is a strong-suit of mine, and I am always looking for new challenges to overcome.",
    colour: "bg-verge-pink",
  },
  {
    title: "Software Design",
    description:
      "I am continuously working on improving and bettering my software design skills. \
    I always focus on my work being well designed and structured as architecture is one of the, \
    if not the most important think a software engineer has to do. \
    All of this effort is put in order for the systems I design and build to be performant, \
    extendable and easy to work with and contribute to.",
    colour: "bg-verge-blue",
  },
  {
    title: "Education",
    description:
      "My education has provided me with a strong foundation in computer science, with a focus on software engineering ans sytem architecture. \
    In a demanding academic setting I have learned to work under pressure and to meet deadlines. \
    I have also learned to work in a team environment, and to communicate effectively with my peers.",
    colour: "bg-verge-orange",
  },
  {
    title: "Notable Projects",
    description:
      'I am always working on side projects to improve my skills and learn new technologies. \
    I find it very important to keep up with the latest trends in technology, and to always be learning; \
    it also does not hurt when you can have an impact on other people\'s lives alogside. \
    Some of my projects are available on my <a href="https://github.com/keybraker" rel="noopener noreferrer" target="_blank" class="hover:underline">github</a>, where I contribute to open source projects, while also creating my own.',
    colour: "bg-verge-blue",
  },
];

// function WaveSvg() {
//   return (
//     <div className="absolute bottom-0 left-0 w-full select-none opacity-10">
//       {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path fill="#06B6D4" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,69.3C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg> */}
//       <svg id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M 0,500 C 0,500 0,166 0,166 C 140.42857142857144,179.46428571428572 280.8571428571429,192.92857142857142 410,187 C 539.1428571428571,181.07142857142858 657,155.75 768,138 C 879,120.24999999999999 983.1428571428571,110.07142857142858 1094,116 C 1204.857142857143,121.92857142857142 1322.4285714285716,143.96428571428572 1440,166 C 1440,166 1440,500 1440,500 Z"
//           stroke="none"
//           strokeWidth="0"
//           fill="#0693e3"
//           fillOpacity="0.53"
//           className="path-0"
//         ></path>
//         <path
//           d="M 0,500 C 0,500 0,333 0,333 C 90.25,363.42857142857144 180.5,393.85714285714283 306,379 C 431.5,364.14285714285717 592.2499999999999,304 721,294 C 849.7500000000001,284 946.5,324.1428571428571 1061,339 C 1175.5,353.8571428571429 1307.75,343.42857142857144 1440,333 C 1440,333 1440,500 1440,500 Z"
//           stroke="none"
//           strokeWidth="0"
//           fill="#0693e3"
//           fillOpacity="1"
//           className="path-1"
//         ></path>
//       </svg>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="mx-auto w-full">
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content={description} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsiakkas.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itsiakkas.com/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="httpsT://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>

      <main>
        <Email />

        <div className="mb-32 mt-32 flex flex-col gap-16 eq:gap-48">
          <div className="flex w-full flex-col eq:flex-row items-center eq:items-start gap-16 eq:gap-0">
            <div className="eq:mr-100 mx-auto flex w-full flex-1 flex-col">
              <ExperiencePage />
            </div>
            <div className="z-0 block w-full eq:flex eq:flex-1 eq:flex-col eq:self-stretch">
              <Category {...categories[0]} />
            </div>
          </div>

          <div className="flex w-full flex-col eq:flex-row items-center eq:items-start gap-16 eq:gap-0">
            <div className="eq:mr-100 mx-auto flex w-full flex-1 flex-col">
              <ProjectsPage />
              {MyWords({ text: "My work, in my own words", className: "mt-12" })}
              <p className="w-full flex flex-col items-center mt-6 text-md font-semibold gap-[6px]">
                <span>Find all my work at</span>
                <a
                  role="link"
                  aria-label="keybraker's GitHub page"
                  href="https://github.com/keybraker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-lg font-extrabold"
                >
                  github.com/keybraker
                </a>
              </p>
            </div>
            <div className="z-0 block w-full eq:flex eq:flex-1 eq:flex-col eq:self-stretch">
              <Category {...categories[4]} />
            </div>
          </div>

          <div className="flex w-full flex-col eq:flex-row items-center eq:items-start gap-16 eq:gap-0">
            <div className="eq:mr-100 mx-auto flex w-full flex-1 flex-col">
              <EducationPage />
            </div>
            <div className="z-0 block w-full eq:flex eq:flex-1 eq:flex-col eq:self-stretch">
              <Category {...categories[3]} />
            </div>
          </div>

          <div className="
            flex w-full flex-col eq:flex-row eq:items-start items-center rounded-lg
            bg-tsiakkas-blueDark bg-opacity-5 dark:bg-tsiakkas-blueLight dark:bg-opacity-5
            border-2 border-tsiakkas-dark p-8 dark:border-tsiakkas-light
          ">
            <div className="eq:mr-100 mx-auto flex w-full flex-1 flex-col">
              <SkillPage />
            </div>
            <div className="my-12 w-full eq:w-0 border-t border-dashed border-tsiakkas-dark/10 dark:border-tsiakkas-light/10"></div>
            <div className="mx-16 h-0 eq:h-full border-l border-dashed border-tsiakkas-dark/10 dark:border-tsiakkas-light/10"></div>
            <div className="z-0 block w-full eq:flex eq:flex-1 eq:flex-col eq:self-stretch">
              {/* <Category {...categories[1]} /> */}
              <SoftwareEngineeringPage />
            </div>
          </div>

          {/* <div className="flex flex-col eq:flex-row items-center eq:items-start gap-16 eq:gap-0 w-full">
            <div className="flex flex-1 flex-col eq:mr-100 mx-auto w-full">
              <SoftwareEngineeringPage />
            </div>
            <div className="eq:self-stretch block z-0 eq:flex eq:flex-1 eq:flex-col w-full">
              <Category {...categories[2]} />
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
