import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>What’s Next?</PText>
          <h3 className="contactBanner__heading">Get In Touch</h3>
          <PText>
            my inbox is always open. Whether you have a question or just want to
            say hi, Contact me now!
          </PText>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
