import { createStore, combineReducers } from 'redux';
import form from './form.js';
import selectedSite from './selectedSite.js';
import newsBySite from './newsBySite.js';
import account from './account.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	form: formReducer,
	selectedSite,
	newsBySite,
	account
});


export default rootReducer;