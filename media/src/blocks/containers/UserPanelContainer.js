import React, {Component} from 'react';
import UserPanel from './../components/UserPanel';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLogin, logOut, tryChangeUserAvatar} from './../actions/accountActions.js'
// tryChangeUserAvatar
import { initAccountState } from './../reducers/account.js';
import { cookiesHandler } from './../constants/pureFunctions.js';


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
  		const data = cookiesHandler.getUsernameAndPasswordFromCookies(site);

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
	
		dispatch(tryLogin(site, values));
	}

	logOut = () => {
		const { dispatch, site } = this.props;

		dispatch(logOut(site));
		
	}

	submitChangeAvatar = (avatars) => {
		const { username, site, dispatch, userData} = this.props;	

		const data = {
			"site": site,
			"username": username,
			"oldAvatar": userData.avatar,
			"newAvatar": avatars[0]
		};

		dispatch(tryChangeUserAvatar(site, data));
	};

	render() {
		return (
			<UserPanel {...this.props}
				submitLogInForm={this.submitLogInForm}
				submitChangeAvatar={this.submitChangeAvatar}
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