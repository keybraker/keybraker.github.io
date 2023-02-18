import CategoryTitle from "@/components/categoryTitle";
import EducationPage from "@/components/education";
import Email from "@/components/email";
import ExperiencePage from "@/components/experience";
import LandingName from "@/components/landingName";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ioannis Tsiakkas</title>
        <meta name="description" content="By Ioannis with NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-between gap-4 py-4 px-4 md:py-12 md:px-32 xl:py-18 xl:px-36">
        <LandingName></LandingName>
        <Email></Email>
        <CategoryTitle title={"Experience"}></CategoryTitle>
        <ExperiencePage></ExperiencePage>
        <CategoryTitle title={"Education"}></CategoryTitle>
        <EducationPage></EducationPage>
      </main>
    </>
  );
}
