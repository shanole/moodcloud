import React from 'react';
import StyledAbout from './styles/StyledAbout';

function About() {
  return (
    <StyledAbout>
      <div className='wrapper'>
        <div className='column about' id='about'>
          <h1 className='about-title'>about moodcloud</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie leo quam, nec lacinia quam maximus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus malesuada magna a vehicula. Phasellus egestas mattis cursus. Etiam sed interdum massa. Phasellus ut ullamcorper ante, sed molestie nunc. Donec a risus purus. Nunc fringilla risus ligula, eu finibus leo mattis sed. Praesent consequat nunc quam, non posuere eros placerat sit amet. Nunc elementum libero molestie nulla sodales bibendum.</p>

        </div>
        <div className='column chart'>hi how are ya</div>
      </div>
    </StyledAbout>
  );
}

export default About;