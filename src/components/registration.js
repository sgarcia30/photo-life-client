import React from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/authActions.js';

export class Registration extends React.Component {
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
  render() {
    return (
        <div className="registration">
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

export default connect()(Registration);
