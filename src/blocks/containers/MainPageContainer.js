import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MainPage from './../components/MainPage';


export default class MainPageContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		changeSite: PropTypes.func.isRequired
	}
	
	render() {
		return(
			<MainPage {...this.props} />
		);
	}
}