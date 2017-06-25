import { createStore, combineReducers } from 'redux';
import connect_form from './connect_form.js';
import visibilityFilter from './visibilityFilter.js';

const rootReducer = combineReducers({
	connect_form,
	visibilityFilter
});


export default rootReducer;