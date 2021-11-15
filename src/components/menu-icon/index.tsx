import React, { FC, ReactElement } from 'react';
import cx from 'classnames';
import styled from 'styled-components';

const MenuIconWrap = styled.div`
  display: inline-block;
  cursor: pointer;
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #9e9e9e;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change {
    .bar1 {
      // -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      // -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
`;

const MenuIcon: FC<any> = ({ active, className }) => {
  return (
    <MenuIconWrap className={cx('wrap', className, { change: active })}>
      <div className={'bar1'} />
      <div className={'bar2'} />
      <div className={'bar3'} />
    </MenuIconWrap>
  );
};
export default MenuIcon;
