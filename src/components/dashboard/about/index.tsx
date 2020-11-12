import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Container, Title } from 'components/ui/common/index';

const AboutWrapper = styled.section`
  color: ${({ theme }) => theme.text};

  .about {
    color: ${({ theme }) => theme.text};
  }
`;

const AboutSection = () => {
  return (
    <Container data-aos="fade-right">
      <Element name="about" id="about" />
      <AboutWrapper>
        <Title>*About me</Title>

        <h1 className="about">
          Hi there :3 <br />
          My name is Luan. Im a Front-end developer
        </h1>
      </AboutWrapper>
    </Container>
  );
};

export default AboutSection;
