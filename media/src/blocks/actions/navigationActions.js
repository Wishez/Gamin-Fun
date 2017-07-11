import { SELECT_NAVIGATION_ITEM, CLEAN_ACTIVE_STATE } from './../constants/actionTypes.js';


export const selectNavigationItem = (
	navigationItem
) => ({
	type: SELECT_NAVIGATION_ITEM,
	navigationItem
});

export const cleanActiveState = () => ({
	type: CLEAN_ACTIVE_STATE
});
