import React from 'react';
import styled from 'styled-components';
// import loadable from '@loadable/component';

import Layout from './../components/Layout';
// const HeadScene = loadable(() => import('./../components/HeadScene'));

import Confetti from 'react-confetti'

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
  font-family: 'Archivo', sans-serif;
  font-style: italic;
  font-size: 24px;
  margin-bottom: 0;
  color: #000;
  text-decoration: none;
`;

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  return {
    width: 1920,
    height: 1080
  };
}

const { height, width } = getWindowDimensions();

const Index = () => (
  <Layout>
    <Confetti
      width={width}
      height={height}
      gravity={0.005}
      numberOfPieces={50}
      tweenDuration={500}
    />
    <StyledContainer>
      {/* <HeadScene /> */}
      <StyledSectionHeading>Hello. My name is Ioannis Tsiakkas. I'm a Software Engineer currently working as a backend developer
        at <a href="https://fairlo.se/" rel="noopener noreferrer" target="_blank">Fairlo</a>.</StyledSectionHeading>
    </StyledContainer>
  </Layout>
);

export default Index;
