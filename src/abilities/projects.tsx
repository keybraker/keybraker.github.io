import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const projects: ShowcaseType[] = [
  {
    start: "2019",
    end: "Present",
    title:
      '<a href="https://github.com/The-Portal-Bot/Portal" rel="noopener noreferrer" target="_blank" class="hover:underline">Portal</a>',
    info: "A fully functional Discord bot.",
    position: "(TypeScript, MongoDB, Mongoose)",
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
      '<a href="https://github.com/keybraker/mediarizer-2" rel="noopener noreferrer" target="_blank" class="hover:underline">Mediarizer 2</a>',
    info: "A one-step solution to a chronologically organized media library.",
    position: "(Go)",
  },
  {
    start: "2023",
    end: "Present",
    title:
      '<a href="https://github.com/keybraker/skroutz-sponsored-flagger" rel="noopener noreferrer" target="_blank" class="hover:underline">Skroutz sponsored flagger</a>',
    info: 'An ad flagger for the price comparison site, <a href="https://skroutz.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">skroutz.gr</a>.',
    position: "(TypeScript, Wepback)",
    description: [
      "Current user-base of 250+ users.",
      "Created and deployed an extension to both Chrome's and Firefox's store.",
      "Used the latest technologies to make deployments fast and of the highest quality.",
    ],
  },
];

export default function ProjectsPage(props: any) {
  return (
    <div>
      <ShowcaseListings showcases={projects} />
    </div>
  );
}
