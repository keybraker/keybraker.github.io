import React from "react";
import styled from "styled-components";
// import { Link } from 'gatsby';

// const DateSpan = styled.span`
//   color: #999;
//   margin-left: 0.5em;
// `;

const StyledShowcaseListing = styled.ul`
  list-style: none;
  margin-top: 0.5em;
`;

const StyledShowcaseItem = styled.li`
  font-family: "Noto Serif Display", serif;
  font-size: 1.8rem;
  // text-decoration: none;
  margin-bottom: 2em;
  line-height: 1.5em;
  // display: inline-block;
  // width: 33.3%;
  // padding-right: 1em;
  // display: flex;
  // flex-wrap: nowrap;
  // justify-content: space-between;
`;

const StyledLinkWrap = styled.span`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

// const StyledShowcaseLink = styled(Link)`
//   // display: inline-block;
//   // flex-grow: 0;
// `;

const StyledLedeSpan = styled.span`
  // display: inline-block;
  // flex-grow: 1;
  // display: block;
  font-style: italic;
`;

const StyledSectionHeading = styled.span`
  margin-bottom: 0;
  color: #000;
  text-decoration: none;
  letter-spacing: 0.07rem;
  font-family: "Archivo", sans-serif;
  font-weight: bold;
`;

const ShowcaseListing = ({ showcases }) => {
  const showcaseLinks = showcases.map((showcase, i) => {
    return (
      <StyledShowcaseItem key={i}>
        <StyledLinkWrap>
          <StyledSectionHeading>
            <span
              className="content"
              dangerouslySetInnerHTML={{ __html: showcase.title }}
            ></span>
          </StyledSectionHeading>
          <StyledLedeSpan>
            {showcase.start} - {showcase.end}
          </StyledLedeSpan>
        </StyledLinkWrap>
        <StyledLinkWrap>
          <StyledLedeSpan>
            <span
              className="content"
              dangerouslySetInnerHTML={{ __html: showcase.info }}
            ></span>
          </StyledLedeSpan>
          <StyledLedeSpan>
            <span
              className="content"
              dangerouslySetInnerHTML={{ __html: showcase.position }}
            ></span>
          </StyledLedeSpan>
        </StyledLinkWrap>
      </StyledShowcaseItem>
    );
  });

  return <StyledShowcaseListing>{showcaseLinks}</StyledShowcaseListing>;
};

export default ShowcaseListing;
