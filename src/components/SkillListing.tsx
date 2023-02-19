import { SkillType } from "@/types/skill";

const SkillListing = ({ skill, last }: { skill: SkillType; last: boolean }) => {
  return (
    <>
      <div className="flex flex-row no-wrap justify-between align-top text-start">
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: skill.category }}
        ></div>
        {skill?.qualifications ? (
          <div
            className="text-sm content"
            dangerouslySetInnerHTML={{
              __html: skill.qualifications.join(", "),
            }}
          ></div>
        ) : (
          ""
        )}
      </div>
      {!last ? <div className="border-[0.1px] border-gray-200 my-4"></div> : ""}
    </>
  );
};

export default SkillListing;
