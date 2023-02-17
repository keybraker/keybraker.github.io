import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ReactSocialMediaIcons } from "react-social-media-icons";

const activeClassName = "active";

const StyledNav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1.8rem;

  @media (min-width: 520px) {
    align-items: center;
    flex-direction: row;
    font-size: 2.2rem;
  }
`;

const StyledList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0;

  @media (min-width: 520px) {
    display: block;
  }
`;

const ListElement = styled.li`
  display: inline-block;
  padding-left: 0.5em;
  text-align: center;
  text-decoration: none;
  border: none;
  color: #000000;

  &:hover {
    color: #9a9797;
  }

  &:after {
    content: " ";
    display: none;
    white-space: pre;

    @media (min-width: 520px) {
      display: inline-block;
    }
  }
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

const StyleHeaderFlexCol = styled.div`
  font-family: "Archivo", sans-serif;
  // font-style: italic;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 0;
  color: #9a9797;
  text-decoration: none;
`;

const NavItem = styled(Link).attrs({
  activeClassName,
})`
  color: black;
  border: none;

  &:hover {
    color: blue;
    text-decoration: underline;
  }

  &:before {
    content: "/";
  }

  &:before {
    @media (min-width: 520px) {
      display: inline;
    }
  }

  &.${activeClassName} {
    color: gray;

    &:before {
      content: "";
    }

    &:after {
      content: "/";
    }
  }
`;

const TitleLink = styled(Link)`
  // text-transform: lowercase;
  color: #000;
  text-decoration: none;
  border: none;
  font-size: 1.8rem;

  @media (min-width: 520px) {
    font-size: 2.2rem;
  }

  &:hover {
    color: #9a9797;
  }
`;

const mail = "mailto:" + "iantsiakkas@gmail.com";
const subject = "?subject=" + "Hey%20Ioannis";
const body = "&body=" + "Email%20Body";
const name = "Ioannis Tsiakkas";
const birthdate = "Dec 1995";
const addr = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const mailVisible = "iantsiakkas AT gmail DOT com";
const gthb = "https://github.com/" + "Keybraker";
const twtr = "https://twitter.com/" + "RealTsiakkas";
const lnkd = "https://www.linkedin.com/in/" + "ioannis-t-3365151a2";
const size = "22";

function AboutPageInner() {
  return (
    <StyleHeaderFlexRow>
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
}

const Nav = () => {
  return (
    <StyledNav>
      <StyleHeaderFlexCol>
        <TitleLink to="/">
          <b>Ioannis Tsiakkas</b>
        </TitleLink>
        <AboutPageInner></AboutPageInner>
      </StyleHeaderFlexCol>

      <StyledList>
        {/* <ListElement>
          <NavItem to="/about-me/" activeClassName={activeClassName}>
            about me
          </NavItem>
        </ListElement> */}
        <ListElement>
          <NavItem to="/education/" activeClassName={activeClassName}>
            education
          </NavItem>
        </ListElement>
        <ListElement>
          <NavItem to="/experience/" activeClassName={activeClassName}>
            experience
          </NavItem>
        </ListElement>
        {/*
        <ListElement>
          <NavItem to="/projects/" activeClassName={activeClassName}>
            projects
          </NavItem>
        </ListElement>
        <ListElement>
          <NavItem to="/blog/" activeClassName={activeClassName}>
            blog
          </NavItem>
        </ListElement>
        */}
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
