import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { SubmissionError } from 'redux-form';
import UserPanelContainer from './UserPanelContainer';
import PropTypes from 'prop-types';
import PersonalRoom from './../components/PersonalRoom';
import { changeHeightAwesomeBorder } from './../constants/pureFunctions.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { tryChangeAccountPassword, tryChangeAccountEmail } from './../actions/accountActions.js';

class PersonalRoomContainer extends Component {
	static PropTypes = {
		site: PropTypes.string.isRequired,
		replanishBalanceMessage: PropTypes.string.isRequired,
		subscribeMessage: PropTypes.string.isRequired,
		changeEmailMessage: PropTypes.string.isRequired,
		changePasswordMessage: PropTypes.string.isRequired,
		isChanging: PropTypes.bool.isRequired,
		username: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired
	}
	state =  {
		subscribeState: '1 месяц = 150 кредитов',
		replanishCost: '1 рубль = 1 кредит'
	};

	componentDidMount() {
   	    changeHeightAwesomeBorder();
    }

    componentDidUpdate() {
       changeHeightAwesomeBorder();
    }
    // Функция высшего порядка, принимающая полученные с формы значения(values).
    // dispatch - перенаправление к состоянию и 
    // функцию как действие, вызваемое внутри dispatch.
	changePasswordOrEmail = (values, dispatch, func) => {
		const { username, password, site } = this.props;
		values.username = username;
		values.currentPassword = password;

		dispatch(func(site, values));
	}
	submitChangePassword = (values, dispatch) => {
		this.changePasswordOrEmail(values, dispatch, tryChangeAccountPassword);
		// const { username, password, site } = this.props;
		// values.username = username;
		// values.currentPassword = password;

		// dispatch(tryChangeAccountPassword(site, values));
	}
	submitChangeEmailForm = (values, dispatch) => {
		this.changePasswordOrEmail(values, dispatch, tryChangeAccountEmail);
		// const { username, password, site } = this.props;
		// values.username = username;
		// values.currentPassword = password;

		// dispatch(tryChangeAccountEmail(site, values));
	}

	submitReplanishBalance = (values, dispatch) => {
	}

	submitSubscribtionForm = (values, dispatch) => {
		console.log(values);	
	}

	onChangeReplanishCost = e => {
		let target = e.target;
		let value = target.value;
		let caseRubles = '';
		let caseCredits = '';
		// Если цифра заканчивается от 2 до 4, то устанавливается 
		// нужный падеж.
		// const checkValue = value.slice(value.length - 1);
		// Выбирается падеж.
		if (+value === 1 || !value) {
			caseRubles = 'рубль';
			caseCredits = 'кредит'
			value = 1;
		} else if (value > 1 && value < 5) {
			caseRubles = 'рубля';
			caseCredits = 'кредита';
		} else {
			caseRubles = 'рублей';
			caseCredits = 'кредитов';
		}
		// Ограничивает длину строки в целочисленном поле.
		if (value && value.length > 20) { 
			// Обновление установленного значения.
			value = value.slice(0, 20);
		};
		// Устанавливается состояние сообщеня. Показывает количество кредитов, 
		// которое получит игрок.
		this.setState({
			replanishCost: `${value} ${caseRubles} = ${value} ${caseCredits}`
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