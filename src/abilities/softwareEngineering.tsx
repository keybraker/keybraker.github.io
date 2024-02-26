import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Code Design",
    qualifications: ["Testing", "Test driven development", "Refactoring", "Clean code"],
  },
  {
    category: "Architecture",
    qualifications: ["Event Bridge", "Lambdas", "CronJob", "Microservices"],
  },
  {
    category: "Practices",
    qualifications: ["Agile", "Scrum", "Kanban"],
  },
];

export default function SoftwareEngineeringPage() {
  return (
    <div>
      <SkillListings skills={skills} />
    </div>
  );
}
