import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import FooterContacts from './../components/FooterContacts';
import FiguresList from './../components/FiguresList';

const Footer = ({site}) => (
  <footer className={'footer footer--' + site}> 
    <Container>
      <FooterContacts site={site} />
      {site === 'minecraft' ?
          <FiguresList figuresNames={['steve_with_bow', 'chicken']} /> : ''}
        {site === 'samp' ?
          <FiguresList figuresNames={['woman', 'nigga']} /> : ''}
    </Container>
  </footer>
);

export default Footer;