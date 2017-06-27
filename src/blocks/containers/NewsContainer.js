import React, {Component} from 'react';
import {Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';

export default class NewsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className='contentWrapper'>
				<Container>
				</Container>
				<UserPanelContainer {...this.props} />
			</div>
		)
	}
}