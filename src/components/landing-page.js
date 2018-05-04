import React from 'react';
import PhotoLifeInfo from './photo-life-info.js';
import DetailCard from './detail-card.js';
import Registration from './registration.js';
import NavbarLanding from './nav-bar-landing.js';

//LandingPage component
export default function LandingPage() {
  //Render the NavbarLanding, PhotoLifeInfo, DetailCard, and Registration components
    return (
        <div className="landingPage">
          <NavbarLanding />
          <PhotoLifeInfo />
          <DetailCard />
          <Registration />
        </div>
    );
}
