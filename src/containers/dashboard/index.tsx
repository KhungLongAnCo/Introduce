import React from 'react';
import styled from 'styled-components';
import AboutSection from 'components/dashboard/about';
import IntroSection from 'components/dashboard/intro';
import Skills from 'components/dashboard/skill/index';
import RoadMap from 'components/dashboard/roadmap/index';
import Footer from 'layout/Footer';
import ListProjects from 'components/dashboard/list-projects/index';

const Container = styled.div`
  color: ${({ theme }) => theme.text};
`;

const DashBoard = () => {
  return (
    <Container style={{ overflowX: 'hidden' }}>
      <IntroSection />
      <AboutSection />
      <Skills />
      <RoadMap />
      <ListProjects />
      <Footer />
    </Container>
  );
};

export default DashBoard;
