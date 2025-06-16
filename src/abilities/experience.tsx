import { ShowcaseListings } from "@/components/showcaseListings";
import { createLinkDiv } from "@/functions/linkCreator";
import { ShowcaseType } from "@/types/showcase";

const experiences: ShowcaseType[] = [
  {
    start: new Date("2022-02-01"),
    end: null,
    title: createLinkDiv(
      "https://fairlo.se/",
      "Fairlo",
      "text-tsiakkas-dark dark:text-tsiakkas-light hover:underline"
    ),
    info: "Financial Services",
    position: "Backend",
    technologies: [
      createLinkDiv("https://www.typescriptlang.org/", "TypeScript"),
      createLinkDiv("https://www.postgresql.org/", "PostgreSQL"),
      createLinkDiv("https://sequelize.org/", "Sequelize"),
      createLinkDiv("https://aws.amazon.com/", "AWS"),
      createLinkDiv("https://about.gitlab.com/", "Gitlab"),
    ],
    description: [
      "Handling the dunning process of the company, with close collaboration with a third party provider.",
      "Revamped the email sending process, made emails more coherent, easier to maintain and increased quality.",
      "Updated the calculations on loan construction which decreased the amount of processing time needed and improved user experience, programmer experience and saved money.",
      "Collaborating with other team members, including front-end developers, product managers, and designers, to develop and implement new features and enhancements.",
      "Conducting code reviews, writing and updating technical documentation, and providing support to other developers/product when needed.",
      "Implemented version 6 of BankID, a third party authentication system.",
    ],
  },
  {
    start: new Date("2021-07-01"),
    end: new Date("2022-01-01"),
    title:
      '<span class="text-tsiakkas-dark dark:text-tsiakkas-light"><a href="http://www.army.gov.cy/" rel="noopener noreferrer" target="_blank" class="hover:underline">Cypriot Military</a></span>',
    info: '<span class="text-tsiakkas-dark dark:text-tsiakkas-light">Ordnance Corps</span>',
    position:
      '<span class="text-tsiakkas-dark dark:text-tsiakkas-light">Obligatory military service</span>',
    description: ["Completed my obligatory military service."],
  },
  {
    start: new Date("2020-03-01"),
    end: new Date("2021-06-01"),
    title: createLinkDiv("https://www.cyberlogic.gr/", "Cyberlogic"),
    info: "Travel Technologies",
    position: "Frontend",
    technologies: [
      createLinkDiv("https://angular.dev/", "Angular"),
      createLinkDiv(
        "https://learn.microsoft.com/en-us/dotnet/visual-basic/",
        "Visual Basic"
      ),
    ],
    description: [
      "Worked on the core product of the company's travel platform, developing and improving its user interface, user experience, and performance.",
      "Worked on the transition to the new system design which decoupled the backend system and provided a more robust and scalable solution.",
      "Developed and maintained custom websites for clients in the travel and hospitality industry, allowing them to offer online bookings and experiences to their customers.",
    ],
  },
  {
    start: new Date("2019-05-01"),
    end: new Date("2020-03-01"),
    title: createLinkDiv("https://www.medwork.gr", "Medwork"),
    info: "Contract Research Organization",
    position: "Full Stack",
    technologies: [
      createLinkDiv("https://react.dev/", "React"),
      createLinkDiv("https://www.java.com/en/", "Java"),
      createLinkDiv("https://www.mysql.com/", "MySQL"),
    ],
    description: [
      'Design, build and maintain the company\'s website, including the front-end and back-end systems (<a href="https://www.medwork.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">medwork.gr</a>).',
      "Created a new system to handle pharmaceutical products achieving a big increase in productivity compared to the previous solution.",
      "Digitalised the company's processes by creating a new system to handle the company's data.",
      "Achieved a big increase in productivity compared to the previous solution, by bring tailored made solutions to employees.",
    ],
  },
  {
    start: new Date("2017-06-01"),
    end: new Date("2019-01-01"),
    title: createLinkDiv("https://www.ics.forth.gr", "FORTH"),
    info: "Telecommunications Research Lab",
    position: "Undergraduate Researcher",
    technologies: [
      createLinkDiv("https://www.ics.forth.gr/discs", "DISCS"),
      createLinkDiv("https://www.ics.forth.gr/tnl", "TNL"),
    ],
    description: [
      "As an undergraduate researcher, I mainly focused on creating the backbone system for the researcher's machine learning model testing; written in CUDA to leverage the power of GPGPUs.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <ShowcaseListings showcases={experiences} />
    </div>
  );
}
