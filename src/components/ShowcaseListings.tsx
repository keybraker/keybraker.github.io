import { ShowcaseType } from "@/types/showcase";
import ShowcaseListing from "./showcaseListing";

export default function ShowcaseListings({
  showcases,
}: {
  showcases: ShowcaseType[];
}) {
  return (
    <>
      {showcases.map((showcase, i) => {
        return (
          <div key={i} className="Noto Serif Display, serif;">
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
