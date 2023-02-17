import React from "react";
import { ReactSocialMediaIcons } from "react-social-media-icons";
import resumePdf from "../../static/ioannis_tsiakkas_resume.pdf";
import Layout from "../components/Layout";
import styled from "styled-components";

const name = "Ioannis Tsiakkas";
const date = "Dec 1995";
const addr = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const mailVisible = "iantsiakkas AT gmail DOT com";
const mail = "mailto:" + "iantsiakkas@gmail.com";
const gthb = "https://github.com/" + "Keybraker";
const twtr = "https://twitter.com/" + "RealTsiakkas";
const lnkd = "https://www.linkedin.com/in/" + "ioannis-t-3365151a2";
const size = "30";

const StyleHeaderFlexRow = styled.div`
  font-family: "Archivo", sans-serif;
  // font-style: italic;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 0;
  color: #9a9797;
  text-decoration: none;
`;

const AboutPageInner = (props) => {
  try {
    return (
      <StyleHeaderFlexRow align="justify" width="100%">
        <div>
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0)"
            roundness="10"
            icon="map"
            iconColor="#000000"
            backgroundColor="rgba(0,0,0,0)"
            url={addr}
            size={size}
          />{" "}
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0)"
            roundness="10"
            icon="mail"
            iconColor="#000000"
            backgroundColor="rgba(0,0,0,0)"
            url={mail}
            size={size}
          />{" "}
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0)"
            roundness="10"
            icon="github"
            iconColor="#000000"
            backgroundColor="rgba(0,0,0,0)"
            url={gthb}
            size={size}
          />{" "}
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0)"
            roundness="10"
            icon="twitter"
            iconColor="#000000"
            backgroundColor="rgba(0,0,0,0)"
            url={twtr}
            size={size}
          />{" "}
          <ReactSocialMediaIcons
            borderColor="rgba(0,0,0,0)"
            roundness="10"
            icon="linkedin"
            iconColor="#000000"
            backgroundColor="rgba(0,0,0,0)"
            url={lnkd}
            size={size}
          />
        </div>
        {/* <b>
          <a href={resumePdf} download="ioannis_tsiakkas_resume.pdf">
            Resume (pdf ~77KB) &#9660;
          </a>
        </b> */}
      </StyleHeaderFlexRow>
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
