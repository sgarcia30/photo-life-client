import React from 'react';
import AddEntry from './add-entry.js';
import Feed from './feed.js';

export default function HomePage() {
    return (
        <div className="home">
          <h1>PhotoLife</h1>
          <AddEntry />
          <Feed />
        </div>
    );
}
