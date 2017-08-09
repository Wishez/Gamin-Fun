import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserPanelContainer from './UserPanelContainer';
import Contacts from './../components/Contacts';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';
import { selectNavigationItem } from './../actions/navigationActions.js';

class ContactsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(selectNavigationItem('thirdNavItem'));
	    changeSiteIfNeeded(this.props);
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
        changeSiteIfNeeded(this.props);
        changeHeightAwesomeBorder();
    }
	
	render() {
		return(
			<div className='contentWrapper'>
				<UserPanelContainer />
				<Container>
					<Contacts {...this.props} />
				</Container>
			</div>
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
