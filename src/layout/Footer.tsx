import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  color: ${({ theme }) => theme.text};
  padding: 10px;
  margin-top: 100px;
  background: #cbd4d4;
  /* background: ${({ theme }) => theme.header}; */
  .about {
    color: ${({ theme }) => theme.text};
    img {
      width: 20px;
      margin-right: 10px;
    }
    a {
      color: ${({ theme }) => theme.text};
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <ContactWrapper>
      <h1 className="about">
        <img
          src="https://image.flaticon.com/icons/png/512/281/281769.png"
          alt="email"
        />
        Gmail: <a href="mailto: luan1982000@gmail.com">luan1982000@gmail.com</a>
        <br />
        <img
          src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
          alt="github"
        />
        Github:{' '}
        <a href="https://github.com/KhungLongAnCo">
          https://github.com/KhungLongAnCo
        </a>
        <br />
        <img
          src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png"
          alt="github"
        />
        Facebook:{' '}
        <a href="https://www.facebook.com/luan.nguyenvanluan.393/">
          https://www.facebook.com/luan.nguyenvanluan.393/
        </a>
      </h1>
    </ContactWrapper>
  );
};

export default Footer;
