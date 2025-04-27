import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const projects: ShowcaseType[] = [
  {
    start: new Date("2023-08-01"),
    end: null,
    title:
      '<a href="https://github.com/keybraker/skroutz-sponsored-flagger" rel="noopener noreferrer" target="_blank" class="hover:underline">reSkroutzed</a>',
    info: 'A must-have enhancer for the  website <a href="https://skroutz.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">skroutz.gr</a>.',
    position: "(TypeScript, Wepback)",
    description: [
      "More than <b>600+</b> daily active users.",
      "Created and deployed an extension to both Chrome's and Firefox's store.",
      "Used the latest technologies to make deployments fast and of the highest quality.",
      "Open source.",
    ],
  },
  {
    start: new Date("2020-02-01"),
    end: null,
    title:
      '<a href="https://github.com/The-Portal-Bot/Portal" rel="noopener noreferrer" target="_blank" class="hover:underline">portal (discord bot)</a>',
    info: "A fully functional Discord bot.",
    position: "(TypeScript, MongoDB, Mongoose)",
    description: [
      "Open source.",
    ],
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
    start: new Date("2023-09-01"),
    end: new Date("2024-02-01"),
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
