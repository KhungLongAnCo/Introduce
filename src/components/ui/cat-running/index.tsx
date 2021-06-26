import React from 'react';
import styled from 'styled-components';
import CatImg from '../../../assets/images/common/cat-run.gif';

const Wrapper = styled.div`
  @keyframes catRunAnimation {
    from {
      left: -30px;
    }
    to {
      left: calc(100vw + 30px);
    }
  }
  img {
    width: 100px;
    position: relative;
    animation-name: catRunAnimation;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    @media screen and (max-width: 768px) {
      animation-duration: 8s;
    }
  }
`;

const CarRunning = () => {
  return (
    <Wrapper>
      <img src={CatImg} alt="CatImg" />
    </Wrapper>
  );
};

export default CarRunning;
