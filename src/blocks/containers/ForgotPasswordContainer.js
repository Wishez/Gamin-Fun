import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import UserPanelContainer from './UserPanelContainer';
import ForgotPassword from './../components/ForgotPassword';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';

export default class ForgotPasswordContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired
	}
	componentDidMount() {
	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       changeHeightAwesomeBorder();
    }
	
	submitForgotPasswordForm = (values, dispatch) => {
		console.log(values)
	}

	render() {
		return(
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<ForgotPassword {...this.props}
						submitForgotPasswordForm={this.submitForgotPasswordForm}
					/>
				</Container>
			</div>
		);
	}
}