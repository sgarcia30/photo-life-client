import React from 'react';
import PhotoLifeInfo from './photo-life-info.js';
import DetailCard from './detail-card.js';
import Registration from './registration.js';

export default function LandingPage() {
    return (
        <div className="landingPage">
          <PhotoLifeInfo />
          <DetailCard />
          <Registration />
        </div>
    );
}
