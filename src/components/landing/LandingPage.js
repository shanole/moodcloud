import React from 'react';
import Hero from './Hero';
import AccountControl from '../auth/AccountControl';
import About from './About';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function LandingPage() {
  return (
    <div id='landing'>
      <Hero />
      <About />
      <AccountControl/>
      <ScrollToTop />
      <Footer />
    </div>
    );
}

export default LandingPage;