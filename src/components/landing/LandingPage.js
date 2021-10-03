import React from 'react';
import Hero from './Hero';
import AccountControl from '../auth/AccountControl';
import About from './About';
import ScrollToTop from '../util/ScrollToTop';

// add a scroll to top button?
function LandingPage() {
  return (
    <div id='landing'>
      <Hero />
      <About />
      <AccountControl/>
      <ScrollToTop el='landing'/>
    </div>
    );
}

export default LandingPage;