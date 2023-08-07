import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Programming/Scripting Languages",
    qualifications: ["TypeScript", "Go", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    qualifications: ["Angular", "React", "NextJS", "Gatsby", "Tailwind"],
  },
  {
    category: "Tools",
    qualifications: ["Git (Gitlab, Github)", "Github Actions", "Docker", "AWS", "ExpressJS", "Jest"],
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

export default function SkillPage(props: any) {
  return (
    <div>
      <SkillListings skills={skills} />
    </div>
  );
}
