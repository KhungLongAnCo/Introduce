import React, { FC } from 'react';
import Button from 'components/ui/button/Button';
import styled from 'styled-components';
import images from 'assets/images/index';
import { useScrollTracking } from 'hooks/useMenu';

const CustomHeader = styled.div<{ active: boolean }>`
  padding: 10px;
  background: ${({ theme, active }) => (active ? theme.header : 'transparent')};
  display: flex;
  flex-direction: row;
  width: 100%;
  position: fixed;
  height: 90px;
  transition: ease-in-out 0.3s all;
  top: 0;
  z-index: ${({ active }) => (active ? 100 : 1)};
  justify-content: space-between;
  box-shadow: ${({ active }) =>
    active
      ? `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`
      : 'none'};
`;

const WrapAvatar = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  .name {
    margin-left: 20px;
    font-weight: bold;
    color: #fff;
    font-size: 22px;
  }
`;

const WrapMenu = styled.ul`
  list-style: none;
  display: flex;
  li {
    display: block;
    padding: 10px 20px;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
  }
`;

interface Props {
  changePageMode: () => void;
}
const Header: FC<Props> = ({ changePageMode }) => {
  const position = useScrollTracking();

  return (
    <CustomHeader active={position > 90}>
      <WrapAvatar>
        <img src="" alt="avatar" />
        {/* <div className="name">Luân Luân</div> */}
      </WrapAvatar>
      <WrapMenu>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
        <li>Intro</li>
      </WrapMenu>
      <Button onClick={changePageMode}>Change Mode</Button>
    </CustomHeader>
  );
};

export default Header;
