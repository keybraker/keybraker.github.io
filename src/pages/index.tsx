import Category from "@/components/category";
import Head from "next/head";
import Link from "next/link";

const title = "Ioannis Tsiakkas";

export default function Home() {
  return (
    <div className="mx-auto w-full flex flex-col">
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content='Software engineer and part time photographer.' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsiakkas.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content='Software engineer and part time photographer.' />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itsiakkas.com/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content='Software engineer and part time photographer.' />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>

      <main className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
        <Link href="/resume" className="
          w-full rounded-2xl
          border-4 border-verge-cyan/30 hover:border-tsiakkas-dark dark:hover:border-tsiakkas-light
        ">
          <Category
            title="Resume"
            description="My work, in my own code"
            colour="bg-verge-cyan/80 dark:bg-verge-cyan/75 border-4 border-verge-cyan/30"
          />
        </Link>

        <Link href="/photography" className="
          w-full rounded-2xl
          border-4 border-verge-yellow/30 hover:border-tsiakkas-dark dark:hover:border-tsiakkas-light
        ">
          <Category
            title="Photography"
            description="My work, in my own shots"
            colour="bg-verge-yellow/80 dark:bg-verge-yellow/75 border-4 border-verge-yellow/30"
          />
        </Link>
      </main>
    </div>
  );
}
