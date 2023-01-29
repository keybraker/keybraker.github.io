import React from "react";

import Layout from "../components/Layout";
import ShowcaseListingSection from "../components/ShowcaseListingSection";

const ShowcasesPageInner = (props) => {
  try {
    const educations = [
      {
        start: "Sep 2013",
        end: "Jan 2019",
        title: "Bachelor of Computer Science Degree",
        info: "GPA: 3.00 B",
        position:
          '<a href="https://www.csd.uoc.gr/CSD/index.jsp?lang=en" rel="noopener noreferrer" target="_blank">University of Crete</a>',
      },
      {
        start: "Mar 2018",
        end: "Jan 2019",
        title: "<i>“A versatile machine learning API for GPGPUs”</i>",
        position:
          '<a href="https://www.ics.forth.gr/discs/r" rel="noopener noreferrer"target="_blank">DSC</a> / <a href="https://www.ics.forth.gr" rel="noopener noreferrer"target="_blank">FORTH</a>',
        info: "Bachelor's Thesis",
      },
    ];

    return (
      <div>
        {educations.length > 0 && (
          <ShowcaseListingSection showcases={educations} />
        )}
      </div>
    );
  } catch (e) {
    console.log(e);
    return <h2>Unable to find any educations.</h2>;
  }
};

const ShowcasesPage = (props) => {
  return (
    <Layout>
      <ShowcasesPageInner {...props} />
    </Layout>
  );
};

export default ShowcasesPage;
