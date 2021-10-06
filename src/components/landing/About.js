import React from 'react';
import StyledAbout from './styles/StyledAbout';
import SampleGraph from './SampleGraph';
import SampleTopKeywords from './SampleTopKeywords';
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

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
          
          <Carousel variant='dark' interval='8000' pause='hover'>
            <Carousel.Item>
              <div className='graph-card'>
                <div className='card-content'>
                  <div className='graph-container'>
                    <SampleGraph />
                  </div>
                </div>
                <h3 className='card-caption'>see your mood trends</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='graph-card'>
                <div className='card-content'>
                  <SampleTopKeywords />
                </div>
                <h3 className='card-caption'>track keywords of your lifestyle</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='graph-card'>
                <div className='card-content'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faSmile} transform='shrink-8 down-1' mask={['fas','cloud']} size='lg'/>
                  </div>
                </div>
                <h3 className='card-caption'>live your best life ☺</h3>
              </div>
            </Carousel.Item>
          </Carousel>
          </div>
      </div>
    </StyledAbout>
  );
}

export default About;