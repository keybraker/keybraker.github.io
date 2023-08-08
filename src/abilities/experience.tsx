import { ShowcaseListings } from "@/components/showcaseListings";
import { getPeriodBetween } from "@/functions/getMonthsBetween";
import { ShowcaseType } from "@/types/showcase";

const experiences: ShowcaseType[] = [
  {
    start: "Feb 2022",
    end: "Present",
    periodInMonths: getPeriodBetween(new Date("2022-02-01"), new Date()),
    title:
      '<a href="https://fairlo.se/" rel="noopener noreferrer" target="_blank" class="text-tsiakkas-dark dark:text-tsiakkas-light hover:underline">Fairlo</a>',
    info: "Financial Services",
    position: "Backend",
    technologies: ["TypeScript", "PostgreSQL", "Sequelize", "AWS", "Gitlab"],
    description: [
      "Handling the dunning process of the company, with close collaboration with a third party provider.",
      "Revamped the email sending process, made emails more coherent, easier to maintain and high quality.",
      "Updated the calculations on loan construction which decreased the amount of processing time needed and improved user experience.",
      "Working on designing and implementing REST endpoints to be used by the company's frontend applications.",
      "Implement and maintain robust testing practices, including unit testing, integration testing, and end-to-end testing, to ensure high code quality and minimise the risk of defects and regressions.",
      "Collaborating with other team members, including front-end developers, product managers, and designers, to develop and implement new features and enhancements.",
      "Conducting code reviews, writing and updating technical documentation, and providing support to other developers when needed.",
      "Proactively identifying and addressing technical issues and potential areas of improvement to optimise the platform's functionality and user experience.",
    ],
  },
  {
    start: "Jul 2021",
    end: "Jan 2022",
    periodInMonths: getPeriodBetween(new Date("2021-07-01"), new Date("2022-01-01")),
    title:
      '<span class="text-tsiakkas-dark dark:text-tsiakkas-light"><a href="http://www.army.gov.cy/" rel="noopener noreferrer" target="_blank" class="hover:underline">Cypriot Military</a></span>',
    info: '<span class="text-tsiakkas-dark dark:text-tsiakkas-light">Ordnance Corps</span>',
    position: '<span class="text-tsiakkas-dark dark:text-tsiakkas-light">Obligatory military service</span>',
  },
  {
    start: "Mar 2020",
    end: "Jun 2021",
    periodInMonths: getPeriodBetween(new Date("2020-03-01"), new Date("2021-06-01")),
    title:
      '<a href="https://www.cyberlogic.gr/en/home" rel="noopener noreferrer" target="_blank" class="hover:underline">Cyberlogic</a>',
    info: "Travel Technologies",
    position: "Frontend",
    technologies: ["Angular", "Visual Basic"],
    description: [
      "Worked on the core product of the company's travel platform, developing and improving its user interface, user experience, and performance.",
      "Worked on the transition to the new system design which decoupled the backend system and provided a more robust and scalable solution.",
      "Developed and maintained custom websites for clients in the travel and hospitality industry, allowing them to offer online bookings and experiences to their customers.",
    ],
  },
  {
    start: "May 2019",
    end: "Mar 2020",
    periodInMonths: getPeriodBetween(new Date("2019-05-01"), new Date("2020-03-01")),
    title:
      '<a href="https://www.medwork.gr/index.php" rel="noopener noreferrer" target="_blank" class="hover:underline">Medwork</a>',
    info: "Contract Research Organization",
    position: "Full Stack",
    technologies: ["React", "Java", "MySQL"],
    description: [
      "Created a new system to handle pharmaceutical products achieving a big increase in productivity compared to the previous solution.",
      "Digitalised the company's processes by creating a new system to handle the company's data.",
      "Achieved a big increase in productivity compared to the previous solution, by bring tailored made solutions to employees.",
    ],
  },
  {
    start: "Jun 2017",
    end: "Jan 2019",
    periodInMonths: getPeriodBetween(new Date("2017-06-01"), new Date("2019-01-01")),
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
    <div>
      <ShowcaseListings showcases={experiences} />
    </div>
  );
}
