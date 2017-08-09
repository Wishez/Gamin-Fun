import {
	REQUEST_NEWS,
	RECEIVE_NEWS,
	UPDATE_NEWS 
} from './../constants/actionTypes.js';

const initState = {
	isFetching: false,
	isUpdate: false,
	news: {}
}

const news = (
	state = initState,
	action
) => {
	switch(action.type) {
		case UPDATE_NEWS:
			return {
				...state,
				isFetching: false,
				isUpdate: true
			};
		case  REQUEST_NEWS:
			return {
			 	...state,
			 	isFetching: true,
			 	isUpdate: false
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
}

const newsBySite = (
	state={},
	action
) => {
	switch(action.type) {
		case UPDATE_NEWS:
		case  REQUEST_NEWS:
		case RECEIVE_NEWS:
			return {
				...state,
				[action.site]: news(state, action)
			}
		default:
			return state;
	} 
};

export default newsBySite;