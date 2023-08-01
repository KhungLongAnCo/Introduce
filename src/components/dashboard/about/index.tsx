import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Container, Title } from 'components/ui/common/index';
import Rewarded from 'components/dashboard/rewarded/rewarded';
import BgImg from '../../../assets/images/common/space-img.jpg';

const AboutWrapper = styled(Element)`
  background-image: ${({ theme }) => {
    if (theme.text !== '#363537') {
      return `url(${BgImg})`;
    }
    return null;
  }};
  background-position: center;
  padding: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  .custom-container {
    padding-bottom: 0px !important;
  }

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
      <Container data-aos="fade-left" className="custom-container">
        <div className="wrap">
          <Title>*About me</Title>

          <h1 className="about">
            Hi there!
            <br /> My name is Luan {'('}Levi{')'}, and I'm a front-end developer
            with 4 years of experience in front-end development.
            <br /> I have experience working in both production and start-up
            environments, and I am able to work independently as well as in a
            group.
            <br />
            Here is My CV:{' '}
            <a
              href="https://www.topcv.vn/xem-cv/VwYCUwIDBF0DBgBWAV9ZAFNeAwgDBwJQAFUEAw23b5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit now
            </a>
          </h1>
        </div>
        <Rewarded />
      </Container>
    </AboutWrapper>
  );
};

export default AboutSection;
