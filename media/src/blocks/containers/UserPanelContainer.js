import React, {Component} from 'react';
import UserPanel from './../components/UserPanel';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLogin, logOut } from './../actions/accountActions.js'
import { initAccountState } from './../reducers/account.js';
import { cookiesHandler } from './../constants/pureFunctions.js'
// username, password, isLogged
class UserPanelContainer extends Component {

	static PropTypes = {
	    site: PropTypes.string.isRequired,
	    isLogged: PropTypes.bool.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    username: PropTypes.string.isRequired,
	    password: PropTypes.string.isRequired,
	    message: PropTypes.string.isRequired,
	    userData: PropTypes.object.isRequred,
	    isLogining: PropTypes.bool.isRequired
  	}


  	componentDidMount() {
  		this.loginInIfMay();
  	}

  	componentDidUpdate() {
  		this.loginInIfMay();
  	}

  	loginInIfMay = () => {
  		const { dispatch, isLogged, site } = this.props;
  		// Функция, возвращающая кэшированные данные пользователя.
  		const data = {
  			...cookiesHandler.getUsernameAndPasswordFromCookies(site),
  			site: site
  		};

  		// Проверка на уже залогинивщегося в свой аккаунт пользователя
  		// и логинился ли он хоть раз на сайте.
  		if (!isLogged && 
  			(data.username && data.password)) {
	  		dispatch(tryLogin(site, data));	
  		}
  	}
	showStatus = (amountPeople, totalPeople) => (
		amountPeople / totalPeople * 100 
	)

	submitLogInForm = (values, dispatch) => {

		const { site } = this.props; 	
		values.site = site;
	
		dispatch(tryLogin(site, values));
	}

	logOut = () => {
		const { dispatch, site } = this.props;

		dispatch(logOut(site));
		
	}

	render() {

		return (
			<UserPanel {...this.props}
				submitLogInForm={this.submitLogInForm}
				logOut={this.logOut}
				totalPeople='40' 
				amountPeople={
					Math.round(Math.random() * 40)
				} 
				showStatus={this.showStatus}
				/>
		);
	}
}


const mapStateToProps = state => {
  const { 
    selectedSite,
    dataBySite
  } = state;

  const {
    isLogged,
    username,
    password,
    message,
    userData,
	isLogining
  } = dataBySite[selectedSite];


  return {
    isLogged,
    site : selectedSite,
    username,
    password,
    message,
    userData,
    isLogining
  };
}

export default withRouter(connect(mapStateToProps)(UserPanelContainer));