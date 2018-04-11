import React from 'react';

export default function Login() {
    return (
        <div className="login">
          <form className='login-form'>
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
