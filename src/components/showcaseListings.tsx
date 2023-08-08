import { ShowcaseType } from "@/types/showcase";

function ShowcaseListing({
  showcase,
  last,
}: {
  showcase: ShowcaseType;
  last: boolean;
}) {
  return (
    <>
      <div className="grid grid-cols-2 text-tsiakkas-dark dark:text-tsiakkas-light">
        <div className="no-wrap flex flex-col justify-start text-start align-top">
          <div
            className="content font-extrabold text-lg "
            dangerouslySetInnerHTML={{ __html: showcase.title }}
          ></div>
          <div
            className="content text-md italic"
            dangerouslySetInnerHTML={{ __html: showcase.info }}
          ></div>
        </div>

        <div className="no-wrap flex flex-col items-end justify-start text-end align-top">
          <div
            className="content text-md italic"
            dangerouslySetInnerHTML={{ __html: `${showcase.start} - ${showcase.end}${showcase.periodInMonths ? ` (${showcase.periodInMonths})` : ''}` }}
          >
          </div>
          <div className="flex flex-col items-end">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: showcase.position }}
            ></div>
            {showcase?.technologies ? (
              <div
                className="content text-md whitespace-nowrap"
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
      {showcase?.description ? (
        <div
          className="content mt-8 text-md text-gray-500 dark:text-gray-400 italic"
          dangerouslySetInnerHTML={{
            __html: `<li>${showcase.description.join("</li><li>")}</li>`,
          }}
        ></div>
      ) : (
        ""
      )}
      {!last ? <div className="my-8 border-t border-gray-300 dark:border-gray-800"></div> : ""}
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
