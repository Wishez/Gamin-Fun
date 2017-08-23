import React from 'react';
import { Container } from 'semantic-ui-react';

import FooterContacts from './FooterContacts';
import FiguresList from './FiguresList';

const Footer = ({
	site
}) => (
  <footer className={'footer footer--' + site}> 
    <Container>
      <FooterContacts site={site} />
    </Container>
  </footer>
);

export default Footer;