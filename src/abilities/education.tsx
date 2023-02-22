import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const education: ShowcaseType[] = [
  {
    start: "Sep 2013",
    end: "Jan 2019",
    title: "Bachelor of Computer Science Degree",
    info: '<a href="https://www.csd.uoc.gr/CSD/index.jsp?lang=en" rel="noopener noreferrer" target="_blank" class="hover:underline">University of Crete</a>',
    position: "GPA: 3.00 B",
  },
  {
    start: "Mar 2018",
    end: "Jan 2019",
    title: "<i>“A versatile machine learning API for GPGPUs”</i>",
    position: "Bachelor's Thesis",
    info: '<a href="https://www.ics.forth.gr/discs/r" rel="noopener noreferrer" target="_blank" class="hover:underline">DSC</a> / <a href="https://www.ics.forth.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">FORTH</a>',
  },
];

export default function EducationPage(props: any) {
  return (
    <div className="rounded-[4px] border border-black bg-white p-2.5">
      <ShowcaseListings showcases={education} />
    </div>
  );
}
