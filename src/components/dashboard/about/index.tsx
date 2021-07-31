import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Container, Title } from 'components/ui/common/index';
import BgImg from '../../../assets/images/common/space-img.jpg';

const AboutWrapper = styled(Element)`
  background-image: ${({ theme }) => {
    if (theme.text !== '#363537') {
      return `url(${BgImg})`;
    }
    return null;
  }};
  background-position: center;
  padding: 5rem 0px;
  background-size: cover;
  background-repeat: no-repeat;
  .wrap {
    color: ${({ theme }) => theme.text};
    text-shadow: ${({ theme }) => {
      if (theme.text !== '#363537') {
        return `3px 3px 20px #ff0000, -2px 1px 30px #1dff19`;
      }
      return null;
    }};
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
            My name is Luan. I'm a Front-End Developer
            <br />
            I have 2 years of experience in Front-End development.
            <br />
            Experience working in both Production and Start-up environments.
            <br />
            Able to work independently as well as in a group.
            <br />
            My CV:{' '}
            <a
              href="https://bitly.com.vn/3uxw4s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit now
            </a>
          </h1>
        </div>
      </Container>
    </AboutWrapper>
  );
};

export default AboutSection;
