import { ShowcaseListings } from "@/components/showcaseListings";
import { getPeriodBetween } from "@/functions/getMonthsBetween";
import { ShowcaseType } from "@/types/showcase";

const education: ShowcaseType[] = [
  {
    start: "Sep 2013",
    end: "Jan 2019",
    periodInMonths: getPeriodBetween(new Date("2013-09-01"), new Date("2019-01-01")),
    title: "Bachelor of Computer Science",
    info: '<a href="https://www.csd.uoc.gr/CSD/index.jsp?lang=en" rel="noopener noreferrer" target="_blank" class="hover:underline">University of Crete</a>',
    position: "GPA: 3.00 B",
  },
  {
    start: "Mar 2018",
    end: "Jan 2019",
    periodInMonths: getPeriodBetween(new Date("2018-03-01"), new Date("2019-01-01")),
    title: "<i>“A versatile machine learning API for GPGPUs”</i>",
    position: "Bachelor's Thesis",
    info: '<a href="https://www.ics.forth.gr/discs/r" rel="noopener noreferrer" target="_blank" class="hover:underline">DSC</a> / <a href="https://www.ics.forth.gr" rel="noopener noreferrer" target="_blank" class="hover:underline">FORTH</a>',
  },
];

export default function EducationPage(props: any) {
  return (
    <div>
      <ShowcaseListings showcases={education} />
    </div>
  );
}
