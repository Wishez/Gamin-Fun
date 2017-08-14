import React, { Component } from 'react';
import Logo from './Logo';
import NavContainer from './../containers/NavContainer.js'; 
import NavBetweenProjectsContainer from './../containers/NavBetweenProjectsContainer'; 
import FiguresList from './FiguresList';
import { Container } from 'semantic-ui-react';

const Header = ({
	site,
  ...rest
}) => (
  <header className={`header header--${site}`}>
      <Container>
        <Logo site={site} />
        <NavBetweenProjectsContainer />
        <NavContainer site={site} />
        {site === 'minecraft' ?
          <FiguresList figuresNames={['steve', 'squid']} /> : ''}
        {site === 'samp' ?
          <FiguresList figuresNames={['car', 'helicopter', 'man']} /> : ''}
      </Container>
  </header>
);

export default Header;