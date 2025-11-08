import { SkillListings } from "@/components/skillListings";
import { createLinkDiv } from "@/functions/linkCreator";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Tools",
    qualifications: [
      createLinkDiv("https://git-scm.com/", "Git"),
      createLinkDiv("https://github.com/features/actions", "Github Actions"),
      createLinkDiv("https://www.docker.com/", "Docker"),
      createLinkDiv("https://aws.amazon.com/", "AWS"),
    ],
  },
  {
    category: "Personal Attributes",
    qualifications: ["Architecture", "Designer", "Team Player", "Adaptable"],
  },
  {
    category: "Practices",
    qualifications: ["Agile", "Scrum", "Kanban"],
  },
  {
    category: "Languages",
    qualifications: [
      '<span class="bg-gradient-to-r from-blue-500 via-blue-300 to-slate-400 text-transparent bg-clip-text">Greek</span> <i class="text-md text-tsiakkas-dark dark:text-tsiakkas-light">native</i>',
      '<span class="bg-gradient-to-r from-gray-700 via-red-700 to-yellow-500 text-transparent bg-clip-text">German</span> <i class="text-md text-tsiakkas-dark dark:text-tsiakkas-light">mother tongue</i>',
      '<span class="bg-gradient-to-r from-red-700 via-slate-300 to-blue-500 text-transparent bg-clip-text">English</span> <i class="text-md text-tsiakkas-dark dark:text-tsiakkas-light">fluent</i>',
    ],
  },
];

export default function SkillPage() {
  return (
    <SkillListings skills={skills} />
  );
}
