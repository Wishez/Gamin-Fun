 import {
	LOGIN,
 	LOGOUT,
 	REGISTER, 
 	RECOVER_PASSWORD, 
 	CHANGE_EMAIL,
 	CHANGE_PASSWORD,
 	REPLANISH_BALANCE,
 	REQUEST_LOGIN_IN,
 	REQUEST_REGISTER,
 	SET_USER_TO_COOKIES
 } from './../constants/actionTypes.js';
import { cookiesHandler } from './../constants/pureFunctions.js';

export const initAccountState = {
	username: '',
	password: '',
	isLogged: false,
	userData: {},
	message: '',
	registered: false,
	isLogining: false,
	isRegistering: false
};


const account = (
	state = {},
	action
) => {
	switch (action.type) {
		case REQUEST_LOGIN_IN:
			return {
				...state,
				isLogining: true
			};
		case LOGIN:
			return {
				...state,
				isLogged: action.isLogged,
				password: action.password,
				username: action.username,
				userData: {
					...action.userData
				},
				message: action.message,
				registered: action.registered,
				registerMessage: 'Да прибудет с вами сила!',
				isLogining: false
			};
		case LOGOUT:
			cookiesHandler.clearCookies(action.site);

			return {
				...initAccountState
			};
		case REQUEST_REGISTER: 
			return {
				...state,
				isRegistering: true
			};
		case REGISTER:
			return {
				...state,
				registered: action.registered,
				message: '',
				registerMessage: action.registerMessage,
				isRegistering: false
			};
		case RECOVER_PASSWORD:
			return {
				...state,
				message: action.message
			};
		case CHANGE_EMAIL:
			return {
				...state,
				userData: {
					...state['userData'],
					email: action.email
				},
				message: action.message
			};
		case CHANGE_PASSWORD:
			return {
				...state,
				password: action.password,
				message: action.message
			};
		case SET_USER_TO_COOKIES:
			/* Если пользователь удачно залогинился, то 
			 * пароль и логин кэшируются.
			 * В action указан {
			 * 		username: string,
			 * 		password: string,
			 * 		site: string
			 * }
			 * action.type не принимается внутри функции, но также передаётся
			 * в спецификацию объекта.
			 * Внутри этой функции есть тесты, их нужно удалить 
			 */
			cookiesHandler.setUsernameAndPasswordToCookies({...action});

			return {
				...state
			};
		default:
			return state;
	}
};

export default account;