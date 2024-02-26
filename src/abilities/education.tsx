import { ShowcaseListings } from "@/components/showcaseListings";
import { ShowcaseType } from "@/types/showcase";

const education: ShowcaseType[] = [
  {
    start: new Date("2013-09-01"),
    end: new Date("2019-01-01"),
    title: "Bachelor of Computer Science",
    info: '<a href="https://www.csd.uoc.gr/CSD/index.jsp?lang=en" rel="noopener noreferrer" target="_blank" class="hover:underline">University of Crete</a>',
    position: "GPA: 3.00 B",
  },
  {
    start: new Date("2018-03-01"),
    end: new Date("2019-01-01"),
    title: "<i>“A versatile machine learning API for GPGPUs”</i>",
    position: "Bachelor's Thesis",
    info: '<a href="https://www.ics.forth.gr/discs/r" rel="noopener noreferrer" target="_blank" class="hover:underline">DSC</a> / <a href="https://www.ics.forth.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">FORTH</a>',
  },
];

export default function EducationPage() {
  return (
    <div>
      <ShowcaseListings showcases={education} />
    </div>
  );
}
