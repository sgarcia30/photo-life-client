import {API_BASE_URL} from '../config';

// Sync action to set state of the login error message
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

// Async post action to register a user
export const register = (values) => dispatch => {
    fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.email,
        password: values.password
      })
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(user => {
          window.location = '/login';
        });
};

// Async post action to login a user
export const login = (values) => dispatch => {
    fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: values.email,
        password: values.password
      })
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(user => {
          localStorage.setItem('userId', user.userId);
          localStorage.setItem('authToken', user.authToken);
          window.location = '/home';
        })
        .catch(err => {
          dispatch(loginFailure());
        })
};
