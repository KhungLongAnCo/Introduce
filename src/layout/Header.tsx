import React, { FC, useEffect, useState } from 'react';
import Button from 'components/ui/button/Button';
import styled, { keyframes } from 'styled-components';
import { PageMode } from 'constants/common';
import images from 'assets/images/index';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import UpOutlined from '@ant-design/icons/UpOutlined';
import { Link, scrollSpy } from 'react-scroll';
import { useScrollTracking } from 'hooks/useMenu';
import cx from 'classnames';
import CatImg from 'assets/images/common/cat_cute.png';

const Menu = [
  {
    name: 'Home',
    to: 'home',
  },
  {
    name: 'About',
    to: 'about',
  },
  {
    name: 'Skills',
    to: 'skill',
  },
  {
    name: 'Career',
    to: 'career',
  },
  {
    name: 'Projects',
    to: 'projects',
  },
];

const CustomHeader = styled.div<{ active: boolean; mobile: boolean }>`
  position: fixed;
  padding: 10px;
  background: ${({ theme, active }) => (active ? theme.header : 'transparent')};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  top: 0;
  z-index: ${({ active }) => (active ? 100 : 1)};
  justify-content: space-between;
  box-shadow: ${({ active }) =>
    active
      ? `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`
      : 'none'};
  overflow-x: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: ${({ mobile }) => (!mobile ? '0px' : '315px')};
    padding: ${({ mobile }) => (!mobile ? '0px' : '10px')};
    transition: ease 0.5s all;
    background: ${({ theme }) => theme.header};
    overflow: hidden;
  }
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
    white-space: nowrap;
  }
`;

const WrapMenu = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 60px;
    padding-right: 0px;
  }
  .close-menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      width: 40px;
      position: absolute;
      transition: ease 1s all;
      bottom: -9px;
      left: 96px;
      cursor: pointer;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  li {
    display: block;
    padding: 10px 20px;
    font-size: 22px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    text-shadow: 3px 3px 20px gray, -2px 1px 30px gray;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .active {
    color: #1855b8;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const CustomButton = styled.div`
  display: flex;
  position: fixed;
  right: 10px;
  z-index: 120;
  top: 10px;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  .icon {
    transition: all 0.3s ease;
    width: 50px;
    animation: ${rotate} 3s linear infinite;
  }
  .hide {
    display: none;
  }
`;
const MenuMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    left: 10px;
    cursor: pointer;
    top: 10px;
    color: ${({ theme }) => theme.text};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: ${({ theme }) => theme.body};
    z-index: 10;
    svg {
      width: 50px;
      height: 40px;
    }
  }
`;

const CatCute = styled.img<{ active: boolean }>`
  position: fixed;
  right: 0;
  bottom: 32vh;
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')};
  transition: ease 0.3s all;
`;

const { MoonIcon, SunIcon } = images;
interface Props {
  changePageMode: () => void;
  theme: string;
}
const Header: FC<Props> = ({ changePageMode, theme }) => {
  const [menuMobile, openMenuMobile] = useState(false);
  const position = useScrollTracking();
  useEffect(() => {
    scrollSpy.update();
  });
  useEffect(() => {
    const currentTime = new Date();
    const currentOur = currentTime.getHours();
    if (currentOur < 6 || currentOur > 18) {
      changePageMode();
    }
  }, []);
  return (
    <div>
      <CustomHeader active={position > 90} mobile={menuMobile}>
        <WrapAvatar>
          <img src={images?.avatar} alt="avatar" />
          <div className="name">Luân Luân</div>
        </WrapAvatar>
        <WrapMenu>
          {Menu.map((menu) => (
            <li key={menu.name}>
              <Link
                activeClass="active"
                spy={true}
                to={menu.to}
                offset={-50}
                duration={500}
                smooth={true}
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <UpOutlined
            className="close-menu"
            onClick={() => openMenuMobile(false)}
          />
        </WrapMenu>
        <CustomButton onClick={changePageMode}>
          <MoonIcon
            className={cx('icon', { hide: theme === PageMode.Light })}
          />
          <SunIcon className={cx('icon', { hide: theme === PageMode.Dark })} />
        </CustomButton>
      </CustomHeader>
      {!menuMobile && (
        <MenuMobile onClick={() => openMenuMobile(true)}>
          <MenuOutlined />
        </MenuMobile>
      )}
      <CatCute src={CatImg} alt="CatImg" active={position > 330} />
    </div>
  );
};

export default Header;
// test 1
// test 2
