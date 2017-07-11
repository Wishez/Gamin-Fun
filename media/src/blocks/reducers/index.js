import { createStore, combineReducers } from 'redux';
import form from './form.js';
import selectedSite from './selectedSite.js';
import dataBySite from './dataBySite.js';
import navigation from './navigation.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	form: formReducer,
	selectedSite,
	dataBySite,
	navigation
});


export default rootReducer;