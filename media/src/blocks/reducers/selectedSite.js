import { SELECT_SITE } from './../constants/actionTypes.js';

const selectedSite = (
	state = 'main',
	action
) => {
	switch (action.type) {
		case SELECT_SITE:
			return action.filter;
		default:
			return state;
	}
}

export default selectedSite;