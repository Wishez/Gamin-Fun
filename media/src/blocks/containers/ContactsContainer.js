import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserPanelContainer from './UserPanelContainer';
import Contacts from './../components/Contacts';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ContactsContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired
	}

	componentDidMount() {
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
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
