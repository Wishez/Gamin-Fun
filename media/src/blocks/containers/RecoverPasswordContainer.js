import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserPanelContainer from './UserPanelContainer';
import RecoverPassword from './../components/RecoverPassword';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryRecoverPassword} from './../actions/accountActions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';

class RecoverPasswordContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		recoverPasswordMessage: PropTypes.string.isRequired,
		isChanging: PropTypes.bool.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		changeSiteIfNeeded(this.props);
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
        changeSiteIfNeeded(this.props);
        changeHeightAwesomeBorder();
    }
	
	submitRecoverPasswordForm = (values, dispatch) => {
		const { site } = this.props; 
		dispatch(tryRecoverPassword(site, values));
	}

	render() {
		return(
			<div className='contentWrapper'>
				<UserPanelContainer/>
				<Container>
					<RecoverPassword {...this.props}
						submitRecoverPasswordForm={this.submitRecoverPasswordForm}
					/>
				</Container>
			</div>
		);
	}
}
const mapStateToProps = state => {
	const {
		selectedSite,
		dataBySite
	} = state;

	const {
		recoverPasswordMessage,
		isChanging
	} = dataBySite[selectedSite];

	return {
		site: selectedSite,
		recoverPasswordMessage,
		isChanging
	}
};

export default withRouter(connect(mapStateToProps)(RecoverPasswordContainer));