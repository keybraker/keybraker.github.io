import { getDateFormatted } from "@/functions/getDateFormatted";
import { getPeriodBetween } from "@/functions/getMonthsBetween";
import { ShowcaseDescriptionGroup, ShowcaseType } from "@/types/showcase";
import { useEffect, useState } from "react";

function DescriptionGroup({
  group,
  isLast,
}: {
  group: ShowcaseDescriptionGroup;
  isLast: boolean;
}) {
  return (
    <div className={`relative pl-6 ${isLast ? "" : "pb-4"}`}>
      {group.title && (
        <div
          className="content mb-0.5 text-md font-bold text-tsiakkas-dark dark:text-tsiakkas-light"
          dangerouslySetInnerHTML={{ __html: group.title }}
        ></div>
      )}
      {group.bullets.length > 0 && (
        <ul
          className="content list-disc pl-5 text-md italic text-gray-800 dark:text-gray-400"
          dangerouslySetInnerHTML={{
            __html: group.bullets.map((bullet) => `<li>${bullet}</li>`).join(""),
          }}
        ></ul>
      )}
    </div>
  );
}

function ShowcaseDescription({ groups }: { groups: ShowcaseDescriptionGroup[] }) {
  return (
    <div className="relative ml-0">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-[4px] w-px -translate-x-1/2 bg-tsiakkas-dark/20 dark:bg-tsiakkas-light/20"
      ></span>
      {groups.map((group, index) => (
        <div key={index} className="relative">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[8px] h-[8px] w-[8px] rounded-full border-2 border-tsiakkas-dark bg-tsiakkas-light dark:border-tsiakkas-light dark:bg-tsiakkas-dark"
          ></span>
          <DescriptionGroup
            group={group}
            isLast={index + 1 === groups.length}
          />
        </div>
      ))}
    </div>
  );
}

function ShowcaseListing({
  showcase,
  last,
}: {
  showcase: ShowcaseType;
  last: boolean;
}) {
  const [period, setPeriod] = useState("");

  useEffect(() => {
    setPeriod(getPeriodBetween(showcase.start, showcase.end));
  }, [showcase.start, showcase.end]);

  return (
    <>
      <div className="flex flex-row justify-between text-tsiakkas-dark dark:text-tsiakkas-light">
        <div className="no-wrap flex w-6/12 flex-col justify-start text-start align-top">
          <div className="flex flex-col sm:flex-col">
            <div
              className="content white text-lg font-extrabold"
              dangerouslySetInnerHTML={{ __html: showcase.title }}
            ></div>
            {showcase.titleDescription && (
              <div
                className="content white flex items-center text-sm font-thin italic mb-1"
                dangerouslySetInnerHTML={{ __html: showcase.titleDescription }}
              ></div>
            )}
          </div>
          <div
            className="content ml-[2px] text-md italic"
            dangerouslySetInnerHTML={{ __html: showcase.info }}
          ></div>
        </div>

        <div className="no-wrap flex w-6/12 flex-col items-end justify-start text-end align-baseline">
          <div className="content flex flex-col-reverse  items-baseline align-baseline text-md italic sm:flex-row sm:gap-3">
            <span className="hidden items-center rounded-2xl bg-tsiakkas-dark/10 px-2 text-xs text-tsiakkas-dark dark:bg-tsiakkas-light/10 dark:text-tsiakkas-light sm:flex eq:text-sm">
              {period}
            </span>
            <span className="font-bold">
              {getDateFormatted(showcase.start)} -{" "}
              {getDateFormatted(showcase.end)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            {showcase.position && (
              <div
                className="content font-semibold"
                dangerouslySetInnerHTML={{ __html: showcase.position }}
              ></div>
            )}
            {showcase?.technologies && (
              <div
                className="content text-sm text-tsiakkas-dark dark:text-tsiakkas-light eq:whitespace-nowrap"
                dangerouslySetInnerHTML={{
                  __html: `(${showcase.technologies.join(", ")})`,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>

      {showcase?.description && showcase.description.length > 0 && (
        <>
          <div className="my-[20px] w-full"></div>
          <ShowcaseDescription groups={showcase.description} />
        </>
      )}
      {!last ? (
        <div className="my-8 border-t border-tsiakkas-dark/5 dark:border-tsiakkas-light/5"></div>
      ) : (
        ""
      )}
    </>
  );
}

export function ShowcaseListings({ showcases }: { showcases: ShowcaseType[] }) {
  return (
    <>
      {showcases.map((showcase, i) => {
        return (
          <div key={i}>
            <ShowcaseListing
              showcase={showcase}
              last={i + 1 === showcases.length}
            />
          </div>
        );
      })}
    </>
  );
}
