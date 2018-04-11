import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
