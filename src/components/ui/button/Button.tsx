import React, { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<any> {
  children: string | ReactElement;
}
const CustomButton = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  outline: none;
  padding: 10px 5px;
  border-radius: 3px;
  font-weight: 500;
  height: 50px;
  :hover {
    cursor: pointer;
  }
`;
const Button: FC<Props> = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
