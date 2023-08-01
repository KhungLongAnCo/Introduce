import React, { useRef, useCallback } from 'react';
import { Container, Title } from 'components/ui/common/index';
import { Element } from 'react-scroll';
import { SwiperOptions } from 'swiper';
import styled from 'styled-components';
import Swiper, { SwiperInstance } from 'react-id-swiper';
import bgReward1 from '../../../assets/images/common/reward1.jpg';
import bgReward2 from '../../../assets/images/common/reward2.jpg';
import bgReward3 from '../../../assets/images/common/reward3.jpg';

const ListProject = [
  {
    id: 1,
    url: bgReward3,
  },
  {
    id: 2,
    url: bgReward1,
  },
  {
    id: 3,
    url: bgReward2,
  },
];

const slideOptions: SwiperOptions = {
  slidesPerView: 1,
  // init: false,
  centeredSlides: false,
  mousewheel: {
    forceToAxis: true,
    releaseOnEdges: false,
    invert: false,
  },
  spaceBetween: 20,
  height: 430,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};

const Wrapper = styled.div`
  position: relative;
  .swiper-slide {
    height: auto !important;
  }
`;
const WrapImg = styled.div`
  padding: 3rem 0px;
  border-radius: 5px;
  height: 100%;
  min-height: 240px;
  box-shadow: ${({ theme }) => {
    if (theme.text === '#363537') {
      return `rgb(1 220 255 / 25%) 0px 30px 60px -12px inset, rgb(8 8 8 / 30%) 0px 18px 36px -18px inset;`;
    }
    return `rgb(144 240 255 / 25%) 0px 30px 60px -12px inset, rgb(219 250 255 / 30%) 0px 18px 36px -18px inset;`;
  }};
  padding: 1.5rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  h1 {
    color: ${({ theme }) => theme.text};
  }
  .content {
    flex-grow: 1;
    .info {
      display: flex;
      padding: 0.2rem 0px;
    }
    .label {
      min-width: 115px;
      display: inline-block;
    }
  }
  .visit {
    text-align: right;
    text-decoration: underline;
    font-style: italic;
  }
`;
const NextBtn = styled.div`
  @keyframes animation {
    0% {
      right: -40px;
    }
    50% {
      right: -55px;
    }
    100% {
      right: -40px;
    }
  }
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-weight: bold;
  font-size: 50px;
  right: -40px;
  top: 36%;
  animation-name: animation;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  cursor: pointer;
  animation-iteration-count: infinite;
`;

const Rewarded = () => {
  const swiper = useRef<SwiperInstance>(null);
  const goNext = useCallback(() => {
    if (swiper.current) {
      swiper.current.slideNext();
    }
  }, []);
  const goPrev = useCallback(() => {
    if (swiper.current) {
      swiper.current.slidePrev();
    }
  }, []);
  console.log('swiper', swiper);
  return (
    <Element name="projects" id="projects">
      <Container>
        <Wrapper>
          <Swiper
            {...slideOptions}
            getSwiper={(c) => {
              swiper.current = c;
            }}
          >
            {ListProject.map((item) => (
              <div key={item.id}>
                <WrapImg>
                  <img src={item.url} alt="lol" />
                </WrapImg>
              </div>
            ))}
          </Swiper>
          <NextBtn onClick={goNext}>
            <span>{'>'}</span>
          </NextBtn>
        </Wrapper>
      </Container>
    </Element>
  );
};

export default Rewarded;
