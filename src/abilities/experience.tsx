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
    position: "Fullstack",
    technologies: [
      createLinkDiv("https://www.typescriptlang.org/", "TypeScript"),
      createLinkDiv("https://www.postgresql.org/", "PostgreSQL"),
      createLinkDiv("https://sequelize.org/", "Sequelize"),
      createLinkDiv("https://aws.amazon.com/", "AWS"),
      createLinkDiv("https://about.gitlab.com/", "Gitlab"),
      createLinkDiv("https://www.docker.com/", "Docker"),
      createLinkDiv("https://aws.amazon.com/sqs/", "SQS"),
    ],
    description: [
      {
        title:
          'good backend engineer (mid) <span class="font-normal italic opacity-70">· Feb 2022</span>',
        bullets: [
          "Focused on the backend, delivering product requirements in close collaboration with the team.",
          "Designed and delivered solutions, contributing to large projects.",
          "Took ownership of fundamental parts of the codebase.",
          "Reworked the transactional email pipeline, improving consistency, maintainability, and reliability.",
        ],
      },
      {
        title:
          'a bit better backend engineer (senior) <span class="font-normal italic opacity-70">· Mar 2023</span>',
        bullets: [
          "Stepped into a senior role following an internal company reorganisation.",
          "Delivered large projects end to end, from design through implementation, under tight time constraints.",
          "Reorganised the backend, progressing from incremental cleanups to a large-scale rewrite of core systems.",
          "Worked closely with CloudOps to deliver event-driven architectures.",
          "Became the team's go-to engineer for guidance and technical direction as it grew, while continuing to deliver hands-on work.",
        ],
      },
      {
        title:
          'jack of all trades (engineering manager) <span class="font-normal italic opacity-70">· Oct 2026</span>',
        bullets: [
          "Lead the engineering function as tech lead, people manager, and hands-on software engineer, driving Fairlo to its next level.",
          "Enable non-technical teams to ship their ideas faster.",
          "Drive the transition from specialised backend/frontend silos to fullstack delivery.",
          "Restructure the tech stack to be compatible with an AI-first future.",
          "Hire and grow the engineering team.",
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
        title: "Frontend engineer",
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
        title: "Fullstack engineer",
        bullets: [
          'Designed, built and maintained the company\'s website, including the front-end and back-end systems (<a href="https://www.medwork.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">medwork.gr</a>).',
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
