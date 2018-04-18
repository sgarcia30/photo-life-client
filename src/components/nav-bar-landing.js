import React from 'react';
import {Link} from 'react-router-dom';

export default function NavbarLanding(props) {
    return (
        <div className="nav">
          <nav>
            <h2>PhotoLife Logo</h2>
            <ul>
              <li><Link to='/login'><button>Login</button></Link></li>
              <li><button>Register</button></li>
            </ul>
          </nav>
        </div>
    );
}
