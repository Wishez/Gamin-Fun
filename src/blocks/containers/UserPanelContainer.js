import React, {Component} from 'react';
import UserPanel from './../components/UserPanel';
import PropTypes from 'prop-types';

export default class UserPanelContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired
	}
	
	showStatus = (amountPeople, totalPeople) => (
		amountPeople / totalPeople * 100 
	)
	submitLogInForm = (values, dispatch) => {
		console.log(values);
	}
	render() {
		return (
			<UserPanel {...this.props}
				totalPeople='40' 
				amountPeople='20' 
				showStatus={this.showStatus}
				submitLogInForm={this.submitLogInForm} />
		);
	}
}