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
    <div className="container">
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

      <main>
        <div className="flex flex-col justify-center place-self-center h-full w-full">
          <Header />

          <div className="flex flex-col justify-center place-self-center max-w-[82rem] my-8">
            <Email />
            <div>
              <div className="sticky inset-y-0 left-0 top-[4.4rem] mt-12 mb-2 text-center xs:top-10 xs:text-left">
                <CategoryTitle title={"Professional Experience"} />
              </div>
              <div>
                <ExperiencePage />
              </div>
            </div>
            <div>
              <div className="sticky inset-y-0 left-0 top-[4.4rem] mt-12 mb-2 text-center xs:top-10 xs:text-left">
                <CategoryTitle title={"Notable Projects"} />
              </div>
              <div>
                <ProjectsPage />
              </div>
            </div>
            <div>
              <div className="sticky inset-y-0 left-0 top-[4.4rem] mt-12 mb-2 text-center xs:top-10 xs:text-left">
                <CategoryTitle title={"Education"} />
              </div>
              <div>
                <EducationPage />
              </div>
            </div>
            <div>
              <div className="sticky inset-y-0 left-0 top-[4.4rem] mt-12 mb-2 text-center xs:top-10 xs:text-left">
                <CategoryTitle title={"Technical and Personal Skills"} />
              </div>
              <div>
                <SkillPage />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}
