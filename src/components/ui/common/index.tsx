import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  position: relative;
  padding: 5rem 10px;
  max-width: 1200px;
  overflow-x: hidden;
  /* position: static; */
  @media screen and (max-width: 768px) {
    padding: 3rem 10px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 36px;
  font-weight: bold;
  text-decoration: underline;
  @media (max-width: 767.98px) {
    text-align: center;
  }
`;
