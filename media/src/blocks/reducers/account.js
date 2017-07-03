import { LOGIN, LOGOUT, REGISTER } from './../constants/actionTypes.js';

const initState = {
	login: '',
	password: '',
	isLogged: false,
	message: '',
	userData: {

	}
};


const account = (
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
		case REGISTER:
			return {
				...state
			}
		default:
			return state;
	}
};

export default account;