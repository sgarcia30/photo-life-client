import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main.js';
import store from './store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// Renders the Main component to the 'root' div and connects it to
// the store
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
