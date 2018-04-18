import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions.js';

export class Login extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const email = event.target.username.value;
    const password = event.target.password.value;
    const values = {
      email,
      password
    }
    this.props.dispatch(login(values));
  }
  render() {
    return (
        <div className="login">
          <form className='login-form' onSubmit={(event) => this.onSubmit(event)}>
              <div>
                <label forhtml="username">Email</label>
                <input type="text" name='username' id='username' />
              </div>
              <div>
                <label forhtml="password">Password</label>
                <input type="password" name='password' id='password' />
              </div>
              <button type='submit'>Login</button>
          </form>
        </div>
    );
  }
}

export default connect()(Login);
