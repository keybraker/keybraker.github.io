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
            className="content font-semibold"
            dangerouslySetInnerHTML={{ __html: showcase.title }}
          ></div>
          <div
            className="content text-sm italic"
            dangerouslySetInnerHTML={{ __html: showcase.info }}
          ></div>
        </div>

        <div className="no-wrap flex flex-col items-end justify-start text-end align-top">
          <div
            className="content text-sm italic"
            dangerouslySetInnerHTML={{ __html: `${showcase.start} - ${showcase.end}` }}
          >
          </div>
          <div className="flex flex-col items-end">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: showcase.position }}
            ></div>
            {showcase?.technologies ? (
              <div
                className="content text-sm"
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
          className="content mt-2 pl-2 pt-2 border-t border-dashed border-tsiakkas-dark dark:border-tsiakkas-light text-sm text-tsiakkas-dark dark:text-tsiakkas-light"
          dangerouslySetInnerHTML={{
            __html: `<li>${showcase.description.join("</li><li>")}</li>`,
          }}
        ></div>
      ) : (
        ""
      )}
      {!last ? <div className="my-4 border-t border-tsiakkas-dark dark:border-tsiakkas-light"></div> : ""}
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
