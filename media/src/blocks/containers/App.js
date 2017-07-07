import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { SubmitionError } from 'react-redux';
// import { text } from './../constants/actionTypes.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSite } from './../actions/selectedSiteActions.js';
import { withRouter } from 'react-router-dom';
import { testSuccesRegister } from './../tests/accountTests.js';
import { tryLogin, logOut } from './../actions/accountActions.js'

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

	componentDidMount() {
    // Tests
    testSuccesRegister();
	}

  componentDidUpdate() {

  }

  changeSite = site => {
    const { dispatch } = this.props;

    dispatch(selectSite(site));
    // Сделай функцию, которая меняет даныне при смене сайта
    dispatch(logOut());
  }

  render() {
    const { isLogged, site } = this.props;
    const isSite = site && site !== 'main';
    return (
    	<div>
        {isSite ?
        	<Header site={site} 
            changeSite={this.changeSite}/> : ''}
        {isSite ? <div id='awesomeBorder'
             className='awesomeBorder'></div> : ''}

      	<Main site={site} 
          isLogged={isLogged}
          changeSite={this.changeSite}/>	

      	{isSite ? <Footer site={site} /> : ''}
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
  console.log('current the state in App\n', state);

  return {
    isLogged,
    site : selectedSite
  };
}

export default withRouter(connect(mapStateToProps)(App));