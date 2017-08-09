import { 
	RECEIVE_NEWS,
 	REQUEST_NEWS,
 	UPDATE_NEWS
} from './../constants/actionTypes.js';


export const updateNews = site => ({
	type: UPDATE_NEWS,
	site
});

const requestNews = site => ({
	type: REQUEST_NEWS,
	site
});
/* Функция возвращает объект с объектами,
 * которым присвоенны свои уникальные индификторы
 * представляющие собой арабские цифры.
 */
const accumulateByIdInObject = json => (
	json.reduce((accumulatedData, object) => (
		{
			...accumulatedData,
			[object.id]: object
		}
	), {}) 
);
const receiveNews = (site, json) => ({
	type: RECEIVE_NEWS,
	site,
	news: accumulateByIdInObject(json)
});

const fetchNews = site => dispatch => {
	// Устанавливаем загрузку.
	dispatch(requestNews(site));

	return fetch(`/api/v0/${site}/news/`)
		.then(response => response.json())
		.then(json => {
			 dispatch(receiveNews(site, json)) 
		});
};

const shouldFetchNews = (state, site) => {
	// Если новости сайта ещё не загруженные,
	// либо исчезли из объекта состояния конкретного сайта,
	// то запрашиваем данные.
	if (!state[site])
		return true;
	// Если новости у сайта есть, извлекаем его свойства.
	const { isFetching, didUpdate } = state[site];
	// Возможно, данные загружаются, 
	// и новый запрос не нужен.

	if(isFetching)
		return false;

	// Либо пользователь обновил данные,
	// либо не обновил.
	return didUpdate;
}

export const fetchNewsIfNeeded = site => (dispatch, getState) => {
	// Проверка на необходимость загрузки новостей.
	if (shouldFetchNews(getState(), site)) {
		// Загрузка новостей.
		return dispatch(fetchNews(site));
	}
};

