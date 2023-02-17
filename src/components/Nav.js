import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const activeClassName = "active";

const StyledNav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: col;
  font-size: 1.8rem;

  @media (min-width: 300px) {
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
  color: #000;
  text-decoration: none;
  border: none;

  &:hover {
    color: #525252;
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
    display: none;
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

  &:hover {
    color: #525252;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <TitleLink to="/">
        <b>Ioannis Tsiakkas</b>
      </TitleLink>
      <StyledList>
        <ListElement>
          <NavItem to="/about-me/" activeClassName={activeClassName}>
            about me
          </NavItem>
        </ListElement>
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
