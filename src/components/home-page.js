import React from 'react';
import AddEntry from './add-entry.js';
import Feed from '/.feed.js';

export default function HomePage() {
    return (
        <div className="home">
          "Some kind of header"
          <AddEntry />
          <Feed />
        </div>
    );
}
