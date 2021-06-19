import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Container, Title } from 'components/ui/common/index';

const AboutWrapper = styled(Element)`
  @media screen and (max-width: 500px) {
    background-position: calc(100vw - 110px);
  }
  .wrap {
    color: ${({ theme }) => theme.text};
    .about {
      color: ${({ theme }) => theme.text};
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutWrapper name="about" id="about">
      <Container data-aos="fade-left">
        <div className="wrap">
          <Title>*About me</Title>

          <h1 className="about">
            Hi there :3 <br />
            My name is Luan. Im a Front-end developer
          </h1>
        </div>
      </Container>
    </AboutWrapper>
  );
};

export default AboutSection;
