import React from 'react';
import Hero from './Hero';
import AccountControl from '../auth/AccountControl';
import About from './About';
import ScrollToTop from '../util/ScrollToTop';

// add a scroll to top button?
function LandingPage() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <AccountControl/>
      {/* <div style={{
        position: 'fixed', bottom: '0', right:'0'
      }}>HELLO</div> */}
      <ScrollToTop />
    </React.Fragment>
    );
}

export default LandingPage;