import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MainPage from './../components/MainPage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export default class MainPageContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		changeSite: PropTypes.func.isRequired
	}

	componentDidUpdate() {
		this.props.changeSite('main');
	}
	
	render() {
		return(
			<MainPage {...this.props} />
		);
	}
}