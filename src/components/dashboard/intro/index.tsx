import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import images from 'assets/images/index';
import BannerImg from '../../../assets/images/common/banner.jpg';

const WrapIntroSection = styled.div`
  position: relative;
  z-index: 10;
  height: 650px;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  padding-top: 150px;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 85px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(8, 45, 64, 1) 100%
    );
    position: absolute;
    opacity: 0.4;
    top: 0;
  }
`;
const Maxim = styled.div`
  width: 70vw;
  padding: 5px 20px;
  text-align: center;
  margin: 0px auto;
  color: white;
  font-weight: bold;
  text-shadow: 3px 3px 20px gray, -2px 1px 30px gray;
  border: solid 4px white;
  border-width: 4px 0px 4px 0px;
  font-size: 46px;
`;

const Intro = styled.div`
  font-size: 22px;
  font-style: italic;
  text-align: right;
  text-shadow: 3px 3px 20px gray, -2px 1px 30px gray;
  width: 70vw;
  color: white;
  margin: 30px auto 0px auto;
`;

const WrapSocials = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #b0a5a5;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
  .social {
    width: 75px;
    height: 75px;
    filter: grayscale(1);
    /* background: white; */
    border-radius: 50%;
    margin: 0.5rem;
    @media screen and (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
    transform: scale(0.9);
    &:hover {
      filter: grayscale(0);
      transform: scale(1);
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const IntroSection = () => {
  return (
    <Element name="home" id="home">
      <WrapIntroSection>
        <Maxim>
          Be where your feet are
          {/* Hãy sống vui với hiện tại  */}
        </Maxim>
        <Intro>Youth is so short, Let's rock the way you like</Intro>
        <WrapSocials>
          <a
            href="https://github.com/KhungLongAnCo"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <img src={images.socials.githubIc} alt="githubIc" />
          </a>
          <a
            href="https://www.linkedin.com/in/lu%C3%A2n-nguy%E1%BB%85n-7266b1224"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <img src={images.socials.linkinIc} alt="linkinIc" />
          </a>
          <a
            href="mailto:luan1982000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <img src={images.socials.emailIc} alt="emailIc" />
          </a>
          <a
            href="https://www.facebook.com/luan.nguyenvanluan.393/"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <img src={images.socials.fbIc} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/yuull_1908/"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <img src={images.socials.igIc} alt="igIc" />
          </a>
        </WrapSocials>
      </WrapIntroSection>
    </Element>
  );
};

export default IntroSection;
