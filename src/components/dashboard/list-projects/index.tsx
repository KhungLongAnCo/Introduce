import React, { useRef, useCallback } from 'react';
import { Container, Title } from 'components/ui/common/index';
import { Element } from 'react-scroll';
import { SwiperOptions } from 'swiper';
import styled from 'styled-components';
import Swiper, { SwiperInstance } from 'react-id-swiper';

const ListProject = [
  {
    id: 1,
    name: 'Bicycle Blue Book',
    description: (
      <>A Marketplace helps you buying and selling bicycles easily.</>
    ),
    members: 'More than 10',
    role: 'Front-End Developer',
    link: 'https://www.bicyclebluebook.com/',
    technologies: 'React Js, Next Js, HTML, SCSS ...',
  },
  {
    id: 2,
    name: 'IntelAds',
    description: (
      <>
        Deliver advertising through outdoor signage and buses quickly and easily
      </>
    ),
    members: 'More than 5',
    role: 'Front-End Developer',
    link: 'https://intelads.vn/',
    technologies: 'Js, HTML, SCSS ...',
  },
  {
    id: 3,
    name: 'Angkorpass reseller',
    description: <>Selling and managing tickets for angkor temple.</>,
    members: '2',
    role: 'Front-End Developer',
    link: '',
    technologies: 'Js, HTML, SCSS ...',
  },
  {
    id: 4,
    name: 'Pipeflare',
    description: <>Marketing Zen crypto currency.</>,
    members: 'More than 20',
    role: 'Front-End Developer',
    link: 'https://pipeflare.io/',
    technologies: 'Ruby, HTML, Css, Js ...',
  },
  {
    id: 4,
    name: 'Horizen',
    description: <>Marketing Zen crypto currency.</>,
    members: 'More than 20',
    role: 'Front-End Developer',
    link: 'https://www.horizen.io/',
    technologies: 'Laravel, Php, Js ...',
  },
  {
    id: 5,
    name: 'Bicycle Blue Book V3',
    description: (
      <>A Marketplace helps you buying and selling bicycles easily.</>
    ),
    members: 'More than 5',
    role: 'Front-End Developer',
    // link: 'https://www.bicyclebluebook.com/',
    technologies: 'Next Js, HTML, SCSS, Typescript ...',
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
  padding: 3rem 0px;
  position: relative;
  .swiper-slide {
    height: auto !important;
  }
`;
const ProjectItem = styled.div`
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

const ListProjects = () => {
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
  return (
    <Element name="projects" id="projects">
      <Container>
        <Title>* Projects</Title>
        <Wrapper>
          <Swiper
            {...slideOptions}
            getSwiper={(c) => {
              swiper.current = c;
            }}
          >
            {ListProject.map((item) => (
              <div key={item.id}>
                <ProjectItem>
                  <h1>{item.name}</h1>
                  <div className="content">
                    <div className="info">
                      <b className="label">Description:</b>
                      <span>{item.description}</span>
                    </div>
                    <div className="info">
                      <b className="label">Role:</b>
                      {item.role}
                    </div>
                    <div className="info">
                      <b className="label">Team member:</b> {item.members}
                    </div>
                    <div className="info">
                      <b className="label">Technologies:</b> {item.technologies}
                    </div>
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="visit"
                    >
                      Visit now
                    </a>
                  ) : (
                    <div className="visit">private</div>
                  )}
                  {/* {item.link2 && (
                    <a
                      href={item.link2}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="visit"
                    >
                      Visit now (web 2)
                    </a>
                  )} */}
                </ProjectItem>
              </div>
            ))}
          </Swiper>
          <NextBtn onClick={goNext}>{'>'}</NextBtn>
        </Wrapper>
      </Container>
    </Element>
  );
};

export default ListProjects;
