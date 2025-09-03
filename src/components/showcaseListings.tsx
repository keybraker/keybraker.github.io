import { getDateFormatted } from "@/functions/getDateFormatted";
import { getPeriodBetween } from "@/functions/getMonthsBetween";
import { ShowcaseType } from "@/types/showcase";
import { useEffect, useState } from "react";

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

      {showcase?.description && (
        <>
          <div className="my-[12px] w-full border-t border-dashed border-tsiakkas-dark/10 dark:border-tsiakkas-light/10"></div>
          <ul
            className="content ml-4 list-disc text-md italic text-gray-800 dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: `<li>${showcase.description.join("</li><li>")}</li>`,
            }}
          ></ul>
        </>
      )}
      {!last ? (
        <div className="my-8 border-t border-tsiakkas-dark/10 dark:border-tsiakkas-light/10"></div>
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
