import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import FooterContacts from './../components/FooterContacts';
import Figure from './../components/Figure';

const Footer = ({site}) => (
  <footer className={'footer footer--' + site}> 
    <Container>
      <FooterContacts site={site} />
      <Figure name='steve_with_bow' />
      <Figure name='chicken' />
    </Container>
  </footer>
);

export default Footer;