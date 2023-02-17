import React from "react";
import styled from "styled-components";
// import loadable from '@loadable/component';
import { HiOutlineReply } from "@react-icons/all-files/hi/HiOutlineReply";
import { GrDocumentPdf } from "@react-icons/all-files/gr/GrDocumentPdf";
import resumePdf from "../../static/ioannis_tsiakkas_resume.pdf";
import Layout from "./../components/Layout";
import dayjs from "dayjs";
// const HeadScene = loadable(() => import('./../components/HeadScene'));
import { ReactSocialMediaIcons } from "react-social-media-icons";

import Confetti from "react-confetti";

const StyledContainer = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px;
  color: black;

  @media (min-width: 520px) {
    // height: 400px;
  }

  @media (min-width: 1400px) {
    // height: 500px;
  }
`;

const StyledHorizontalLine = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  border-top: 1px dashed gray;
`;

const StyleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledReplyWrapper = styled.div`
  font-family: "Archivo", sans-serif;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 28px;
  gap: 4px;
`;

const StyledAttachmentButton = styled.a`
  font-family: "Archivo", sans-serif;
  font-size: 18px;
  border: none;
  background: transparent;
  border: 1px solid #747775;
  border-radius: 6px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
  padding: 6px 10px;
  margin-top: 4px;
  color: black;

  &:hover {
    background-color: #e8e3e3;
    color: black;
  }
`;

const StyledReplyButton = styled.a`
  font-family: "Archivo", sans-serif;
  font-size: 18px;
  border: none;
  background: transparent;
  border: 1px solid #747775;
  border-radius: 18px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
  padding: 6px 10px;
  margin-top: 4px;
  color: black;

  &:hover {
    background-color: #e8e3e3;
    color: black;
  }
`;

const StyledSectionHeading = styled.span`
  font-family: "Archivo", sans-serif;
  font-style: italic;
  font-size: 20px;
  margin-bottom: 0;
  color: #000;
  text-decoration: none;
`;

const StyleHeaderFlexCol = styled.div`
  font-family: "Archivo", sans-serif;
  // font-style: italic;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0;
  color: black;
  text-decoration: none;
`;

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

const StyleGreyText = styled.div`
  font-family: "Archivo", sans-serif;
  // font-style: italic;
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

const mail = "mailto:" + "iantsiakkas@gmail.com";
const subject = "?subject=" + "Hey%20Ioannis";
const body = "&body=" + "Email%20Body";
const date = dayjs().format("MMM DD, YYYY, HH:mm");

const Index = () => (
  <Layout>
    {/* <Confetti
      width={width}
      height={height}
      gravity={0.02}
      numberOfPieces={50}
      tweenDuration={500}
    /> */}
    <StyledContainer>
      {/* <HeadScene /> */}
      <StyleHeader>
        <StyleHeaderFlexCol>
          <span>
            <b>Ioannis Tsiakkas</b>{" "}
          </span>
          <span>to you</span>
        </StyleHeaderFlexCol>
        <StyleHeaderFlexCol>
          <StyleGreyText>{date}</StyleGreyText>
          <span>one attachment</span>
        </StyleHeaderFlexCol>
      </StyleHeader>
      <StyledHorizontalLine></StyledHorizontalLine>
      <StyledSectionHeading>
        Hello,<br></br>
        <br></br>
        I'm a Software Engineer with experience in building web applications. I
        mainly focus on the backend client and infrastructure but have also
        worked in the frontend. Currently working as a backend developer at{" "}
        <a href="https://fairlo.se/" target="_blank">
          Fairlo
        </a>
        .<br></br>
        <br></br>
        You can take a look at some of my work on my Github page by clicking{" "}
        <a href="https://github.com/keybraker" target="_blank">
          here
        </a>
        .<br></br>
        <br></br>
        If you have any ideas you wish to share, feel free to reply.
        <br></br>
        <br></br>
        Kindly,<br></br>
        Ioannis Tsiakkas<br></br>
      </StyledSectionHeading>
      <StyledReplyWrapper>
        <StyledReplyButton href={`${mail}${subject}`}>
          <HiOutlineReply /> Reply
        </StyledReplyButton>
        <StyledAttachmentButton
          href={resumePdf}
          download="ioannis_tsiakkas_resume.pdf"
        >
          <GrDocumentPdf /> Resume
        </StyledAttachmentButton>
      </StyledReplyWrapper>
    </StyledContainer>
  </Layout>
);

export default Index;
