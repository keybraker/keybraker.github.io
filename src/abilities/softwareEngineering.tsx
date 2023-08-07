import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Software Design",
    qualifications: ["Clean code", "Test driven development"],
  },
  {
    category: "Architecture",
    qualifications: ["Lambdas", "CronJob"],
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
