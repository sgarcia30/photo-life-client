import React from 'react';
import AddEntry from './add-entry.js';
import Feed from './feed.js';
import NavbarHome from './nav-bar-home.js'

export default function HomePage() {
    return (
        <div className="home">
          <NavbarHome />
          <h1>PhotoLife</h1>
          <AddEntry />
          <Feed />
        </div>
    );
}
