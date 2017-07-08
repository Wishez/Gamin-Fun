import { SELECT_SITE } from './../constants/actionTypes.js';

const selectSite = site => ({
	type: SELECT_SITE,
	filter: site
});


export const changeSite = site => dispatch => {
   dispatch(selectSite(site));
}