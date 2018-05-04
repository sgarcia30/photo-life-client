import React from 'react';
import './photo-life-info.css';

// PhotoLifeInfo component
export default function PhotoLifeInfo(props) {
  // Renders the PhotoLifeInfo component
    return (
        <div className="appIntro">
          <div className='landing-background'>
            <div className='transparency-block'>
              <h1>PhotoLife</h1>
              <p className='app-slogan'>Journal your life in photos</p>
            </div>
          </div>
        </div>
    );
}
