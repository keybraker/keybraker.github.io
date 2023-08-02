import EducationPage from "@/abilities/education";
import Email from "@/abilities/email";
import ExperiencePage from "@/abilities/experience";
import Footer from "@/abilities/footer";
import Header from "@/abilities/header";
import ProjectsPage from "@/abilities/projects";
import SkillPage from "@/abilities/skills";
import CategoryTitle from "@/components/categoryTitle";
import Head from "next/head";

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
        <div className="flex flex-col justify-center place-self-center h-full w-full">
          <Header />

          <div className="place-self-center w-full max-w-[82rem] my-8 px-4 eq:px-0">
            <Email />
          </div>

          <CategoryTitle title={"Professional Experience"} />
          <div className="place-self-center w-full max-w-[82rem] mb-8 px-4 eq:px-0">
            <ExperiencePage />
          </div>

          <CategoryTitle title={"Notable Projects"} />
          <div className="place-self-center w-full max-w-[82rem] mb-8 px-4 eq:px-0">
            <ProjectsPage />
          </div>

          <CategoryTitle title={"Education"} />
          <div className="place-self-center w-full max-w-[82rem] mb-8 px-4 eq:px-0">
            <EducationPage />
          </div>

          <CategoryTitle title={"Technical and Personal Skills"} />
          <div className="place-self-center w-full max-w-[82rem] mb-8 px-4 eq:px-0">
            <SkillPage />
          </div>

          <Footer />

          <div className="sticky bottom-0 -z-10 flex flex-col justify-center place-self-center w-full">
            <WaveSvg />

            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center h-16 opacity-[0.03] dark:opacity-[0.03]">
              <span className="select-none text-vws leading-vws text-medwork-dark dark:text-medwork-light font-bold overflow-hidden h-3/7 tracking-widest">
                TSIAKKAS
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
