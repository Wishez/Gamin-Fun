import React, {Component} from 'react';
import {Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';


export default class NewsContainer extends Component {

	render() {
		return (
			<Container>
				<UserPanelContainer />
			</Container>
		)
	}
}