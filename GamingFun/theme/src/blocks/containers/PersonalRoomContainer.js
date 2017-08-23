import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentWrapperContainer from './ContentWrapperContainer';
import PersonalRoom from './../components/PersonalRoom';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { 
	tryChangeAccountPassword,
	tryChangeAccountEmail,
	trySubscribeAccount 
} from './../actions/accountActions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';
import { cleanActiveState } from './../actions/navigationActions.js';
import { sites } from './../constants/actionTypes.js';


class PersonalRoomContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		subscribeMessage: PropTypes.string.isRequired,
		changeEmailMessage: PropTypes.string.isRequired,
		changePasswordMessage: PropTypes.string.isRequired,
		isChanging: PropTypes.bool.isRequired,
		username: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		location: PropTypes.object.isRequired,
		email: PropTypes.string.isRequired,
		isLogged: PropTypes.bool.isRequired
	}
	state =  {
		subscribeState: '1 месяц = 199 кредитов',
		replanishCost: '1 рубль = 1 кредит'
	};
	
	customViewComponent = () => {
		const { dispatch, location } = this.props;
		dispatch(cleanActiveState());
		changeSiteIfNeeded(this.props);
        changeHeightAwesomeBorder('/personal_room', location.pathname);
	}
	componentDidMount() {
		this.customViewComponent();
    }

    componentDidUpdate() {
    	this.customViewComponent();
    }

    // Функция высшего порядка, принимающая полученные с формы значения(values).
    // dispatch - перенаправление к состоянию и 
    // функцию как действие, вызваемое внутри dispatch.
	executeActionInPersonalRoom = (values, dispatch, func) => {
		const { username, password, site } = this.props;
		values.username = username;
		values.currentPassword = password;

		dispatch(func(site, values));
	}
	submitChangePassword = (values, dispatch) => {
		this.executeActionInPersonalRoom(values, dispatch, tryChangeAccountPassword);
	}
	submitChangeEmailForm = (values, dispatch) => {
		this.executeActionInPersonalRoom(values, dispatch, tryChangeAccountEmail);
	}

	submitSubscribtionForm = (values, dispatch) => {
		this.executeActionInPersonalRoom(
			values,
		 	dispatch, 
		 	trySubscribeAccount
		 );

	}

	onQuantityMonthesChange = value => {
		const cost = value * 199;
		let monthCase = '';
		let discount = 0;


		// Устанавливает правильный падеж.
		if (+value === 1) {
			monthCase = 'месяц';
		} else if (value > 1 && value < 5) {
			monthCase = 'месяца';
		} else {
			monthCase = 'месяцев';
		}

		switch (value) {
			case '6':
				// 7% скидка.
				discount = (199 / 100 * 6) * value;
				break;
			case '12':
				// 11% скидка.
				discount = (199 / 100 * 11) * value;
				break;
			default: 
				// Без скидки.
				break;
		}

		this.setState({
			subscribeState: `${value} ${monthCase} = ${+(+cost - +discount).toFixed()} кредитов`
		});
		
	}


	render() {
		const { isLogged } = this.props;
		return (
			<ContentWrapperContainer>
			{ isLogged ?
				<PersonalRoom {...this.props}
					{...this.state}
					submitChangePassword={this.submitChangePassword}  
					submitSubscribtionForm={this.submitSubscribtionForm}
					submitChangeEmailForm={this.submitChangeEmailForm}
					onQuantityMonthesChange={this.onQuantityMonthesChange}
				/>  : 
				<div>Чтобы зайти в свой личный кабинет нужно залогиниться.</div>}
			</ContentWrapperContainer>
		);
	}
}

const mapStateToProps = state => {
	const {
		selectedSite,
		dataBySite
	} = state;

	const {
		subscribeMessage,
		changeEmailMessage,
		changePasswordMessage,
		isChanging,
		username,
		password,
		userData,
		isLogged
	} = dataBySite[selectedSite];
	
	const  { email } = userData;
	
	return {
		site: selectedSite,
		subscribeMessage,
		changeEmailMessage,
		changePasswordMessage,
		isChanging,
		username,
		password,
		email,
		isLogged
	}
};

export default withRouter(connect(mapStateToProps)(PersonalRoomContainer));