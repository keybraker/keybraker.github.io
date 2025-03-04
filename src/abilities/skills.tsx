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
      'Greek <i class="text-md text-gray-600">native</i>',
      'German <i class="text-md text-gray-600">mother tongue</i>',
      'English <i class="text-md text-gray-600">fluent</i>',
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
