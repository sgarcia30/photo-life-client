import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar-landing.css';

export default function NavbarLanding(props) {
    return (
        <div className="nav-landing">
          <nav>
            <img className='logo' src="/logo-camera-green-blue.png" alt="camera logo"></img>
            <h2>PhotoLife</h2>
            <ul className="nav-components">
              <li><Link to='/login'><button id='logout'>Login</button></Link></li>
              <li><button id='register'>Register</button></li>
            </ul>
          </nav>
        </div>
    );
}
