import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ContentWrapperContainer from './ContentWrapperContainer';
import ForgotPassword from './../components/ForgotPassword';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';

class ForgotPasswordContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired,
		location: PropTypes.object.isRequired
	}
	componentDidMount() {
		const { location } = this.props;
        changeHeightAwesomeBorder('remember_password', location.pathname);
    }

    componentDidUpdate() {
    	const { location } = this.props;
        changeHeightAwesomeBorder('remember_password', location.pathname);
    }
	
	submitForgotPasswordForm = (values, dispatch) => {
		console.log(values)
	}

	render() {
		return(
			<ContentWrapperContainer>
				<ForgotPassword {...this.props}
					submitForgotPasswordForm={this.submitForgotPasswordForm}
				/>
			</ContentWrapperContainer>
		);
	}
}

export default withRouter(ForgotPasswordContainer);