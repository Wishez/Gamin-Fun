import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentWrapperContainer from './ContentWrapperContainer';
import Contacts from './../components/Contacts';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';
import { selectNavigationItem } from './../actions/navigationActions.js';

class ContactsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		location: PropTypes.object.isRequired
	}

	componentDidMount() {
		const { dispatch, location } = this.props;
		dispatch(selectNavigationItem('thirdNavItem'));
	    changeSiteIfNeeded(this.props);
	    changeHeightAwesomeBorder('contacts', location.pathname);
    }

    componentDidUpdate() {
    	const { location } = this.props;
        changeHeightAwesomeBorder('contacts', location.pathname);
    	
        changeSiteIfNeeded(this.props);
    }
	
	render() {
		return(
			<ContentWrapperContainer>
				<Contacts {...this.props} />
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

export default withRouter(connect(mapStateToProps)(ContactsContainer));
