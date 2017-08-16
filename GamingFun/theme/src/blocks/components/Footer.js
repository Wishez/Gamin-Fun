import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import FooterContacts from './FooterContacts';
import FiguresList from './FiguresList';

const Footer = ({site}) => (
  <footer className={'footer footer--' + site}> 
    <Container>
      <FooterContacts site={site} />
   	  {site === 'samp' ?
        <FiguresList figuresNames={['woman', 'nigga']} /> : ''}
    </Container>
  </footer>
);

export default Footer;