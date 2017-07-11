import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import PersonalRoom from './../components/PersonalRoom';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
	tryChangeAccountPassword,
	tryChangeAccountEmail,
	trySubscribeAccount 
} from './../actions/accountActions.js';
import { changeSiteIfNeeded } from './../actions/selectedSiteActions.js';

class PersonalRoomContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		replanishBalanceMessage: PropTypes.string.isRequired,
		subscribeMessage: PropTypes.string.isRequired,
		changeEmailMessage: PropTypes.string.isRequired,
		changePasswordMessage: PropTypes.string.isRequired,
		isChanging: PropTypes.bool.isRequired,
		username: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		match: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	}
	state =  {
		subscribeState: '1 месяц = 150 кредитов',
		replanishCost: '1 рубль = 1 кредит'
	};

	componentDidMount() {
		changeSiteIfNeeded(this.props);
   	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       changeSiteIfNeeded(this.props);
       changeHeightAwesomeBorder();
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

	submitReplanishBalance = (values, dispatch) => {
	}

	submitSubscribtionForm = (values, dispatch) => {
		this.executeActionInPersonalRoom(
			values,
		 	dispatch, 
		 	trySubscribeAccount
		 )

	}

	onChangeReplanishCost = e => {
		let target = e.target;
		let value = target.value;
		let declinationRubles = '';
		let declinationCredits = '';

		// Выбирается склонение.
		if (+value === 1 || !value) {
			declinationRubles = 'рубль';
			declinationCredits = 'кредит'
			value = 1;
		} else if (value > 1 && value < 5) {
			declinationRubles = 'рубля';
			declinationCredits = 'кредита';
		} else {
			declinationRubles = 'рублей';
			declinationCredits = 'кредитов';
		}

		// Ограничивает длину строки в целочисленном поле.
		if (value && value.length > 20) { 
			// Обновление установленного значения.
			value = value.slice(0, 20);
		};
		// Устанавливается состояние сообщеня. Показывает количество кредитов, 
		// которое получит игрок.
		this.setState({
			replanishCost: `${value} ${declinationRubles} = ${value} ${declinationCredits}`
		});

	}

	onQuantityMonthesChange = value => {
		const cost = value * 150;
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
				discount = (150 / 100 * 6) * value;
				break;
			case '12':
				// 11% скидка.
				discount = (150 / 100 * 11) * value;
				break;
			default: 
				// Без скидки.
				break;
		}

		this.setState({
			subscribeState: `${value} ${monthCase} = ${(+cost - +discount)} кредитов`
		});
		
	}


	render() {
		return (
			<div className='contentWrapper'>
				<UserPanelContainer />
				<Container>
					<PersonalRoom {...this.props}
						{...this.state}
						submitChangePassword={this.submitChangePassword} 
						submitReplanishBalance={this.submitReplanishBalance} 
						submitSubscribtionForm={this.submitSubscribtionForm}
						submitChangeEmailForm={this.submitChangeEmailForm}
						onQuantityMonthesChange={this.onQuantityMonthesChange}
						onChangeReplanishCost={this.onChangeReplanishCost}
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
		replanishBalanceMessage,
		subscribeMessage,
		changeEmailMessage,
		changePasswordMessage,
		isChanging,
		username,
		password
	} = dataBySite[selectedSite];
	
	return {
		site: selectedSite,
		replanishBalanceMessage,
		subscribeMessage,
		changeEmailMessage,
		changePasswordMessage,
		isChanging,
		username,
		password
	}
};

export default withRouter(connect(mapStateToProps)(PersonalRoomContainer));