import React from 'react';
import Hero from './Hero';
import AccountControl from '../auth/AccountControl';
import About from './About';


function LandingPage() {
  return (
    <React.Fragment>
      <Hero />
      <AccountControl/>
      <About />
    </React.Fragment>
    );
}

export default LandingPage;