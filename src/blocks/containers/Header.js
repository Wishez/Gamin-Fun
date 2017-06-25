import React, { Component } from 'react';
import Logo from './../components/Logo';
import NavContainer from './NavContainer.js'; 
 
const Header = () => (
  <header className='header'>
      <div className='ui container'>
        <Logo />
        <NavContainer />
      </div>
  </header>
);

export default Header;