import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Tools",
    qualifications: ["Git", "Github Actions", "Docker", "AWS", "ExpressJS", "Jest"],
  },
  {
    category: "Databases & ORMs",
    qualifications: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "Sequelize"],
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
