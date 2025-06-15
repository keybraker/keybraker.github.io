import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category: "Tools",
    qualifications: ["Git", "Github Actions", "Docker", "AWS"],
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
      '<span class="bg-gradient-to-r from-blue-500 via-blue-300 to-slate-300 text-transparent bg-clip-text" style="-webkit-text-stroke: 0.75px #000000;">Greek</span> <i class="text-md text-tsiakkas-dark dark:text-tsiakkas-light">native</i>',
      '<span class="bg-gradient-to-r from-gray-800 via-red-700 to-yellow-500 text-transparent bg-clip-text" style="-webkit-text-stroke: 0.75px #000000;">German</span> <i class="text-md text-tsiakkas-dark dark:text-tsiakkas-light">mother tongue</i>',
      '<span class="bg-gradient-to-r from-red-700 via-slate-300 to-blue-500 text-transparent bg-clip-text" style="-webkit-text-stroke: 0.75px #000000;">English</span> <i class="text-md text-tsiakkas-dark dark:text-tsiakkas-light">fluent</i>',
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
