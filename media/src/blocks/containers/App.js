import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { SubmitionError } from 'react-redux';
import { text } from './../constants/actionTypes.js';

// Состояние берётся из redux состояния
export default class App extends Component {
  state = {
    isLogged: false,
    site: '',
    login: 'admin',
    password: 'demonstration',
    news: [
      {
        id: 1,
        title: 'First Intro',
        text:  text,
        created_at: '23.06.2017, 11:50'
      },
      {
        id: 2,
        title: 'Double Intro',
        text: text,
        created_at: '23.06.2017, 11:50'
      },
      {
        id: 3,
        title: 'Third Intro',
        text:  text,
        created_at: '23.06.2017, 11:50'
      }
    ]
  }

	componentDidMount() {

	}

  componentDidUpdate() {

  }

  submitLogInForm = (values, dispatch) => {
    console.log(values, 'values'); 
    const { login, password } = this.state;
    if (login === values.login &&
      password === values.password) {
      this.setState({
        isLogged: true
      });
    } else {
        throw new SubmitionError({
          __error: 'Неправильный логин или пароль'
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
    const { isLogged, site, news } = this.state;
    return (
    	<div>
        { site ?
        	<Header site={site} 
            changeSite={this.changeSite}/> : ''}
        {site ? <div id='awesomeBorder'
             className='awesomeBorder'></div> : ''}

      	<Main site={site} 
          submitLogInForm={this.submitLogInForm}
          isLogged={isLogged}
          logOut={this.logOut} 
          news={news} 
          changeSite={this.changeSite}/>	

      	{site ? <Footer site={site} /> : ''}
      </div>
    );
  }
}