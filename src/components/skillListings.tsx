import { SkillType } from "@/types/skill";

function SkillListing({ skill, last }: { skill: SkillType; last: boolean }) {
  return (
    <>
      <div className="no-wrap flex flex-row justify-between text-start align-top">
        <div
          className="content font-semibold"
          dangerouslySetInnerHTML={{ __html: skill.category }}
        ></div>
        {skill?.qualifications ? (
          <div
            className="content text-sm"
            dangerouslySetInnerHTML={{
              __html: skill.qualifications.join(", "),
            }}
          ></div>
        ) : (
          ""
        )}
      </div>
      {!last ? <div className="my-4 border-[0.1px] border-gray-200"></div> : ""}
    </>
  );
}

export function SkillListings({ skills }: { skills: SkillType[] }) {
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
