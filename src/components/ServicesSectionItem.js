import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    display: inline-block;
    transform: translateZ(0);
    box-shadow: 0 0 1px transparent;
    max-height: 90px !important;
    max-width: 80px !important;
    padding: 0.25rem !important;
    background-color: #100f0f !important;
    border: 1px solid #100f0f !important;
    border-radius: 0.25rem !important;
    transition: all 0.2s ease-in-out !important;
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
  .contain {
    box-sizing: border-box;
    margin-bottom: 10px;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    /* display: flex; */
    width: 33%;
    display: inline-table;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'skill',
}) {
  return (
    <Grid item className="contain" xs={3}>
      <ItemStyles className="servicesItem">
        <img className="servicesItem__icon" src={icon} alt="Img" />
        <div className="servicesItem__title">{title}</div>
      </ItemStyles>
    </Grid>
  );
}
