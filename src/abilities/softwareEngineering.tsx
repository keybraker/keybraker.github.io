import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Code Design",
    qualifications: [
      "Testing (unit, integration, e2e)",
      "Domain Driven",
    ],
  },
  {
    category: "Architecture",
    qualifications: [
      "REST",
      "APIs",
      "Domain Driven",
      "Monoliths",
      "Events",
      "Lambdas",
      "CronJobs",
      "Microservices",
    ],
  },
  {
    category: "Databases",
    qualifications: ["SQL", "non SQL", "Raw SQL", "ORMs"],
  },
  {
    category: "Frontend",
    qualifications: ["React", "Angular", "Next.js", "TypeScript"],
  },
];

export default function SoftwareEngineeringPage() {
  return (
    <div>
      <SkillListings skills={skills} />
    </div>
  );
}
