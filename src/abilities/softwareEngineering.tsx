import { SkillListings } from "@/components/skillListings";
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
      "REST",
      "APIs",
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
