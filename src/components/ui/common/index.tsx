import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
  max-width: 1200px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-top: 70px;
  font-size: 36px;
  font-weight: bold;
`;
