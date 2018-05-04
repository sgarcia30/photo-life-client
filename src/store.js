import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Reducer} from './reducers/reducer.js';

// Sets up the reducer store and enables the Chrome Redux tool to function
export default createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
