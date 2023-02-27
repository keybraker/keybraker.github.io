import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const experiences: ShowcaseType[] = [
  {
    start: "Feb 2022",
    end: "Present",
    title:
      '<a href="https://fairlo.se/" rel="noopener noreferrer" target="_blank" class="hover:underline">Fairlo</a>',
    info: "Financial Services",
    position: "Backend",
    technologies: ["TypeScript", "PostgreSQL", "Sequelize", "AWS", "Gitlab"],
    description:
      "My role as backend developer, is to maintain and expand the code base whilst also delivering new features for the core application.",
  },
  {
    start: "Jul 2021",
    end: "Jan 2022",
    title:
      '<span class="text-gray-500"><a href="http://www.army.gov.cy/" rel="noopener noreferrer" target="_blank" class="hover:underline">Cypriot Military</a></span>',
    info: '<span class="text-gray-500">Ordnance Corps</span>',
    position: '<span class="text-gray-500">Obligatory military service</span>',
  },
  {
    start: "Mar 2020",
    end: "Jun 2021",
    title:
      '<a href="https://www.cyberlogic.gr/en/home" rel="noopener noreferrer" target="_blank" class="hover:underline">Cyberlogic</a>',
    info: "Travel Technologies",
    position: "Frontend",
    technologies: ["Angular", "Visual Basic"],
    description:
      "I mainly worked on delivering Traveling interface solutions to customers, while also maintaining and expanding the core product. " +
      "Applications for users were designed in Angular while the core product was written in Visual Basic.",
  },
  {
    start: "May 2019",
    end: "Mar 2020",
    title:
      '<a href="https://www.medwork.gr/index.php" rel="noopener noreferrer" target="_blank" class="hover:underline">Medwork</a>',
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
      '<a href="https://www.ics.forth.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">FORTH</a>',
    info: "Telecommunications Research Lab",
    position: "Undergraduate Researcher",
    technologies: [
      '<a href="https://www.ics.forth.gr/discs" rel="noopener noreferrer" target="_blank" class="hover:underline">DISCS</a>',
      '<a href="https://www.ics.forth.gr/tnl" rel="noopener noreferrer" target="_blank" class="hover:underline">TNL</a>',
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
