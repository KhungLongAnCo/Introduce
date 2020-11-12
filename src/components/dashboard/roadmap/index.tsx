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
    timeLine: 'APR 2020 - Now',
    title: 'VMO',
    func: 'FRONT-END DEVELOPER',
    description: (
      <div>
        - Maintain application with more than 20,000 active users. <br />+
        Working mainly with ui framework as REACT JS, NEXT JS, TYPESCRIPT
      </div>
    ),
  },
  {
    timeLine: 'AUG 2019 - MATCH 2019',
    title: 'Intelads | BeeGuide',
    func: 'FULL-STACK DEVELOPER',
    description: (
      <div>
        - Working as full-stack developer developing Outdoor Ads management web{' '}
        <br />+ Working mainly with REACT JS, JAVA SPRING BOOT, MARIA DB,
        POSTGRESQL
      </div>
    ),
  },
];
const Wrapper = styled.div`
  .leftIntro {
    text-align: right;
    padding-right: 50px;
  }
  .rightIntro {
    padding-left: 50px;
  }
`;
const Journey = styled.div`
  display: flex;
`;
const Info = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  width: 50%;
  padding: 10px;
  /* border-top: solid 5px; */
  /* border-bottom: solid 5px; */
  position: relative;
  border-radius: 20px;
  .time {
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
  }
  .title {
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0px;
  }
  .description {
    font-size: 18px;
    font-weight: 500;
  }
  .wrapFeet {
    position: absolute;
    display: flex;
    flex-direction: column;
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
    <Container>
      <Element name="career" id="career" />
      <Title>*Career Path</Title>
      <Wrapper>
        {Journeys.map((item, index) => (
          <Journey key={String(index)} data-aos="fade-left">
            {index % 2 ? (
              renderItem(item, index)
            ) : (
              <div style={{ width: '50%' }} />
            )}
            {index % 2 === 1 ? (
              <div style={{ width: '50%' }} />
            ) : (
              renderItem(item, index)
            )}
          </Journey>
        ))}
      </Wrapper>
    </Container>
  );
};

export default RoadMap;
