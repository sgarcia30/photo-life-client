import React from 'react';
import PhotoLifeInfo from './photo-life-info.js';
import DetailCard from './detail-card.js';
import Registration from './registration.js';
import NavbarLanding from './nav-bar-landing.js';

export default function LandingPage() {
    return (
        <div className="landingPage">
          <NavbarLanding />
          <PhotoLifeInfo />
          <DetailCard />
          <Registration />
        </div>
    );
}
