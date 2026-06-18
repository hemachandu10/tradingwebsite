import React from 'react';
import Hero from './Hero';
import TrustAndConfidence from './TrustAndConfidence';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccoount';


function HomePage() {
  return (
    <div>  
      <Hero />
      <TrustAndConfidence />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  );
}

export default HomePage;
