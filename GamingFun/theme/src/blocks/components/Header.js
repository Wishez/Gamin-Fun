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
      {site === 'minecraft' ?
        <Container>
          <NavBetweenProjectsContainer />
          <NavContainer site={site} />
          <Logo site={site} />
          <FiguresList figuresNames={['steve_with_bow', 'chicken']} />
        </Container>
         : ''}
      {site === 'samp' ?
        <Container>
          <Logo site={site} />
          <NavBetweenProjectsContainer />
          <NavContainer site={site} />
          <FiguresList figuresNames={['car', 'helicopter', 'man']} />
        </Container>
        : ''}
  </header>
);

export default Header;