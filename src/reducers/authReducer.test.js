// import authReducer from './authReducer.js';
// import {loginFailure} from '../actions/authActions.js';
//
// describe('authReducer', () => {
//     // Set up some dummy data
//     const failureMessage1 = 'you lost';
//     const failureMessage2 = 'incorrect email or password'
//
//
//     it('Should set the initial state when nothing is passed in', () => {
//         const state = authReducer(undefined, {type: '__UNKNOWN'});
//         expect(state).toEqual({
//             failureMessage: ''
//         });
//     });
//
//     it('Should return the current state on an unknown action', () => {
//         let currentState = {};
//         const state = authReducer(currentState, {type: '__UNKNOWN'});
//         expect(state).toBe(currentState);
//     });
//
//     describe('loginFailure', () => {
//         it('Should set failureMesssage', () => {
//             let state;
//             state = authReducer(state, loginFailure(failureMessage1));
//             state = authReducer(state, loginFailure(failureMessage2));
//             expect(state).toEqual({
//                 failureMessage: failureMessage2
//             });
//         });
//     });
// });
