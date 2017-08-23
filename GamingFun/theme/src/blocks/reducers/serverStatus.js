import { SET_SERVER_STATUS } from './../constants/actionTypes.js';

export const initServerStatusState = {
	serverData: {
		amountPeople: 0,
		totalPeople: 0,
		isOnline: false,
		serverName: ''
	}
};

const serverStatus = (
	state=initServerStatusState,
	action
) => {
	switch(action.type) {
		case SET_SERVER_STATUS:
			return {
				...state,
				serverData: {
					...action.serverData
				}
			};
		default:
			return state;
	}
};

export default serverStatus;