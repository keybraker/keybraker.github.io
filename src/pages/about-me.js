import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import resumePdf from "../../static/ioannis_tsiakkas_resume.pdf";
import { SocialMediaIconsReact } from "social-media-icons-react";

const name = "Ioannis Tsiakkas";
const date = "04 DEC 1995";
// const code = "0030";
// const phne = "6971823409";
const addr = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const mailVisible = "iantsiakkas AT gmail DOT com";
const mail = "mailto:" + "iantsiakkas@gmail.com";
const gthb = "https://github.com/" + "Keybraker";
const twtr = "https://twitter.com/" + "RealTsiakkas";
const lnkd = "https://www.linkedin.com/in/" + "ioannis-t-3365151a2";
const size = "30";

const AboutPageInner = (props) => {
  try {
    return (
      <div align="justify" width="100%">
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0)"
          roundness="10"
          icon="map"
          iconColor="#000000"
          backgroundColor="rgba(0,0,0,0)"
          url={addr}
          size={size}
        />{" "}
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0)"
          roundness="10"
          icon="mail"
          iconColor="#000000"
          backgroundColor="rgba(0,0,0,0)"
          url={mail}
          size={size}
        />{" "}
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0)"
          roundness="10"
          icon="github"
          iconColor="#000000"
          backgroundColor="rgba(0,0,0,0)"
          url={gthb}
          size={size}
        />{" "}
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0)"
          roundness="10"
          icon="twitter"
          iconColor="#000000"
          backgroundColor="rgba(0,0,0,0)"
          url={twtr}
          size={size}
        />{" "}
        <SocialMediaIconsReact
          borderColor="rgba(0,0,0,0)"
          roundness="10"
          icon="linkedin"
          iconColor="#000000"
          backgroundColor="rgba(0,0,0,0)"
          url={lnkd}
          size={size}
        />
        <br></br>
        <br></br>
        <b>
          <a href={resumePdf} download="ioannis_tsiakkas_resume.pdf">
            Resume (pdf ~77KB) &#9660;
          </a>
        </b>
        {/* <a
                  href={`https://github.com/${lnkd}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a> */}
      </div>
    );
  } catch (e) {
    console.log(e);
    return <h2>Unable to find any data.</h2>;
  }
};

const AboutPage = (props) => {
  return (
    <Layout>
      <AboutPageInner {...props} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "project" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            lede
          }
          fields {
            slug
            projectType
          }
        }
      }
    }
  }
`;
