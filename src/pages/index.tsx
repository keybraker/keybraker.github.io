import EducationPage from "@/abilities/education";
import Email from "@/abilities/email";
import ExperiencePage from "@/abilities/experience";
import Footer from "@/abilities/footer";
import Header from "@/abilities/header";
import ProjectsPage from "@/abilities/projects";
import SkillPage from "@/abilities/skills";
import Category, { CategoryProps } from "@/components/category";
import Head from "next/head";

const categories: CategoryProps[] = [
  {
    title: "Professional Experience",
    description: "In my professional career, I have worked in a variety of projects, ranging from web development to machine learning and from mobile development to cloud computing. I have worked in both small and large teams, in both agile and waterfall environments, and in both frontend and backend development.",
    colour: "bg-verge-lime",
  },
  {
    title: "Technical Skills",
    description: "I have a strong background in computer science, with a focus on software engineering.I have worked with a variety of programming languages, frameworks, and tools, and I am always eager to learn new technologies.I am a team player, and I enjoy working in a team environment.I am also a fast learner, and I am always looking for new challenges to overcome.",
    colour: "bg-verge-pink",
  },
  {
    title: "Education",
    description: "My education has provided me with a strong foundation in computer science, with a focus on software engineering. I have also taken courses in mathematics, physics, and electronics.",
    colour: "bg-verge-red",
  },
  {
    title: "Notable Projects",
    description: "I am always working on side projects to improve my skills and learn new technologies. Some of my projects are available on GitHub.",
    colour: "bg-verge-purple",
  },
];

function WaveSvg() {
  return (
    <div className="absolute select-none bottom-0 left-0 w-full opacity-10">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#06B6D4" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,69.3C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
      <svg
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,500 C 0,500 0,166 0,166 C 140.42857142857144,179.46428571428572 280.8571428571429,192.92857142857142 410,187 C 539.1428571428571,181.07142857142858 657,155.75 768,138 C 879,120.24999999999999 983.1428571428571,110.07142857142858 1094,116 C 1204.857142857143,121.92857142857142 1322.4285714285716,143.96428571428572 1440,166 C 1440,166 1440,500 1440,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="#0693e3"
          fillOpacity="0.53"
          className="path-0"
        ></path>
        <path
          d="M 0,500 C 0,500 0,333 0,333 C 90.25,363.42857142857144 180.5,393.85714285714283 306,379 C 431.5,364.14285714285717 592.2499999999999,304 721,294 C 849.7500000000001,284 946.5,324.1428571428571 1061,339 C 1175.5,353.8571428571429 1307.75,343.42857142857144 1440,333 C 1440,333 1440,500 1440,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="#0693e3"
          fillOpacity="1"
          className="path-1"
        ></path>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full">
      <Head>
        <title>Ioannis Tsiakkas</title>
        <meta name="title" content="Ioannis Tsiakkas" />
        <meta name="description" content="Ioannis Tsiakkas Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsiakkas.com/" />
        <meta property="og:title" content="Ioannis Tsiakkas" />
        <meta property="og:description" content="Ioannis Tsiakkas Website" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itsiakkas.com/" />
        <meta property="twitter:title" content="Ioannis Tsiakkas" />
        <meta
          property="twitter:description"
          content="Ioannis Tsiakkas Website"
        />
        <meta
          property="twitter:image"
          content="httpsT://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>

      <main>
        {/* <div className="flex flex-col justify-center place-self-center h-full w-full"> */}
        <div className="flex flex-col justify-center place-self-center h-full w-full">

          <Header />

          <div className="flex flex-row flex-wrap gap-24 justify-center eq:mx-auto w-full max-w-[1320px] my-8 px-4 eq:px-0">
            <Email />

            <div className="flex w-full flex-col items-center eq:flex-row eq:items-start gap-16 eq:gap-0">
              <div className="flex flex-1 flex-col eq:mr-100 mx-auto w-full">
                <ExperiencePage />
              </div>
              <div className="eq:self-stretch block z-0 eq:flex eq:flex-1 eq:flex-col">
                <Category {...categories[0]} />
              </div>
            </div>

            <div className="flex w-full flex-col items-center eq:flex-row eq:items-start gap-16 eq:gap-0">
              <div className="flex flex-1 flex-col eq:mr-100 mx-auto w-full">
                <SkillPage />
              </div>
              <div className="eq:self-stretch block z-0 eq:flex eq:flex-1 eq:flex-col">
                <Category {...categories[1]} />
              </div>
            </div>

            <div className="flex w-full flex-col items-center eq:flex-row eq:items-start gap-16 eq:gap-0">
              <div className="flex flex-1 flex-col eq:mr-100 mx-auto w-full">
                <EducationPage />
              </div>
              <div className="eq:self-stretch block z-0 eq:flex eq:flex-1 eq:flex-col">
                <Category {...categories[2]} />
              </div>
            </div>

            <div className="flex w-full flex-col items-center eq:flex-row eq:items-start gap-16 eq:gap-0">
              <div className="flex flex-1 flex-col eq:mr-100 mx-auto w-full">
                <ProjectsPage />
              </div>
              <div className="eq:self-stretch block z-0 eq:flex eq:flex-1 eq:flex-col">
                <Category {...categories[3]} />
              </div>
            </div>
          </div>

          <Footer />

          {/* <div className="sticky bottom-0 -z-10 flex flex-col justify-center w-full">
            <WaveSvg />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center h-16 opacity-[0.03] dark:opacity-[0.03]">
              <span className="select-none text-vws leading-vws text-medwork-dark dark:text-medwork-light font-bold overflow-hidden h-3/7 tracking-widest">
                TSIAKKAS
              </span>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
