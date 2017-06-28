import { createStore, combineReducers } from 'redux';
import form from './form.js';
import visibilityFilter from './visibilityFilter.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	form: formReducer
});


export default rootReducer;