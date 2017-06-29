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
		const { site } = this.props;
		const user = {
			name: 'Джон Галт',
			avatar: '../img/cat.png',
			balance: 30,
			status: 'Не активированно'
		};
		return (
			<UserPanel site={site}
				totalPeople='40' 
				amountPeople='20' 
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
		
	}
};

export default connect(mapStateToProps)(UserPanelContainer);