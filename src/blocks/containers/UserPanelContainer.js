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

	showStatus = (amountPeople, totalPeople) => (
		amountPeople / totalPeople * 100 
	)
	submitLogInForm = (values, dispatch) => {
		console.log(values, 'values'); 
		
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
				isLogged={true}
				user={user}/>
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