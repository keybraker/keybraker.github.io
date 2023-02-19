import SkillListings from "@/components/SkillListings";
import { Skill } from "@/enums/Skill";

const skills: Skill[] = [
  {
    category: "Languages",
    qualifications: ["Raised bilingual Greek ~ German and fluent in English"],
  },
  {
    category: "Programming Languages",
    qualifications: ["C", "C++", "Go", "Java"],
  },
  {
    category: "Scripting Languages",
    qualifications: [
      "TypeScript",
      "JavaScript",
      "NodeJS",
      "Python",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Tools and Frameworks",
    qualifications: ["Git", "Docker", "AWS", "Angular", "React", "ExpressJS"],
  },
  {
    category: "Databases and Tools",
    qualifications: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "Sequelize"],
  },
  {
    category: "Basic Programs",
    qualifications: ["Microsoft Office", "Google Office", "VSCode"],
  },
  {
    category: "Operating Systems",
    qualifications: ["Linux", "MacOS", "Windows"],
  },
];

export default function SkillPage(props: any) {
  return (
    <div className="bg-white border-black border rounded-[4px] p-2.5">
      <SkillListings skills={skills} />
    </div>
  );
}
