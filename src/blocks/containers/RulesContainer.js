import React, {Component} from 'react';
import Rules from './../components/Rules';
import UserPanelContainer from './UserPanelContainer';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
export default class RulesContainer extends Component {

	static PropTypes = {
		site: PropTypes.string.isRequired
		// newsList: PropTypes.array.isRequired
	}
	render() {
		return (
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props}/>
				<Container>
					<Rules />
				</Container>
			</div>
		);
	}
}