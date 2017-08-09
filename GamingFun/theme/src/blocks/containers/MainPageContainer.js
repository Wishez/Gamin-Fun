import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import MainPage from './../components/MainPage';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sites } from './../constants/actionTypes.js';

class MainPageContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		changeSite: PropTypes.func.isRequired,
		dispatch: PropTypes.func.isRequired
	}
	componentDidMount() {
		this.props.changeSite(sites.main);
	}
	componentDidUpdate() {

		this.props.changeSite(sites.main);
	}
	
	render() {
		return(
			<MainPage {...this.props} />
		);
	}
}

const mapStateToProps = state => {
	const {
		selectedSite
	} = state;

	return {
		site: selectedSite
	}
};

export default withRouter(connect(mapStateToProps)(MainPageContainer));