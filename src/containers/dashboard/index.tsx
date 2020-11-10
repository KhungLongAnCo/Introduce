import React from 'react';
import styled from 'styled-components';
import AboutSection from 'components/dashboard/about';
import IntroSection from 'components/dashboard/intro';

const Container = styled.div`
  color: ${({ theme }) => theme.text};
`;

const DashBoard = () => {
  return (
    <Container>
      <IntroSection />
      <AboutSection />
    </Container>
  );
};

export default DashBoard;
