import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar-landing.css';

export default function NavbarLanding(props) {
    return (
        <div className="nav">
          <nav>
            <h2>PhotoLife Logo</h2>
            <ul className="nav-components">
              <li><Link to='/login'><button id='logout'>Login</button></Link></li>
              <li><button id='register'>Register</button></li>
            </ul>
          </nav>
        </div>
    );
}
