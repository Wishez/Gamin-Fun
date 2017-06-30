import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

// Состояние берётся из redux состояния
export default class App extends Component {
  state = {
    isLogged: false,
    site: 'minecraft',
    login: 'admin',
    password: 'demonstration'
  }

	componentDidMount() {
		
	}

  submitLogInForm = (values, dispatch) => {
    console.log(values, 'values'); 
    const { login, password } = this.state;
    if (login === values.login &&
      password === values.password) {
      this.setState({
        isLogged: true
      });
    }
    console.log(this.state.isLogged);
  }

  logOut = () => {
    this.setState({
      isLogged: false
    });
    console.log(this.state.isLogged);
  }

  changeSite = (site) => {
    this.setState({
      site: site
    });
    console.log(this.state.site);
  }

  render() {
    const { isLogged, site } = this.state;
    return (
    	<div>
      	<Header site={site} 
          changeSite={this.changeSite}/>
      	<Main site={site} 
          submitLogInForm={this.submitLogInForm}
          isLogged={isLogged}
          logOut={this.logOut} />	
      	<Footer site={site} />
      </div>
    );
  }
}