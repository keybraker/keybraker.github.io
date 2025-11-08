import { SkillListings } from "@/components/skillListings";
import { createLinkDiv } from "@/functions/linkCreator";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Code Design",
    qualifications: [
      "Domain Driven",
      "Testing (unit, integration, end-to-end)",
      "Test Driven",
      "Monoliths",
    ],
  },
  {
    category: "Architecture",
    qualifications: [
      createLinkDiv("https://en.wikipedia.org/wiki/REST", "REST"),
      createLinkDiv("https://en.wikipedia.org/wiki/API", "APIs"),
      createLinkDiv("https://en.wikipedia.org/wiki/API", "Events"),
      "Lambdas",
      createLinkDiv("https://en.wikipedia.org/wiki/Microservices", "Microservices"),
    ],
  },
  {
    category: "Databases",
    qualifications: [
      createLinkDiv("https://en.wikipedia.org/wiki/SQL", "SQL"),
      createLinkDiv("https://en.wikipedia.org/wiki/NoSQL", "NoSQL"),
      createLinkDiv("https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping", "ORMs"),
    ],
  },
  {
    category: "Frontend",
    qualifications: [
      createLinkDiv("https://angular.dev/", "Angular"),
      createLinkDiv("https://react.dev/", "React"),
      createLinkDiv("https://nextjs.org/", "Next.js"),
      createLinkDiv("https://www.typescriptlang.org/", "TypeScript")
    ],
  },
];

export default function SoftwareEngineeringPage() {
  return (
    <SkillListings skills={skills} />
  );
}
