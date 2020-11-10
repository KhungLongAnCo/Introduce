import React from 'react';
import styled from 'styled-components';
import AboutSection from 'components/dashboard/about';
import IntroSection from 'components/dashboard/intro';
import Skills from 'components/dashboard/skill/index';

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  margin-bottom: 50px;
`;

const DashBoard = () => {
  return (
    <Container>
      <IntroSection />
      <AboutSection />
      <Skills />
    </Container>
  );
};

export default DashBoard;
