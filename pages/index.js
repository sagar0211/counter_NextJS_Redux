import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MyApp from './_app'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';


let store = createStore()


ReactDOM.render(
	<Provider store={store}>
        <MyApp />
  	</Provider>
	,document.getElementById('root'));


registerServiceWorker();