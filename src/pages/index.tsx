import EducationPage from "@/abilities/education";
import Email from "@/abilities/email";
import ExperiencePage from "@/abilities/experience";
import Footer from "@/abilities/footer";
import Header from "@/abilities/header";
import ProjectsPage from "@/abilities/projects";
import SkillPage from "@/abilities/skills";
import CategoryTitle from "@/components/categoryTitle";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container relative mx-auto w-full max-w-6xl px-2 pb-2 xs:px-4 xs:pb-4 md:px-8 md:pb-8">
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
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>

      <main className="flex flex-col justify-center gap-4 place-self-center backdrop-blur-3xl">
        <div>
          <Header />
          <Email />
          <div>
            <div className="sticky inset-y-0 left-0 top-[4.4rem] z-50 mt-12 mb-2 text-center xs:top-10 xs:text-left">
              <CategoryTitle title={"Professional Experience"} />
            </div>
            <div>
              <ExperiencePage />
            </div>
          </div>
          <div>
            <div className="sticky inset-y-0 left-0 top-[4.4rem] z-50 mt-12 mb-2 text-center xs:top-10 xs:text-left">
              <CategoryTitle title={"Technical and Personal Skills"} />
            </div>
            <div>
              <SkillPage />
            </div>
          </div>
          <div>
            <div className="sticky inset-y-0 left-0 top-[4.4rem] z-50 mt-12 mb-2 text-center xs:top-10 xs:text-left">
              <CategoryTitle title={"Education"} />
            </div>
            <div>
              <SkillPage />
            </div>
          </div>
          <div>
            <div className="sticky inset-y-0 left-0 top-[4.4rem] z-50 mt-12 mb-2 text-center xs:top-10 xs:text-left">
              <CategoryTitle title={"Notable Projects"} />
            </div>
            <div>
              <ProjectsPage />
            </div>
          </div>
          <Footer />
        </div>
        {/* <CategoryTitle title={"Professional Experience"} />
        <ExperiencePage />
        <CategoryTitle title={"Technical and Personal Skills"} />
        <SkillPage />
        <CategoryTitle title={"Education"} />
        <EducationPage />
        <CategoryTitle title={"Notable Projects"} />
        <ProjectsPage />
        <Footer /> */}
      </main>
    </div>
  );
}
