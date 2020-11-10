import React from 'react';
import styled from 'styled-components';

const WrapIntroSection = styled.div`
  z-index: 10;
  height: 500px;
  background-image: url('https://i.ytimg.com/vi/zzY3HAmwr1E/maxresdefault.jpg');
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
  border: solid 4px white;
  border-width: 4px 0px 4px 0px;
  font-size: 46px;
`;

const Intro = styled.div`
  font-size: 22px;
  font-style: italic;
  text-align: right;
  width: 70vw;
  color: white;
  margin: 30px auto 0px auto;
`;

const IntroSection = () => {
  return (
    <WrapIntroSection>
      <Maxim>
        Be where your feet are
        {/* Hãy sống vui với hiện tại  */}
      </Maxim>
      <Intro>Youth is so short, Let's rock the way you like</Intro>
    </WrapIntroSection>
  );
};

export default IntroSection;
