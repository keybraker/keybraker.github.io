import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Tools",
    qualifications: ["Git", "Github Actions", "Docker", "AWS"],
  },
  {
    category: "Practices",
    qualifications: ["Agile", "Scrum", "Kanban"],
  },
  {
    category: "Personal Attributes",
    qualifications: ["Problem Solver", "Team Player", "Adaptable"],
  },
  {
    category: "Languages",
    qualifications: [
      "Greek <i>Native</i>, German <i>Native</i>, English <i>Fluent</i>",
    ],
  },
];

export default function SkillPage() {
  return (
    <div>
      <SkillListings skills={skills} />
    </div>
  );
}
