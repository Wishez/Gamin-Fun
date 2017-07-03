import { LOGIN, LOGOUT } from './../constants/actionTypes.js';

const initState = {
	login: '',
	password: '',
	isLogged: false,
	message: ''
};


const loginByActions = (
	state = {},
	action
) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state
			}
		case LOGOUT:
		default:
			return state;
	}
}


export const account = (
	state = initState,
	action
) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state
			};
		case LOGOUT:
			return {
				...initState
			}
		default:
			return state;
	}
}