import SkillListing from "@/components/SkillListing";
import { SkillType } from "@/types/skill";

const SkillListings = ({ skills }: { skills: SkillType[] }) => {
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
};

export default SkillListings;
