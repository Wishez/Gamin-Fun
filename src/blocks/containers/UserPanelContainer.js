import React, {Component} from 'react';
import UserPanel from './../components/UserPanel';

export default class UserPanelContainer extends Component {
	showStatus = (amountPeople, totalPeople) => (
		totalPeople / amountPeople * 100
	)
	render() {
		return (
			<UserPanel totalPeople='40' 
				amountPeople='20' 
				site='minecraft'
				showStatus={this.showStatus} />
		);
	}
}