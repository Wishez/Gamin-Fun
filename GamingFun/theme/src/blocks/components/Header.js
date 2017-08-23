import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Logo from './Logo';
import NavContainer from './../containers/NavContainer.js'; 
import FiguresList from './FiguresList';

const Header = ({
	site,
  ...rest
}) => (
  <header className={`header header--${site}`}>
      {site === 'minecraft' ?
        <Container>
          <NavContainer site={site} />
          <Logo site={site} />
          <FiguresList figuresNames={['steve_with_bow', 'chicken']} />
        </Container>
         : ''}
  </header>
);

export default Header;