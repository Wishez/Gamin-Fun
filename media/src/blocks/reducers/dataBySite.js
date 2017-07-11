import {
	REQUEST_NEWS,
	RECEIVE_NEWS,
	UPDATE_NEWS,
	LOGIN,
 	LOGOUT,
 	REGISTER, 
 	RECOVER_PASSWORD, 
 	CHANGE_EMAIL,
 	CHANGE_PASSWORD,
 	REPLANISH_BALANCE,
 	REQUEST_LOGIN_IN,
 	REQUEST_REGISTER,
 	SET_USER_TO_COOKIES,
 	SUBSCRIBE,
 	REQUEST_IN_PERSONAL_ROOM,
 	CHANGE_USER_AVATAR
} from './../constants/actionTypes.js';

import news, { initNewsState} from './news.js';
import account, { initAccountState } from './account.js';


// Expilcit better than implicit.
export const initState = {
	'main': {
		...initAccountState,
		...initNewsState
	},
	'minecraft': {
		...initAccountState,
		...initNewsState
	},
	'samp': {
		...initAccountState,
		...initNewsState
	}
};

const dataBySite = (
	state=initState,
	action
) => {
	// redux-form обращается к обработчикам состояние, а действия
	// redux-from не имеют свойства site, поэтому в состояние dataBySite
	// создаётся неопределённый сайт. Данное выражение избегает этого.
	const site = !action.site ? 'main' : action.site;

	switch(action.type) {
		case UPDATE_NEWS:
			return {
				...state,
				[site]: {
					...state[site],
					...news(state[site], action)
				}
			}
		case  REQUEST_NEWS:
			return {
				...state,
				[site]: {
					...state[site],
					...news(state[site], action)
				}
			}
		case RECEIVE_NEWS:
			return {
				...state,
				[site]: {
					...state[site],
					...news(state[site], action)
				}
			}
		case REQUEST_LOGIN_IN:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			}
		case LOGIN:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case SET_USER_TO_COOKIES:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[action.site], action)
				}
			};
		case LOGOUT:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case REQUEST_REGISTER:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case REGISTER:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case REQUEST_IN_PERSONAL_ROOM:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case RECOVER_PASSWORD:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case CHANGE_EMAIL:
			return {
				...state,
				[action.site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case CHANGE_PASSWORD:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case CHANGE_PASSWORD:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case SUBSCRIBE:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case REPLANISH_BALANCE:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		case CHANGE_USER_AVATAR:
			return {
				...state,
				[site]: {
					...state[site],
					...account(state[site], action)
				}
			};
		default:
			return state;
	} 
};



export default dataBySite;