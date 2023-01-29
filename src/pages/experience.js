import React from "react";

import Layout from "../components/Layout";
import ShowcaseListingSection from "../components/ShowcaseListingSection";

const ExperiencePageInner = (props) => {
  try {
    const experiences = [
      {
        start: "Feb 2022",
        end: "Present",
        title:
          '<a href="https://fairlo.se/" rel="noopener noreferrer"target="_blank">Fairlo</a>',
        info: "Financial Services",
        position: "Backend Developer (TypeScript, PostgreSQL)",
      },
      {
        start: "Jul 2021",
        end: "Jan 2022",
        title:
          '<a href="http://www.army.gov.cy/" rel="noopener noreferrer"target="_blank">Cypriot Military</a>',
        info: "Ordnance Corps",
        position: "Obligatory military service",
      },
      {
        start: "Mar 2020",
        end: "Jun 2021",
        title:
          '<a href="https://www.cyberlogic.gr/en/home" rel="noopener noreferrer"target="_blank">Cyberlogic</a>',
        info: "Travel Technologies",
        position: "Frontend Developer (Angular)",
      },
      {
        start: "May 2019",
        end: "Mar 2020",
        title:
          '<a href="https://www.medwork.gr/index.php" rel="noopener noreferrer"target="_blank">Medwork</a>',
        info: "Contract Research Organization",
        position: "Full Stack Developer (React, Java, MySQL)",
      },
      {
        start: "Jun 2017",
        end: "Jan 2019",
        title:
          '<a href="https://www.ics.forth.gr" rel="noopener noreferrer"target="_blank">FORTH</a>',
        info: "Telecommunications Research Lab",
        position:
          'Undergraduate Researcher (<a href="https://www.ics.forth.gr/discs" rel="noopener noreferrer"target="_blank">DISCS</a>' +
          ', <a href="https://www.ics.forth.gr/tnl" rel="noopener noreferrer"target="_blank">TNL</a>)',
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
