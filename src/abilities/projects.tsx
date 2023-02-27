import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const projects: ShowcaseType[] = [
  {
    start: "2019",
    end: "Present",
    title:
      '<a href="https://github.com/The-Portal-Bot/Portal" rel="noopener noreferrer" target="_blank" class="hover:underline">Portal</a>',
    info: "A fully functional Discord bot.",
    position: "(Typescript, MongoDb, Mongoose)",
  },
  // {
  //   start: "2017",
  //   end: "Present",
  //   title:
  //     '<a href="https://github.com/keybraker/mediarizer" rel="noopener noreferrer" target="_blank" class="hover:underline">Mediarizer</a>',
  //   info: "A one-step solution to a chronologically organized media library.",
  //   position: "(C++)",
  // },
  {
    start: "2023",
    end: "Present",
    title:
      '<a href="https://github.com/keybraker/mediarizer" rel="noopener noreferrer" target="_blank" class="hover:underline">Mediarizer 2</a>',
    info: "A one-step solution to a chronologically organized media library.",
    position: "(Go)",
  },
];

export default function ProjectsPage(props: any) {
  return (
    <div className="rounded-[4px] border border-black bg-white p-2.5">
      <ShowcaseListings showcases={projects} />
    </div>
  );
}
