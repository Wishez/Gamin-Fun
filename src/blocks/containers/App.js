import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default class App extends Component {
	componentDidMount() {
		
	}

  render() {
    const site = 'minecraft';
    return (
    	<div>
      	<Header site={site} />
      	<Main />	
      	<Footer site={site} />
      </div>
    );
  }
}