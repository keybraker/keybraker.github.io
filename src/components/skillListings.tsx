import { SkillType } from "@/types/skill";

function SkillListing({ skill, last }: { skill: SkillType; last: boolean }) {
  return (
    <>
      <div className="flex flex-col text-start align-top text-tsiakkas-dark dark:text-tsiakkas-light">
        <div className="flex flex-row justify-between text-start align-top">
          <div
            className="content font-semibold"
            dangerouslySetInnerHTML={{ __html: skill.category }}
          ></div>
          {skill?.technologies ? (
            <div
              className="content font-extrabold text-lg"
              dangerouslySetInnerHTML={{
                __html: `[${skill.technologies.join(", ")}]`,
              }}
            ></div>
          ) : (
            ""
          )}
        </div>
        {skill?.qualifications ? (
          <div
            className="content font-extrabold text-lg"
            dangerouslySetInnerHTML={{
              __html: skill.qualifications.join(", "),
            }}
          ></div>
        ) : (
          ""
        )}
      </div>
      {!last ? <div className="my-8 border-t border-tsiakkas-dark dark:border-tsiakkas-light opacity-10 dark:opacity-10"></div> : ""}
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
