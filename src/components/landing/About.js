import React from 'react';
import StyledAbout from './styles/StyledAbout';
import SampleGraph from './SampleGraph';
function About() {
  return (
    <StyledAbout>
      <div className='wrapper'>
        <div className='column about' id='about'>
          <h1 className='about-title'>about moodcloud</h1>
          <p>Made with data-driven individuals in mind, moodcloud is a web application that helps you track your daily mood, as well as what factors are influencing your mental health. Let moodcloud help you figure out what is really bringing joy to your life, and what is detracting from your happiness. moodcloud was created as an Epicodus capstone project by Shannon Lee.</p>
          <div className='about-links'>
            <a href='https://github.com/shanole/moodcloud' target="_blank">see source code on github</a>
            <a href='https://www.linkedin.com/in/shannonhjlee/' target="_blank">contact Shannon on linkedin</a>
          </div>
        </div>
        <div className='column chart'>
          <SampleGraph />
          <h1>See your mood trends</h1>
          </div>
      </div>
    </StyledAbout>
  );
}

export default About;