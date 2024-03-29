import React, { useCallback, ReactElement } from 'react';
import { Container, Title } from 'components/ui/common/index';
import images from 'assets/images/index';
import cx from 'classnames';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const { FeetIcon } = images;

interface JourneyModel {
  timeLine: string;
  title: string;
  description: string | ReactElement;
  func: string;
  bgImage?: string;
}
const Journeys: JourneyModel[] = [
  {
    timeLine: 'APRIL 2020 - AUGUST 2023',
    title: 'VMO-GROUP',
    func: 'FRONT-END DEVELOPER',
    description: (
      <div>
        + Maintained an application with more than 20,000 active users. <br />
        Worked as a front-end developer and tech lead on multiple projects,
        using a variety of frameworks and libraries including Vanilla
        JavaScript, jQuery, React.js, Next.js, and TypeScript.
        <br />+ Received recognition as an excellent team member, and was
        awarded a Certificate of Merit for outstanding performance.{' '}
        {/* <a href="../../../assets/images/common/avatar.jpg" download>
          View Certificate
        </a> */}
      </div>
    ),
  },
  {
    timeLine: 'AUGUST 2019 - MARCH 2020',
    title: 'Intelads | BeeGuide',
    func: 'FULL-STACK DEVELOPER',
    description: (
      <div>
        + Start my frist job
        <br /> + Working as a full-stack developer, developing a web application
        for outdoor advertising management.
        <br />+ Mainly working with React.js, JavaScript, Java Spring Boot,
        MariaDB, and PostgreSQL.
      </div>
    ),
  },
];
const Wrapper = styled.div`
  .leftIntro {
    text-align: right;
    padding-right: 50px;
    @media (max-width: 767.98px) {
      width: 100%;
      padding: 50px 0px 0px 0px;
      text-align: center;
    }
  }
  .rightIntro {
    padding-left: 50px;
    @media (max-width: 767.98px) {
      width: 100%;
      padding: 50px 0px 0px 0px;
      text-align: center;
    }
  }
`;
const Journey = styled.div`
  display: flex;
  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;
const Info = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  width: 50%;
  padding: 10px;
  /* border-top: solid 5px; */
  /* border-bottom: solid 5px; */
  position: relative;
  border-radius: 20px;
  @media (max-width: 767.98px) {
    width: 100%;
    text-align: center;
  }
  .time {
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
  }
  .title {
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0px;
    @media (max-width: 767.98px) {
      text-align: center;
    }
  }
  .description {
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 767.98px) {
      width: 100%;
      text-align: center;
    }
  }
  .wrapFeet {
    position: absolute;
    display: flex;
    flex-direction: column;
    @media (max-width: 767.98px) {
      display: none !important;
    }
    :first-child {
      display: none;
    }
    .icon-feet {
      width: 30px;
      height: 30px;
      margin-bottom: 10px;
      path {
        fill: ${({ theme }) => theme.text};
      }
    }
  }
  .leftFeet {
    right: -30px;
    top: -25px;
    transform: rotate(70deg);
  }
  .rightFeet {
    left: -30px;
    top: -25px;
    transform: rotate(-70deg);
  }
`;
const RoadMap = () => {
  const renderItem = useCallback((item: JourneyModel, index: number) => {
    return (
      <Info
        bg={item.bgImage}
        className={cx({
          leftIntro: index % 2 === 1,
          rightIntro: index % 2 === 0,
        })}
      >
        <div className="time">{item.timeLine}</div>
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
        <div
          style={{ display: index === 0 ? 'none' : 'flex' }}
          className={cx('wrapFeet', {
            leftFeet: index % 2 === 1,
            rightFeet: index % 2 === 0,
          })}
        >
          <FeetIcon className="icon-feet" />
          <FeetIcon className="icon-feet" />
          <FeetIcon className="icon-feet" />
        </div>
      </Info>
    );
  }, []);
  return (
    <Element name="career" id="career">
      <Container>
        <Title>* Journeys-Experiences</Title>
        <Wrapper>
          {Journeys.map((item, index) => (
            <Journey key={String(index)} data-aos="fade-left">
              {index % 2 ? (
                renderItem(item, index)
              ) : (
                <div
                  className="d-none d-sm-block d-md-none w-50"
                  style={{ width: '50%' }}
                />
              )}
              {index % 2 === 1 ? (
                <div
                  className="d-none d-sm-block d-md-none w-50"
                  style={{ width: '50%' }}
                />
              ) : (
                renderItem(item, index)
              )}
            </Journey>
          ))}
        </Wrapper>
      </Container>
    </Element>
  );
};

export default RoadMap;
