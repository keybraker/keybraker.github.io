import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Code Design",
    qualifications: ["Clean code", "Testing", "Test driven development", "Refactoring", "Debugging"],
  },
  {
    category: "Architecture",
    qualifications: ["Lambdas", "CronJob", "Microservices"],
  },
  {
    category: "Practices",
    qualifications: ["Agile", "Scrum", "Kanban"],
  },
];

export default function SoftwareEngineeringPage(props: any) {
  return (
    <div>
      <SkillListings skills={skills} />
    </div>
  );
}
