import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import Register from './../components/Register';


export default class RegisterContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired
		// newsList: PropTypes.array.isRequired
		// message: PropTypes.string.isRequired
		// registered: PropTypes.bool.isRequired
	}
	state = {
		knowRules: false,
		registered: false,
		message: ''
	}
	submitRegisterForm = (values, dispatch) => {
		console.log(values);
		
		const { 
			password,
			repeatedPassword,
			login,
			email
		 } = values;

		if (password !== repeatedPassword) {
			throw new SubmissionError({ 
				repeatedPassword: 'Пароли не совпадают',
				_error: 'Где это будт отображаться?'});
			this.setState({
				message: '',
				registered: false
			});
		} else {
			this.setState({
				registered: true,
				message: 'Вы успешно прошли регистрацию'
			});
		}
	}

	allowRegister = () => {
		this.setState({
			knowRules: !this.state.knowRules
		});
	}
	render() {
		console.log(...this.state);
		return (
			<div className='contentWrapper'>
				<UserPanelContainer />
				<Container>
					<Register {...this.props}
						{...this.state}
						submitRegisterForm={this.submitRegisterForm} 
						allowRegister={this.allowRegister}
					/>
				</Container>
			</div>
		);
	}
}