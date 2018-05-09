import * as actions from '../actions/authActions.js';

const initialState = {
  failureMessage: '',
  modalIsOpen: false
}

export const authReducer = (state = initialState, action) => {
  // LOGIN_FAILURE action that sets the login failure message
  if (action.type === actions.LOGIN_FAILURE) {
    return Object.assign({}, state, {
      failureMessage: 'Incorrect email or password'
    })
  }
  return state;
}
