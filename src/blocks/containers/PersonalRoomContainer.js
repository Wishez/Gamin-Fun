import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import PersonalRoom from './../components/PersonalRoom';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';

export default class PersonalRoomContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired
		// newsList: PropTypes.array.isRequired
		// message: PropTypes.string.isRequired
		// registered: PropTypes.bool.isRequired
	}
	componentDidMount() {
   	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       changeHeightAwesomeBorder();
    }
	submitChangePassword = (values, dispatch) => {
		console.log(values);
	}

	submitReplanishBalance = (values, dispatch) => {
		console.log(values);
	}

	submitSubscribtionForm = (values, dispatch) => {
		console.log(values);	
	}

	submitChangeEmailForm = (values, dispatch) => {
		console.log(values);	
	}

	render() {
		return (
			<div className='contentWrapper'>
				<UserPanelContainer {...this.props} />
				<Container>
					<PersonalRoom {...this.props}
						submitChangePassword={this.submitChangePassword} 
						submitReplanishBalance={this.submitReplanishBalance} 
						submitSubscribtionForm={this.submitSubscribtionForm}
						submitChangeEmailForm={this.submitChangeEmailForm}
					/>
				</Container>
			</div>
		);
	}
}