import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  position: relative;
  max-width: 1200px;
  overflow-x: hidden;
  /* position: static; */
  @media screen and (max-width: 768px) {
    padding: 0px 10px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-top: 70px;
  font-size: 36px;
  font-weight: bold;
`;
