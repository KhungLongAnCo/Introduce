import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { Container, Title } from 'components/ui/common/index';

const ContactWrapper = styled.section`
  color: ${({ theme }) => theme.text};

  .about {
    color: ${({ theme }) => theme.text};
  }
`;

const ContactSection = () => {
  return (
    <Element name="contact" id="contact">
      <Container data-aos="fade-left">
        <ContactWrapper>
          <Title>*Contact</Title>

          <h1 className="about">
            Gmail:{' '}
            <a href="mailto: luan1982000@gmail.com">luan1982000@gmail.com</a>
            <br />
            Github:{' '}
            <a href="https://github.com/KhungLongAnCo">
              https://github.com/KhungLongAnCo
            </a>
          </h1>
        </ContactWrapper>
      </Container>
    </Element>
  );
};

export default ContactSection;
