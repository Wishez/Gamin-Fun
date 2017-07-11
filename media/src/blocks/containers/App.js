import React, { Component } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Main from './../components/Main';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { testSuccesRegister } from './../tests/accountTests.js';
import { tryLogin, logOut } from './../actions/accountActions.js'
import { changeSite } from './../actions/selectedSiteActions.js';

// Состояние берётся из redux состояния
// При загрузки выбранного компонента на сайте,
// устанавливается значение переменной выбранного сайта
// в зависимости от совпадение в url адресе.
class App extends Component {
  static PropTypes = {
    site: PropTypes.string.isRequired,
    isLogged: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  
  changeSite = site => {
    const { dispatch } = this.props;

    dispatch(changeSite(site));
  }

  render() {
    const { isLogged, site } = this.props;
    const isNotMainSite = site && site !== 'main';
    return (
    	<div>
        {isNotMainSite ?
        	<Header site={site} 
            changeSite={this.changeSite}/> : ''}
        {isNotMainSite ? <div id='awesomeBorder'
             className='awesomeBorder'></div> : ''}

      	<Main site={site} 
          isLogged={isLogged}
          changeSite={this.changeSite}/>	

      	{isNotMainSite ? <Footer site={site} /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { 
    selectedSite,
    dataBySite
  } = state;

  const {
    isLogged
  } = dataBySite[selectedSite];

  return {
    isLogged,
    site : selectedSite
  };
}

export default withRouter(connect(mapStateToProps)(App));