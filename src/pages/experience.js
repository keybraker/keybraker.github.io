import React from "react";
// import { graphql } from 'gatsby';

import Layout from "../components/Layout";
import ShowcaseListingSection from "../components/ShowcaseListingSection";

const ExperiencePageInner = (props) => {
  try {
    const experiences = [
      {
        start: "Feb 2022",
        end: "Present",
        title: '<a href="https://fairlo.se/">Fairlo</a>',
        info: "Financial Services",
        position: "Backend Developer (Typescipt, PostgreSQL)",
      },
      {
        start: "Jul 2021",
        end: "Jan 2022",
        title: '<a href="http://www.army.gov.cy/">Cypriot Military</a>',
        info: "Ordnance Corps",
        position: "Obligatory military service",
      },
      {
        start: "Mar 2020",
        end: "Jun 2021",
        title: '<a href="https://www.cyberlogic.gr/en/home">Cyberlogic</a>',
        info: "Travel Technologies",
        position: "Frontend Developer (Angular)",
      },
      {
        start: "May 2019",
        end: "Mar 2020",
        title: '<a href="https://www.medwork.gr/index.php">Medwork</a>',
        info: "Contract Research Organization",
        position: "Full Stack Developer (React, Java, MySQL)",
      },
      {
        start: "Jun 2017",
        end: "Jan 2019",
        title: '<a href="https://www.ics.forth.gr">FORTH</a>',
        info: "Telecommunications Research Lab",
        position:
          'Undergraduate Researcher (<a href="https://www.ics.forth.gr/discs">DISCS</a>, <a href="https://www.ics.forth.gr/tnl">TNL</a>)',
      },
    ];

    return (
      <div>
        {experiences.length > 0 && (
          <ShowcaseListingSection showcases={experiences} />
        )}
      </div>
    );
  } catch (e) {
    console.log(e);
    return <h2>Unable to find any experience.</h2>;
  }
};

const ExperiencePage = (props) => {
  return (
    <Layout>
      <ExperiencePageInner {...props} />
    </Layout>
  );
};

export default ExperiencePage;
