import React, { Component } from 'react';
import Logo from './../components/Logo';
import NavContainer from './NavContainer.js'; 
import NavBetweenProjectsContainer from './NavBetweenProjectsContainer'; 
import { Container } from 'semantic-ui-react';

const Header = ({
	site
}) => (
  <header className={'header header--' + site}>
      <Container>
        <Logo site={site} />
        <NavBetweenProjectsContainer site={site} />
        <NavContainer site={site} />
      </Container>
  </header>
);

export default Header;