import { combineReducers } from 'redux';
import selectedSite from './selectedSite.js';
import dataBySite from './dataBySite.js';
import navigation from './navigation.js';
import { reducer as formReducer } from 'redux-form';
import robokassa from './robokassa.js';

const rootReducer = combineReducers({
	robokassa,
	form: formReducer,
	selectedSite,
	dataBySite,
	navigation
});


export default rootReducer;