import {LOGIN_FAILURE, loginFailure, login} from './authActions.js';
import {API_BASE_URL} from '../config';

describe('loginFailure', () => {
  it('Should return the action', () => {
    const action = loginFailure();
    expect(action.type).toEqual(LOGIN_FAILURE);
  });
});

// describe('login', () => {
//     it.only('Should dispatch loginFailure', () => {
//         const err = {
//             failureMessage: ''
//         };
//         const values = {
//           email: '',
//           password: ''
//         }
//
//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return err;
//                 }
//             })
//         );
//
//         const dispatch = jest.fn();
//         return login(values)(dispatch).then(() => {
//             // expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/auth/login`);
//             // expect(dispatch).toHaveBeenCalledWith(loginFailure());
//         })
//         .catch(err => {
//           console.log('does it get here?')
//           expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/auth/login`);
//           expect(dispatch).toHaveBeenCalledWith(loginFailure());
//         })
//     });
// });
