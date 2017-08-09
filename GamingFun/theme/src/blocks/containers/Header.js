import React, { Component } from 'react';
import Logo from './../components/Logo';
import NavContainer from './NavContainer.js'; 
import NavBetweenProjectsContainer from './NavBetweenProjectsContainer'; 
import FiguresList from './../components/FiguresList';
import { Container } from 'semantic-ui-react';

const Header = ({
	site,
  ...rest
}) => (
  <header className={`header header--${site}`}>
      <Container>
        <Logo site={site} />
        <NavBetweenProjectsContainer {...rest}
          site={site} />
        <NavContainer site={site} />
        {site === 'minecraft' ?
          <FiguresList figuresNames={['steve', 'squid']} /> : ''}
        {site === 'samp' ?
          <FiguresList figuresNames={['car', 'helicopter', 'man']} /> : ''}
      </Container>
  </header>
);

export default Header;