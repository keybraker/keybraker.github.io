import SkillListing from "@/components/skillListing";
import { SkillType } from "@/types/skill";

export default function SkillListings({ skills }: { skills: SkillType[] }) {
  return (
    <>
      {skills.map((skill, i) => {
        return (
          <div key={i} className="Noto Serif Display, serif;">
            <SkillListing skill={skill} last={i + 1 === skills.length} />
          </div>
        );
      })}
    </>
  );
}
