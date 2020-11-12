import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const WrapIntroSection = styled.div`
  z-index: 10;
  height: 500px;
  background-image: url('https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-0/p180x540/52868251_2234390230221012_3085411747037708288_o.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_ohc=MF9EUx8hI4cAX9g1_b9&_nc_ht=scontent-sin6-2.xx&tp=6&oh=2e3d273f0f258117c7d03bfb43149e4d&oe=5FD37BBE');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  padding-top: 150px;
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

const IntroSection = () => {
  return (
    <Element name="home" id="home">
      <WrapIntroSection>
        <Maxim>
          Be where your feet are
          {/* Hãy sống vui với hiện tại  */}
        </Maxim>
        <Intro>Youth is so short, Let's rock the way you like</Intro>
      </WrapIntroSection>
    </Element>
  );
};

export default IntroSection;
