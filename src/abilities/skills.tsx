import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Languages",
    qualifications: ["Raised bilingual Greek/German and fluent in English"],
  },
  {
    category: "Programming Languages",
    qualifications: ["C", "C++", "Go", "Java"],
  },
  {
    category: "Scripting Languages",
    qualifications: ["TypeScript", "JavaScript", "NodeJS", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    qualifications: ["Angular", "React", "NextJS", "Gatsby"],
  },
  {
    category: "Tools",
    qualifications: [
      "Git (Gitlab, Github)",
      "Github Actions",
      "Docker",
      "AWS",
      "ExpressJS",
    ],
  },
  {
    category: "Databases and Tools",
    qualifications: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "Sequelize"],
  },
  {
    category: "Basic Programs & OSs",
    qualifications: ["Office", "VSCode", "MacOS", "Linux", "Windows"],
  },
];

export default function SkillPage(props: any) {
  return (
    <div className="rounded-[4px] border border-black bg-white p-2.5">
      <SkillListings skills={skills} />
    </div>
  );
}
