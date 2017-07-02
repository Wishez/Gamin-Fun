import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import NotFound from './../components/NotFound';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';

export default class PersonalRoomContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired
	}

	componentDidMount() {
   	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       changeHeightAwesomeBorder();
    }

	render() {
		return (
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<NotFound {...this.props} />
				</Container>
			</div>
		);
	}
}