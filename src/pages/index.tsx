import Card from "@/components/card";
import Head from "next/head";
import Link from "next/link";

const title = "Ioannis Tsiakkas";
const description = 'Software engineer and part time photographer.';

export default function Home() {
  return (
    <div className="mx-auto w-full h-full flex flex-col">
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.ico" />

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
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>

      <main className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full h-full">
        <Link
          href="/resume"
          className="w-full h-full"
        >
          <Card
            title="Resume"
            description="My work, in my own code"
            colour="cyan"
          />
        </Link>

        <Link
          href="/photography"
          className="w-full h-full"
        >
          <Card
            title="Photography"
            description="My work, in my own shots"
            colour="yellow"
          />
        </Link>
      </main>
    </div>
  );
}
