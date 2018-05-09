
import { combineReducers } from 'redux';
import {Reducer} from './reducer.js';
import {authReducer} from './authReducer.js';

export const rootReducer = combineReducers({
  Reducer,
  authReducer
})
