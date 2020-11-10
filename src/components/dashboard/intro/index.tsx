import React from 'react';
import styled from 'styled-components';

const WrapIntroSection = styled.div`
  z-index: 10;
  height: 500px;
`;
const Maxim = styled.div`
  width: 70vw;
  padding: 5px 20px;
  text-align: center;
  margin: 100px auto 0px auto;
  font-weight: bold;
  border: solid 4px white;
  border-width: 4px 0px 4px 0px;
  font-size: 46px;
`;

const Intro = styled.div`
  font-size: 22px;
  font-style: italic;
  width: 70vw;
  margin: 30px auto 0px auto;
`;

const IntroSection = () => {
  return (
    <WrapIntroSection>
      <Maxim>testsetes testesteste tse tsetest</Maxim>
      <Intro>test tes tetestestet</Intro>
    </WrapIntroSection>
  );
};

export default IntroSection;
