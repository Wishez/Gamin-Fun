import { SELECT_SITE } from './../constants/actionTypes.js';

const selectSite = site => ({
	type: SELECT_SITE,
	filter: site
});


export const changeSite = site => dispatch => {
   dispatch(selectSite(site));
}


const changeSiteByMatch = props => {
	const { dispatch, match } = props; 
	const { site } = match.params;
	dispatch(changeSite(site));

};

export const changeSiteIfNeeded = props => {
	// Извлекается текузий выбранный сайт.
	const { site } = props;
	// Загрузилась  не  главная страница, а стили не изменились
	// из-за значения выбранного сайта. Устанавливаем стили.
	if (site !== 'mine')
		return changeSiteByMatch(props);	
};

