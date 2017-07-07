import {
	REQUEST_NEWS,
	RECEIVE_NEWS,
	UPDATE_NEWS
} from './../constants/actionTypes.js';

export const initNewsState = {
	isFetching: false,
	didUpdate: false,
	news: {}
}

const news = (
	state = initNewsState,
	action
) => {
	switch(action.type) {
		case UPDATE_NEWS:
			return {
				...state,
				isFetching: false,
				didUpdate: true
			};
		case  REQUEST_NEWS:
			return {
			 	...state,
			 	isFetching: true,
			 	didUpdate: false
			};
		case RECEIVE_NEWS:
			return {
				...state,
				isFetching: false,
				news: action.news
			}
		default:
			return state;
	} 
};

export default news;
