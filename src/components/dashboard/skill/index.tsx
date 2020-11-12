import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Element } from 'react-scroll';
import { Container, Title } from 'components/ui/common/index';
import images from 'assets/images/index';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ShowSkill = keyframes`
 0% { left: 0px;opacity:0;}
 100% { left: auto; opacity:1;}
 `;
const SkillItem = styled.div`
  height: 120px;
  width: 120px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  border: ${({ theme }) => `solid 3px ${theme.buttonColor}`};
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  animation: ${ShowSkill};
  animation-duration: 4s;
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
  .description {
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
  }
`;

const ListSkills = [
  {
    name: 'HTML',
    icon: images.reactIcon,
  },
  {
    name: 'CSS',
    icon: images.cssIcon,
  },
  {
    name: 'JAVASCRIPT',
    icon: images.jsIcon,
  },
  {
    name: 'REACT JS',
    icon: images.reactIcon,
  },
  {
    name: 'NEXT JS',
    icon: images.nextJsIcon,
  },
  {
    name: 'MySQL',
    icon: images.sqlIcon,
  },
];

const Skills = () => {
  return (
    <Container data-aos="fade-left">
      <Element name="skill" id="skill" />
      <Title>*My Skills</Title>
      <Wrapper>
        {ListSkills.map((skill, index) => (
          <SkillItem key={String(index)}>
            <img src={skill.icon} alt="reactIcon" />
            <div className="description">{skill.name}</div>
          </SkillItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Skills;
