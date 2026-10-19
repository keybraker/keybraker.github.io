import Card from "@/components/card";
import Seo from "@/components/Seo";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { IoIosPaper } from "@react-icons/all-files/io/IoIosPaper";
import { MdPhotoCamera } from "@react-icons/all-files/md/MdPhotoCamera";
import Link from "next/link";

const title = "Ioannis Tsiakkas — Software Engineer & Hobby Photographer";
const description = "Software engineer and part time photographer.";

export default function Home() {
  return (
    <div className="mx-auto w-full h-full flex flex-col">
      <Seo title={title} description={description} path="/" />

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
