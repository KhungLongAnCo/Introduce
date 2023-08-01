import React from 'react';
import styled, { keyframes } from 'styled-components';
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
const shadows = keyframes`
0% {
  text-shadow: none;
}
10% {
  text-shadow: 3px 3px 0 #0f395a;
}
20% {
  text-shadow: 3px 3px 0 #0f395a,
    6px 6px 0 #3872a0;
}
30% {
  text-shadow: 3px 3px 0 #0f395a,
    6px 6px 0 #3872a0, 9px 9px #021829;
}
40% {
  text-shadow: 3px 3px 0 #0f395a,
    6px 6px 0 #3872a0, 9px 9px #021829,
    12px 12px 0 #010f1a;
}
50% {
  text-shadow: 3px 3px 0 #0f395a,
    6px 6px 0 #3872a0, 9px 9px #021829,
    12px 12px 0 #010f1a;
}
60% {
  text-shadow: 3px 3px 0 #0f395a,
    6px 6px 0 #3872a0, 9px 9px #021829,
    12px 12px 0 #010f1a;
}
70% {
  text-shadow: 3px 3px 0 #0f395a,
    6px 6px 0 #3872a0, 9px 9px #021829;
}
80% {
  text-shadow: 3px 3px 0 #0f395a,
    6px 6px 0 #3872a0;
}
90% {
  text-shadow: 3px 3px 0 #0f395a;
}
100% {
  text-shadow: none;
}
 `;
const move = keyframes`
 0% {
  transform: translate(0px, 0px);
}
40% {
  transform: translate(-12px, -12px);
}
50% {
  transform: translate(-12px, -12px);
}
60% {
  transform: translate(-12px, -12px);
}
100% {
  transform: translate(0px, 0px);
}
  `;

const Maxim = styled.div`
  width: 70vw;
  min-height: 350px;
  padding: 5px 20px;
  text-align: center;
  margin: 0px auto;
  color: white;
  font-weight: bold;
  text-shadow: 3px 3px 20px gray, -2px 1px 30px gray;
  border-width: 4px 0px 4px 0px;
  font-size: 46px;
  text-shadow: 3px 3px 0 #0f395a, 6px 6px 0 #3872a0, 9px 9px #021829,
    12px 12px 0 #010f1a;
  font-family: bungee, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: calc(2rem + 5vw);

  color: #83bdeb;
  //color: transparent;
  //background-color: white;
  //background-clip: text;
  animation: ${shadows} 2.2s ease-in infinite, ${move} 2.2s ease-in infinite;
  letter-spacing: 0.4rem;
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
  background: rgb(109, 213, 250, 0.5);
  border-radius: 50px;
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
        <Maxim>{/* Be where your feet are */}</Maxim>
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
