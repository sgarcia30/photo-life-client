import React from 'react';
import AddEntry from './add-entry.js';
import Feed from './feed.js';
import NavbarHome from './nav-bar-home.js'
import './home-page.css';

//HomePage component
export default function HomePage() {
  // Render the NavbarHome, AddEntry, and Feed components
    return (
        <div className="home">
          <NavbarHome />
          <AddEntry />
          <Feed />
        </div>
    );
}
