import ShowcaseListing from "@/components/ShowcaseListing";
import { Showcase } from "@/enums/Showcase";

const ShowcaseListings = ({ showcases }: { showcases: Showcase[] }) => {
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
};

export default ShowcaseListings;
