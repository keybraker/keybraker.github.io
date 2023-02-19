import { Showcase } from "../enums/Showcase";

const ShowcaseListing = ({
  showcase,
  last,
}: {
  showcase: Showcase;
  last: boolean;
}) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col no-wrap justify-start align-top text-start">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: showcase.title }}
          ></div>
          <div
            className="text-sm italic content"
            dangerouslySetInnerHTML={{ __html: showcase.info }}
          ></div>
        </div>

        <div className="flex flex-col no-wrap justify-start align-top items-end text-end">
          <div className="text-sm italic">
            {showcase.start} - {showcase.end}
          </div>
          <div className="flex flex-col items-end">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: showcase.position }}
            ></div>
            {showcase?.technologies ? (
              <div
                className="text-sm content"
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
          className="text-sm text-gray-500 border-t border-dashed border-gray-200 my-4 content"
          dangerouslySetInnerHTML={{
            __html: `${showcase.description}`,
          }}
        ></div>
      ) : (
        ""
      )}
      {!last ? <div className="border-[0.1px] border-gray-200 my-4"></div> : ""}
    </>
  );
};

export default ShowcaseListing;
