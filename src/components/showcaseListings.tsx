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
  const [period, setPeriod] = useState('');

  useEffect(() => {
    setPeriod(getPeriodBetween(showcase.start, showcase.end));
  }, [showcase.start, showcase.end]);

  return (
    <>
      <div className="flex flex-row justify-between text-tsiakkas-dark dark:text-tsiakkas-light">
        <div className="w-6/12 no-wrap flex flex-col justify-start text-start align-top">
          <div className="flex flex-row gap-2">
            <div
              className="content font-extrabold text-lg white"
              dangerouslySetInnerHTML={{ __html: showcase.title }}
            ></div>
            {showcase.titleDescription && (<div
              className="content font-thin text-md white flex items-center italic"
              dangerouslySetInnerHTML={{ __html: showcase.titleDescription }}
            ></div>)}
          </div>
          <div
            className="content text-md italic ml-[2px]"
            dangerouslySetInnerHTML={{ __html: showcase.info }}
          ></div>
        </div>

        <div className="w-6/12 no-wrap flex flex-col items-end justify-start text-end align-baseline">
          <div
            className="flex flex-col sm:flex-row content text-md italic sm:gap-2 align-baseline"
          >
            <span className="flex items-center text-sm text-tsiakkas-dark dark:text-tsiakkas-light">{period} - </span>
            <span className="font-semibold">{getDateFormatted(showcase.start)} - {getDateFormatted(showcase.end)}</span>
          </div>
          <div className="flex flex-col items-end">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: showcase.position }}
            ></div>
            {showcase?.technologies ? (
              <div
                className="content text-sm text-tsiakkas-dark dark:text-tsiakkas-light eq:whitespace-nowrap"
                dangerouslySetInnerHTML={{
                  __html: `(${showcase.technologies.join(", ")})`,
                }}
              ></div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>


      {showcase?.description && (<>
        <div className="mt-4 w-full border-t border-dashed border-tsiakkas-dark dark:border-tsiakkas-light opacity-5 dark:opacity-5"></div>
        <ul
          className="content mt-8 ml-4 text-md text-gray-800 dark:text-gray-400 italic list-disc"
          dangerouslySetInnerHTML={{
            __html: `<li>${showcase.description.join("</li><li>")}</li>`,
          }}
        ></ul>
      </>
      )}
      {!last ? <div className="my-8 border-t border-tsiakkas-dark dark:border-tsiakkas-light opacity-10 dark:opacity-10"></div> : ""}
    </>
  );
}

export function ShowcaseListings({ showcases }: { showcases: ShowcaseType[] }) {
  return (
    <>
      {showcases.map((showcase, i) => {
        return (
          <div key={i} className="sm:ml-2">
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
