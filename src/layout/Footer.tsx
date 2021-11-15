import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  color: ${({ theme }) => theme.text};
  padding: 10px;
  background: #cbd4d4;
  display: flex;
  justify-content: space-between;
  text-align: center;
  .about {
    color: ${({ theme }) => theme.text};
    .wrap-info {
      @media (max-width: 767.98px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .label {
        margin-right: 1rem;
      }
    }

    img {
      width: 20px;
      margin-right: 10px;
    }
    a {
      word-break: break-all;
      color: ${({ theme }) => theme.text};
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <ContactWrapper>
      <h1>Good bye</h1>
      {/* <h1 className="about">
        <div className="wrap-info">
          <span className="label">
            <img
              src="https://image.flaticon.com/icons/png/512/281/281769.png"
              alt="email"
            />
            Gmail:
          </span>
          <a href="mailto: luan1982000@gmail.com">luan1982000@gmail.com</a>
        </div>
        <div className="wrap-info">
          <span className="label">
            <img
              src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"
              alt="github"
            />
            Github:
          </span>
          <a href="https://github.com/KhungLongAnCo">
            https://github.com/KhungLongAnCo
          </a>
        </div>
        <div className="wrap-info">
          <span className="label">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png"
              alt="github"
            />
            Facebook:{' '}
          </span>
          <a href="https://www.facebook.com/luan.nguyenvanluan.393/">
            https://www.facebook.com/luan.nguyenvanluan.393/
          </a>
        </div>
      </h1> */}
    </ContactWrapper>
  );
};

export default Footer;
