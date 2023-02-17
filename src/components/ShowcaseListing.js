import React from "react";
import styled from "styled-components";

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

const StyledLinkNoWrap = styled.span`
  display: flex;
  flex-wrap: nowrap;
  align-items: start;
  justify-content: space-between;
`;

const StyledCol = styled.span`
  display: flex;
  flex-wrap: nowrap;
  align-items: end;
  flex-direction: column;
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

  display: flex;
  flex-wrap: nowrap;
  align-items: end;
  justify-content: space-between;
`;

const StyledLedeSpan2 = styled.span`
  // display: inline-block;
  // flex-grow: 1;
  // display: block;
  font-style: italic;
  font-size: 1.4rem;

  display: flex;
  flex-wrap: nowrap;
  align-items: end;
  justify-content: space-between;
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
        <StyledLinkNoWrap>
          <StyledSectionHeading
            className="content"
            dangerouslySetInnerHTML={{ __html: showcase.title }}
          ></StyledSectionHeading>
          <StyledLedeSpan>
            {showcase.start} - {showcase.end}
          </StyledLedeSpan>
        </StyledLinkNoWrap>
        <StyledLinkNoWrap>
          <StyledLedeSpan
            className="content"
            dangerouslySetInnerHTML={{ __html: showcase.info }}
          ></StyledLedeSpan>
          <StyledCol>
            <StyledLedeSpan
              className="content"
              dangerouslySetInnerHTML={{ __html: showcase.position }}
            ></StyledLedeSpan>
            {showcase.technologies ? (
              <StyledLedeSpan2
                className="content"
                dangerouslySetInnerHTML={{
                  __html: `(${showcase.technologies.join(", ")})`,
                }}
              ></StyledLedeSpan2>
            ) : (
              ""
            )}
          </StyledCol>
        </StyledLinkNoWrap>
      </StyledShowcaseItem>
    );
  });

  return <StyledShowcaseListing>{showcaseLinks}</StyledShowcaseListing>;
};

export default ShowcaseListing;
