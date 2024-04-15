import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const projects: ShowcaseType[] = [
  {
    start: new Date("2023-08-01"),
    end: null,
    title:
      '<a href="https://github.com/keybraker/skroutz-sponsored-flagger" rel="noopener noreferrer" target="_blank" class="hover:underline">reSkroutzed</a>',
    info: 'An ad flagger for the price comparison site, <a href="https://skroutz.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">skroutz.gr</a>.',
    position: "(TypeScript, Wepback)",
    description: [
      "Current user-base of 500+ users.",
      "Created and deployed an extension to both Chrome's and Firefox's store.",
      "Used the latest technologies to make deployments fast and of the highest quality.",
    ],
  },
  {
    start: new Date("2020-02-01"),
    end: null,
    title:
      '<a href="https://github.com/The-Portal-Bot/Portal" rel="noopener noreferrer" target="_blank" class="hover:underline">Portal</a>',
    info: "A fully functional Discord bot.",
    position: "(TypeScript, MongoDB, Mongoose)",
  },
  // {
  //   start: "2017",
  //   end: null,
  //   title:
  //     '<a href="https://github.com/keybraker/mediarizer" rel="noopener noreferrer" target="_blank" class="hover:underline">Mediarizer</a>',
  //   info: "A one-step solution to a chronologically organized media library.",
  //   position: "(C++)",
  // },
  {
    start: new Date("2024-05-01"),
    end: null,
    title:
      '<a href="https://medwork.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">medwork.gr</a>',
    info: "Created the website for Medwork a CRO situated in Athens, Greece.",
    position: "(NextJS, Tailwind)",
  },
  {
    start: new Date("2024-03-01"),
    end: new Date("2024-04-01"),
    title:
      '<a href="https://sinemas.info" rel="noopener noreferrer" target="_blank" class="hover:underline">sinemas.info</a>',
    info: "A focused cinema website where you can see all movies in Heraklion.",
    position: "(NextJS, Tailwind)",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <ShowcaseListings showcases={projects} />
    </div>
  );
}
