import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/authActions.js';
import './registration.css';

// Registration component
export class Registration extends React.Component {
  // onSubmit function to dispatch the 'register' action
  // to register a new user
  onSubmit(event) {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.username.value;
    const password = event.target.password.value;
    const values = {
      firstName,
      lastName,
      email,
      password
    }
    this.props.dispatch(register(values));
  }
  // Renders the Registration componnet form
  render() {
    return (
        <div id='register-form-div' className="registration">
          <form className='registration-form' onSubmit={event => this.onSubmit(event)}>
            <div>
              <label forhtml="first-name">First Name</label>
              <input placeholder='First Name' type="text" name='firstName' id='firstName' />
            </div>
            <div>
              <label forhtml="lastName">Last Name</label>
              <input type="text" name='lastName' id='lastName' placeholder='Last Name' />
            </div>
            <div>
              <label forhtml="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label forhtml="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Register</button>
        </form>
      </div>
    );
  }
}

// Connect the Registration component to the store
export default connect()(Registration);
