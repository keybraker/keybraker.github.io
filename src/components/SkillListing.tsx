import { SkillType } from "@/types/skill";

export function SkillListing({
  skill,
  last,
}: {
  skill: SkillType;
  last: boolean;
}) {
  return (
    <>
      <div className="flex flex-row no-wrap justify-between align-top text-start">
        <div
          className="content font-semibold"
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
