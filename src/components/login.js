import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions.js';
import './login.css';

// Login component
export class Login extends React.Component {
  // onSubmit functions that dispatches the 'login' action
  // to log a user in
  onSubmit(event) {
    event.preventDefault();
    const email = event.target.username.value;
    const password = event.target.password.value;
    const values = {
      email,
      password
    }
    this.props.dispatch(login(values));
    event.target.username.value = '';
    event.target.password.value = '';
  }

// Renders the Login component
  render() {
    return (
      <div className='login-wrapper'>
        <div className="login-component">
            <form className='login-form' onSubmit={(event) => this.onSubmit(event)}>
              <fieldset>
                <legend>Login</legend>
                <span className='demo'>Demo User</span>
                <span className='demo'>Email: jdoe@gmail.com, Password: 123456789</span>
                <div>
                  <p>{this.props.failureMessage}</p>
                  <label forhtml="username">Email</label>
                  <input type="text" name='username' id='username' />
                </div>
                <div>
                  <label forhtml="password">Password</label>
                  <input type="password" name='password' id='password' />
                </div>
                </fieldset>
                <button id='login' type='submit'>Login</button>
            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  failureMessage: state.authReducer.failureMessage
})
// Connect the Login component to the store
export default connect(mapStateToProps)(Login);
