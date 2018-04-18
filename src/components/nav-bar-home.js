import React from 'react';

export default function NavbarHome(props) {
    return (
        <div className="nav">
          <nav>
            <h2>PhotoLife Logo</h2>
            <ul>
              <li><input type='text' placeholder='Search Entries' /></li>
              <li onClick={() => {
                localStorage.clear();
                window.location = '/login';
              }}>
              <button>Logout</button></li>
            </ul>
          </nav>
        </div>
    );
}
