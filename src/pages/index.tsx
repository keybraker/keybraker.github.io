import EducationPage from "@/abilities/education";
import Email from "@/abilities/email";
import ExperiencePage from "@/abilities/experience";
import SkillPage from "@/abilities/skills";
import CategoryTitle from "@/components/categoryTitle";
import Header from "@/abilities/header";
import Head from "next/head";
import Footer from "@/abilities/footer";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Ioannis Tsiakkas</title>
        <meta name="title" content="Ioannis Tsiakkas" />
        <meta
          name="description"
          content="Personal webpage for Ioannis Tsiakkas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsiakkas.com/" />
        <meta property="og:title" content="Ioannis Tsiakkas" />
        <meta
          property="og:description"
          content="Personal webpage for Ioannis Tsiakkas"
        />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/23459466?v=4" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itsiakkas.com/" />
        <meta property="twitter:title" content="Ioannis Tsiakkas" />
        <meta
          property="twitter:description"
          content="Personal webpage for Ioannis Tsiakkas"
        />
        <meta property="twitter:image" content="https://avatars.githubusercontent.com/u/23459466?v=4" />
      </Head>

      <main className="bg-gray-100 flex flex-col place-self-center justify-center gap-4 py-4 px-4 xs:py-6 md:px-24 lg:px-48 xl:px-[440px] 2xl:px-[512px]">
        <Header></Header>
        <Email />
        <CategoryTitle title={"Professional Experience"}></CategoryTitle>
        <ExperiencePage />
        <CategoryTitle title={"Technical and Personal Skills"}></CategoryTitle>
        <SkillPage />
        <CategoryTitle title={"Education"}></CategoryTitle>
        <EducationPage />
        <Footer />
      </main>
    </div>
  );
}
