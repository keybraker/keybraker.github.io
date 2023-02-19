import SkillListing from "@/components/SkillListing";
import { Skill } from "@/enums/skill";

const SkillListings = ({ skills }: { skills: Skill[] }) => {
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
