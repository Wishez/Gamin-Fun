import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';  
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

render((
  <Provider store={store}>
  	<Router>
    	<App />
    </Router>
  </Provider>
), document.getElementById('root'));