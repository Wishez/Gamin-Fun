import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserPanelContainer from './UserPanelContainer';
import Contacts from './../components/Contacts';

export default class ContactsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired
	}

	render() {
		return(
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<Contacts {...this.props} />
				</Container>
			</div>
		);
	}
}