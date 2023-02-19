import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const experiences: ShowcaseType[] = [
  {
    start: "Feb 2022",
    end: "Present",
    title:
      '<a href="https://fairlo.se/" rel="noopener noreferrer" target="_blank">Fairlo</a>',
    info: "Financial Services",
    position: "Backend",
    technologies: ["TypeScript", "PostgreSQL"],
  },
  {
    start: "Jul 2021",
    end: "Jan 2022",
    title:
      '<a href="http://www.army.gov.cy/" rel="noopener noreferrer" target="_blank">Cypriot Military</a>',
    info: "Ordnance Corps",
    position: "Obligatory military service",
  },
  {
    start: "Mar 2020",
    end: "Jun 2021",
    title:
      '<a href="https://www.cyberlogic.gr/en/home" rel="noopener noreferrer" target="_blank">Cyberlogic</a>',
    info: "Travel Technologies",
    position: "Frontend",
    technologies: ["Angular"],
    description:
      "I mainly worked on delivering Traveling interface solutions to customers and maintaining while also expanding the core product.",
  },
  {
    start: "May 2019",
    end: "Mar 2020",
    title:
      '<a href="https://www.medwork.gr/index.php" rel="noopener noreferrer" target="_blank">Medwork</a>',
    info: "Contract Research Organization",
    position: "Full Stack",
    technologies: ["React", "Java", "MySQL"],
    description:
      "Created a new system to handle pharmaceutical products achieving a big increase in productivity compared to the previous solution.",
  },
  {
    start: "Jun 2017",
    end: "Jan 2019",
    title:
      '<a href="https://www.ics.forth.gr" rel="noopener noreferrer" target="_blank">FORTH</a>',
    info: "Telecommunications Research Lab",
    position: "Undergraduate Researcher",
    technologies: [
      '<a href="https://www.ics.forth.gr/discs" rel="noopener noreferrer" target="_blank">DISCS</a>',
      '<a href="https://www.ics.forth.gr/tnl" rel="noopener noreferrer" target="_blank">TNL</a>',
    ],
    description:
      "As an undergraduate researcher I mainly focused on creating faster ways to train AI models using CUDA to leverage the power of GPGPUs.",
  },
];

export default function ExperiencePage(props: any) {
  return (
    <div className="rounded-[4px] border border-black bg-white p-2.5">
      <ShowcaseListings showcases={experiences} />
    </div>
  );
}
