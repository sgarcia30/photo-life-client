import React from 'react';

export default function Registration() {
    return (
        <div className="registration">
          <form className='registration-form'>
            <div>
              <label forhtml="first-name">First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
            </div>
            <div>
              <label forhtml="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
            </div>
            <div>
              <label forhtml="username">Email</label>
              <input type="text" name='username' id='username' />
            </div>
            <div>
              <label forhtml="password">Password</label>
              <input type="password" name='password' id='password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
        </div>
    );
}
