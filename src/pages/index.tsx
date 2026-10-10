import Card from "@/components/card";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { IoIosPaper } from "@react-icons/all-files/io/IoIosPaper";
import { MdPhotoCamera } from "@react-icons/all-files/md/MdPhotoCamera";
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

      <main className="flex flex-col gap-6 sm:gap-8 w-full h-full">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full">
          <Link
            href="/resume"
            className="group w-full h-full"
          >
            <Card
              title="Resume"
              description="My work, in my own code"
              colour="cyan"
              icon={<IoIosPaper size="26px" />}
            />
          </Link>

          <Link
            href="/photography"
            className="group w-full h-full"
          >
            <Card
              title="Photography"
              description="My work, in my own shots"
              colour="yellow"
              icon={<MdPhotoCamera size="26px" />}
            />
          </Link>
        </div>

        <Link
          href="/support"
          className="group w-full h-full"
        >
          <Card
            title="Support"
            description="If anything I have made has helped you, consider supporting my endeavours"
            colour="pink"
            icon={<FaHeart size="26px" />}
          />
        </Link>
      </main>
    </div>
  );
}
