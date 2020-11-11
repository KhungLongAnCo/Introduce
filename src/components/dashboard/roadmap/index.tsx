import React, { useCallback } from 'react';
import { Container, Title } from 'components/ui/common/index';
import images from 'assets/images/index';
import cx from 'classnames';
import styled from 'styled-components';

const { FeetIcon } = images;

interface JourneyModel {
  timeLine: string;
  title: string;
  description: string;
}
const Journeys: JourneyModel[] = [
  {
    timeLine: '2019-2020',
    title: 'test',
    description: 'test tsest setetet',
  },
  {
    timeLine: '2018-2019',
    title: 'test',
    description: 'test tsest setetet',
  },
];
const Wrapper = styled.div``;
const Journey = styled.div`
  display: flex;
`;
const Info = styled.div`
  /* background: white; */
  width: 45%;
  padding: 10px;
  position: relative;
  border-radius: 20px;
  .time {
    font-size: 22px;
    font-weight: bold;
    font-style: italic;
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
    right: -70px;
    top: -44px;
    transform: rotate(70deg);
  }
  .rightFeet {
    left: -70px;
    top: -44px;
    transform: rotate(-70deg);
  }
`;
const RoadMap = () => {
  const renderItem = useCallback((item: JourneyModel, index: number) => {
    return (
      <Info>
        <div className="time">{item.timeLine}</div>
        <div>{item.title}</div>
        <div>{item.description}</div>
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
      <Title>test</Title>
      <Wrapper>
        {Journeys.map((item, index) => (
          <Journey key={String(index)}>
            {index % 2 ? (
              renderItem(item, index)
            ) : (
              <div style={{ width: '55%' }} />
            )}
            {index % 2 === 1 ? (
              <div style={{ width: '55%' }} />
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
