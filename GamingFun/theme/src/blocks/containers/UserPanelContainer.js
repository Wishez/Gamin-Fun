import React, {Component} from 'react';
import UserPanel from './../components/UserPanel';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryLogin, logOut, tryChangeUserAvatar} from './../actions/accountActions.js'
import { initAccountState } from './../reducers/account.js';
import { cookiesHandler } from './../constants/pureFunctions.js';
import { tryGetServerStatus } from './../actions/serverStatusActions.js';

class UserPanelContainer extends Component {

	static PropTypes = {
	    site: PropTypes.string.isRequired,
	    isLogged: PropTypes.bool.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    username: PropTypes.string.isRequired,
	    password: PropTypes.string.isRequired,
	    message: PropTypes.string.isRequired,
	    userData: PropTypes.object.isRequred,
	    isLogining: PropTypes.bool.isRequired,
	    amountPeople: PropTypes.number.isRequired,
		totalPeople: PropTypes.number.isRequired,
		nameServer: PropTypes.string.isRequired,
		onlineStatus: PropTypes.bool.isRequired
  	}

  	static state = {
  		requestStatus: () => {}
  	}
  	componentDidMount() {
  		const { site, dispatch } = this.props;
  		this.loginInIfMay();
  		if (site === 'minecraft') {
  			dispatch(tryGetServerStatus(site));
  			this.readStatus(dispatch, site);
  		}
  	}

  	readStatus = (dispatch, site) => {
  		this.setState({
  			requestStatus: setInterval(() => {
  				dispatch(tryGetServerStatus(site))
  			}, 6000)
  		});
  	}
  	clearRequsetStatus = () => {
  		clearInterval(this.state.requestStatus);
  	}
  	componentDidUpdate() {
  		this.loginInIfMay();


  	}
  	componentWillReceiveProps(nextProps) {
  		const { site, dispatch } = this.props;
  		
  		if (site !== nextProps.site) {
  			if (!!this.state) 
  				this.clearRequsetStatus(this.state.requestStatus);
  	
  			dispatch(tryGetServerStatus(site));
  			if (site === 'minecraft')
  				this.readStatus(dispatch, site);
  		}
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
	isLogining,
	serverData
  } = dataBySite[selectedSite];

  const {
	amountPeople,
	totalPeople,
	nameServer,
	onlineStatus
  } = serverData;

  return {
    isLogged,
    site : selectedSite,
    username,
    password,
    message,
    userData,
    isLogining,
    amountPeople: !!amountPeople ? amountPeople : 0,
	totalPeople: !!totalPeople ? totalPeople : 40,
	nameServer,
	onlineStatus
  };
}

export default withRouter(connect(mapStateToProps)(UserPanelContainer));