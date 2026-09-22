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
      {
        title: "Backend engineer",
        bullets: [
          "Owned core business processes end to end, collaborating closely with third-party providers.",
          "Reworked the transactional email pipeline, improving consistency, maintainability, and reliability.",
          "Integrated multiple third-party clients.",
          "Collaborated with front-end developers, product managers, and designers to deliver new features and enhancements.",
        ],
      },
      {
        title: "A bit better backend engineer",
        bullets: [
          "Optimised a performance-critical calculation path, reducing processing time and cost while improving user and developer experience.",
          "Performed code reviews, maintained technical documentation, and mentored other developers.",
          "Integrated a third-party authentication and identity provider.",
          "Introduced a high efficiency monetary transaction processing system, improving reliability.",
        ],
      },
    ],
  },
  {
    start: new Date("2021-07-01"),
    end: new Date("2022-01-01"),
    title: createLinkDiv("http://www.army.gov.cy/", "Cypriot Military", "hover:underline text-tsiakkas-dark dark:text-tsiakkas-light"),
    info: '<span class="text-tsiakkas-dark dark:text-tsiakkas-light">Ordnance Corps</span>',
    position:
      '<span class="text-tsiakkas-dark dark:text-tsiakkas-light">Obligatory military service</span>',
    description: [
      { bullets: ["Completed my obligatory military service."] },
    ],
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
      {
        bullets: [
          "Worked on the core product of the company's travel platform, developing and improving its user interface, user experience, and performance.",
          "Worked on the transition to the new system design which decoupled the backend system and provided a more robust and scalable solution.",
          "Developed and maintained custom websites for clients in the travel and hospitality industry, allowing them to offer online bookings and experiences to their customers.",
        ],
      },
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
      {
        bullets: [
          'Design, build and maintain the company\'s website, including the front-end and back-end systems (<a href="https://www.medwork.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">medwork.gr</a>).',
          "Created a new system to handle pharmaceutical products achieving a big increase in productivity compared to the previous solution.",
          "Digitalised the company's processes by creating a new system to handle the company's data.",
          "Achieved a big increase in productivity compared to the previous solution, by bring tailored made solutions to employees.",
        ],
      },
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
      {
        bullets: [
          `As an undergraduate researcher, I mainly focused on creating the backbone system for the researcher's machine learning model testing; written in ${createLinkDiv("https://developer.nvidia.com/cuda-zone", "CUDA")} to leverage the power of GPGPUs.`,
        ],
      },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <ShowcaseListings showcases={experiences} />
  );
}
