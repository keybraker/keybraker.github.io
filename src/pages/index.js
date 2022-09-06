import React from "react";
import styled from "styled-components";
// import loadable from '@loadable/component';

import Layout from "./../components/Layout";
// const HeadScene = loadable(() => import('./../components/HeadScene'));

import Confetti from "react-confetti";

const StyledContainer = styled.div`
  height: 350px;

  @media (min-width: 520px) {
    height: 400px;
  }

  @media (min-width: 1400px) {
    height: 500px;
  }
`;

const StyledSectionHeading = styled.span`
  font-family: "Archivo", sans-serif;
  font-style: italic;
  font-size: 24px;
  margin-bottom: 0;
  color: #000;
  text-decoration: none;
`;

const StyledSectionDate = styled.span`
  font-family: "Archivo", sans-serif;
  font-style: italic;
  font-size: 16px;
  margin-bottom: 0;
  color: #9a9797;
  text-decoration: none;
`;

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  return {
    width: 1920,
    height: 1080,
  };
}

const { height, width } = getWindowDimensions();

var MyDate = new Date();
var date;

MyDate.setDate(MyDate.getDate());

date =
  ("0" + MyDate.getDate()).slice(-2) +
  "/" +
  ("0" + (MyDate.getMonth() + 1)).slice(-2) +
  "/" +
  MyDate.getFullYear();

const Index = () => (
  <Layout>
    {/* <Confetti
      width={width}
      height={height}
      gravity={0.005}
      numberOfPieces={50}
      tweenDuration={500}
    /> */}
    <StyledContainer>
      {/* <HeadScene /> */}
      <StyledSectionHeading>
        Hello,<br></br>
        <br></br>
        I'm a Software Engineer with experience in both frontend and backend
        development.<br></br>
        Currently working as a backend developer at{" "}
        <a href="https://fairlo.se/" rel="noopener noreferrer" target="_blank">
          Fairlo
        </a>
        .<br></br>
        <br></br>
        Kindly,<br></br>
        Ioannis Tsiakkas<br></br>
        <StyledSectionDate>Sent {date}</StyledSectionDate>
      </StyledSectionHeading>
    </StyledContainer>
  </Layout>
);

export default Index;
