import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Rules from './../components/Rules';
import ContentWrapperContainer from './ContentWrapperContainer';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { selectNavigationItem } from './../actions/navigationActions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';

class RulesContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		location: PropTypes.object.isRequired
	}

	componentDidMount() {
		const { dispatch, location } = this.props;
		dispatch(selectNavigationItem('fourthNavItem'));
		// В измениние стилей сайта при первой загрузки сайта,
		// проверяется выбранный сайт.
		changeSiteIfNeeded(this.props); 
	    changeHeightAwesomeBorder('/rules', location.pathname);
    }

    componentDidUpdate() {
	   const { location } = this.props;
       changeHeightAwesomeBorder('/rules', location.pathname);
    }
	render() {
		return (
			<ContentWrapperContainer>
				<Rules />
			</ContentWrapperContainer>
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

export default withRouter(connect(mapStateToProps)(RulesContainer));