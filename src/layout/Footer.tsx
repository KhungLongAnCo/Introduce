import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  color: ${({ theme }) => theme.text};
  padding: 10px;
  margin-top: 100px;
  /* background: ${({ theme }) => theme.header}; */
  .about {
    color: ${({ theme }) => theme.text};
  }
`;

const Footer = () => {
  return (
    <ContactWrapper>
      <h1 className="about">
        Gmail: <a href="mailto: luan1982000@gmail.com">luan1982000@gmail.com</a>
        <br />
        Github:{' '}
        <a href="https://github.com/KhungLongAnCo">
          https://github.com/KhungLongAnCo
        </a>
      </h1>
    </ContactWrapper>
  );
};

export default Footer;
