import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ServicesSectionItem from '../components/ServicesSectionItem';
import Html from '../assets/images/html.jpg';
import Css from '../assets/images/css.png';
import Bootstrap from '../assets/images/bootstrap.png';
import javascript from '../assets/images/javascript.png';
import jquery from '../assets/images/jquery.png';
import typescript from '../assets/images/ts.png';
import react from '../assets/images/react.png';
import redux from '../assets/images/redux.jpg';
import node from '../assets/images/node.png';
import expressjs from '../assets/images/download.png';
import mongodb from '../assets/images/mongodb.png';
import gitlab from '../assets/images/gitlab.png';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
    width: 100%;
    margin: auto;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function Skills() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What I love to do!" heading="MY SKILLS" />
        <div className="services__allItems">
          <ServicesSectionItem icon={Html} title="HTML 5" />
          <ServicesSectionItem icon={Css} title="CSS 3" />
          <ServicesSectionItem icon={Bootstrap} title="Bootstrap" />
          <ServicesSectionItem icon={javascript} title="JavaScript" />
          <ServicesSectionItem icon={jquery} title="JQuery" />
          <ServicesSectionItem icon={typescript} title="TypeScript" />
          <ServicesSectionItem icon={react} title="ReactJS" />
          <ServicesSectionItem icon={redux} title="Redux" />
          <ServicesSectionItem icon={node} title="NodeJS" />
          <ServicesSectionItem icon={expressjs} title="ExpressJS" />
          <ServicesSectionItem icon={mongodb} title="MongoDB" />
          <ServicesSectionItem icon={gitlab} title="Gitlab" />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
