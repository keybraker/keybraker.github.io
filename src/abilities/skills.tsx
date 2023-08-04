import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Programming Languages",
    qualifications: ["C", "C++", "Go", "Java"],
  },
  {
    category: "Scripting Languages",
    qualifications: [
      "TypeScript",
      "JavaScript",
      "Visual Basic",
      "NodeJS",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Frameworks & Libraries",
    qualifications: ["Angular", "React", "NextJS", "Gatsby", "Tailwind"],
  },
  {
    category: "Tools",
    qualifications: [
      "Git (Gitlab, Github)",
      "Github Actions",
      "Docker",
      "AWS",
      "ExpressJS",
      "Jest",
    ],
  },
  {
    category: "Databases & ORMs",
    qualifications: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "Sequelize"],
  },
  {
    category: "Practices",
    qualifications: ["Agile", "Scrum", "Kanban"],
  },
  {
    category: "Basic Programs & OSs",
    qualifications: ["Office", "VSCode", "MacOS", "Linux", "Windows"],
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
