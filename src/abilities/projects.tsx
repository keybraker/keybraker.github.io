import { SkillListings } from "@/components/skillListings";
import { SkillType } from "@/types/skill";

const skills: SkillType[] = [
  {
    category:
      '<a href="https://github.com/The-Portal-Bot/Portal" rel="noopener noreferrer" target="_blank" class="hover:underline">Portal</a>',
    qualifications: ["A fully functional Discord bot."],
  },
  {
    category:
      '<a href="https://github.com/keybraker/Mediarizer" rel="noopener noreferrer" target="_blank" class="hover:underline">Mediarizer</a>',
    qualifications: [
      "A one-step solution to a chronologically organized media library.",
    ],
  },
];

export default function ProjectsPage(props: any) {
  return (
    <div className="rounded-[4px] border border-black bg-white p-2.5">
      <SkillListings skills={skills} />
    </div>
  );
}
