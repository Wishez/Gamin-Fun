import { SELECT_SITE } from './../constants/actionTypes.js';

export const selectSite = site => ({
	type: SELECT_SITE,
	filter: site
});