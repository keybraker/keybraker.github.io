import React from 'react';
import styled from 'styled-components';
import ShowcaseListing from './ShowcaseListing';

const StyledListingSection = styled.section`
  margin-bottom: 2em;
`;

const ShowcaseListingSection = ({ showcases }) => {
  return showcases.length > 0 ? (
    <StyledListingSection>
      <ShowcaseListing showcases={showcases} />
    </StyledListingSection>
  ) : null;
};

export default ShowcaseListingSection;
