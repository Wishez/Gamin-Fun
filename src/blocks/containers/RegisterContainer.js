import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import Register from './../components/Register';

let registered = false, 
	message = '',
	knewRules = false;
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
		const booleans = [true, false];
		if(booleans[Math.round(Math.random() * 1)]) {
			this.setState({
				registered: true,
				message: 'Вы успешно прошли регистрацию'
			})
		} else {
			this.setState({
				message: 'Такой аккаунт уже существует',
				registered: false
			});
		}
	}

	allowRegister = () => {
		this.setState({
			knowRules: !this.state.knowRules
		});
		console.log(this.state.knowRules);
	}
	render() {
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