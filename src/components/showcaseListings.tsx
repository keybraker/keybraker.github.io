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
      <div className="grid grid-cols-2">
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
          className="content mt-2 pt-2 border-t border-dashed border-gray-200 text-sm text-gray-500"
          dangerouslySetInnerHTML={{
            __html: `${showcase.description}`,
          }}
        ></div>
      ) : (
        ""
      )}
      {!last ? <div className="my-4 border-[0.1px] border-gray-200"></div> : ""}
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
