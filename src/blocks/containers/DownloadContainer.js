import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserPanelContainer from './UserPanelContainer';
import Download from './../components/Download';
export default class DownloadContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired
	}

	render() {
		return(
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<Download {...this.props} />
				</Container>
			</div>
		);
	}
}