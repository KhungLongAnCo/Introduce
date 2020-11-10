import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Title } from 'components/ui/common/index';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ShowSkill = keyframes`
 0% { left: 0px;opacity:0;}
 100% { left: auto; opacity:1;}
 `;
const SkillItem = styled.div`
  height: 100px;
  width: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  border: ${({ theme }) => `solid 3px ${theme.text}`};
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  animation: ${ShowSkill};
  animation-duration: 4s;
`;

const Skills = () => {
  return (
    <Container data-aos="fade-left">
      <Title>*My Skills</Title>
      <Wrapper>
        <SkillItem>test</SkillItem>
        <SkillItem>test</SkillItem>
        <SkillItem>test</SkillItem>
        <SkillItem>test</SkillItem>
        <SkillItem>test</SkillItem>
      </Wrapper>
    </Container>
  );
};

export default Skills;
