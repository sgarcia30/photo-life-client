import {API_BASE_URL} from '../config';

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
        });
};