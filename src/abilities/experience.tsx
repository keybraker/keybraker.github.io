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
    description: [
      "Maintaining and improving the core product of the Fairlo platform, ensuring high code quality, reliability, and performance.",
      "Implement and maintain robust testing practices, including unit testing, integration testing, and end-to-end testing, to ensure high code quality and minimize the risk of defects and regressions.",
      "Collaborating with other team members, including front-end developers, product managers, and designers, to develop and implement new features and enhancements.",
      "Conducting code reviews, writing and updating technical documentation, and providing support to other developers when needed.",
      "Proactively identifying and addressing technical issues and potential areas of improvement to optimize the platform's functionality and user experience.",
    ],
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
    description: [
      "Worked on the core product of the company's travel platform, developing and improving its user interface, user experience, and performance.",
      "Developed and maintained custom websites for clients in the travel and hospitality industry, allowing them to offer online bookings and experiences to their customers.",
    ],
  },
  {
    start: "May 2019",
    end: "Mar 2020",
    title:
      '<a href="https://www.medwork.gr/index.php" rel="noopener noreferrer" target="_blank" class="hover:underline">Medwork</a>',
    info: "Contract Research Organization",
    position: "Full Stack",
    technologies: ["React", "Java", "MySQL"],
    description: [
      "Created a new system to handle pharmaceutical products achieving a big increase in productivity compared to the previous solution.",
    ],
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
    description: [
      "As an undergraduate researcher I mainly focused on creating faster ways to train AI models using CUDA to leverage the power of GPGPUs.",
    ],
  },
];

export default function ExperiencePage(props: any) {
  return (
    <div className="rounded-[4px] border border-black bg-white p-2.5">
      <ShowcaseListings showcases={experiences} />
    </div>
  );
}
