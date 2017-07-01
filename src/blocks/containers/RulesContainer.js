import React, {Component} from 'react';
import Rules from './../components/Rules';
import UserPanelContainer from './UserPanelContainer';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';

export default class RulesContainer extends Component {

	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired
		// newsList: PropTypes.array.isRequired
	}

	componentDidMount() {
        console.log('Did mount')
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       console.log('Did update')
       changeHeightAwesomeBorder();
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