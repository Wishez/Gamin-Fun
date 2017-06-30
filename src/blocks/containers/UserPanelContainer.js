import React, {Component} from 'react';
import UserPanel from './../components/UserPanel';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class UserPanelContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired
		// login: PropTypes.string.isRequired,
		// password: PropTypes.string.isRequired,
		// isLogged: PropTypes.bool.isRequired,
		// user: PropTypes.object.isRequired
	}
	state = {
		login: 'admin',
		password: 'demonstration',
		isLogged: false
	};

	showStatus = (amountPeople, totalPeople) => (
		amountPeople / totalPeople * 100 
	)
	submitLogInForm = (values, dispatch) => {
		console.log(values, 'values'); 
		const { login, password } = this.state;
		if (login === values.login &&
			password === values.password) {
			this.setState({
				isLogged: true
			});
		}
	}

	logOut = () => {
		this.setState({
			isLogged: false
		});
	}
	render() {
		const user = {
			name: 'Джон Галт',
			avatar: '../img/cat.png',
			balance: 30,
			status: 'Не активированно'
		};
		console.log(Math.round(Math.random() * 40));
		return (
			<UserPanel {...this.props}
				totalPeople='40' 
				amountPeople={
					Math.round(Math.random() * 40)
				} 
				showStatus={this.showStatus}
				submitLogInForm={this.submitLogInForm} 
				isLogged={this.state.isLogged}
				user={user}
				logOut={this.logOut}/>
		);
	}
}


const mapStateToProps = state => {
	console.log(state);
	return {
		site: 'minecraft'
	}
};

export default withRouter(connect(mapStateToProps)(UserPanelContainer));