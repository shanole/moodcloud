import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import StyledHero from './styles/StyledHero';
import gradientVid from './../../assets/img/gradient-vid.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { showDashboard } from './../../actions/index'
// import { faSmile } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  const profile = useSelector(state => state.firebase.profile)
  const dispatch = useDispatch();

  let button;
  let welcomeMessage;

  if ((isLoaded(profile)) && (!isEmpty(profile))) {
    welcomeMessage = `welcome to moodboard, ${profile.displayName}`
    button = <Link to='/dashboard' onClick={() => dispatch(showDashboard())} className='btn primary-link'>go inside</Link>
  } else {
    welcomeMessage = 'welcome to moodcloud '
    button = <HashLink smooth to='/#account' className='btn primary-link'>join us</HashLink>
  }
  

  return (
  <StyledHero>
    <div className="content">
    {/* <h1><FontAwesomeIcon icon={faSmile} transform='shrink-8 down-1' mask={['fas','cloud']} size='lg'/></h1> */}
      <h1>moodcloud</h1>
      <p>{welcomeMessage}</p>
      {button}
      <HashLink to="#about" className='plain-link learn'>learn more</HashLink>
      <HashLink to="#about" className='plain-link'><FontAwesomeIcon icon='long-arrow-alt-down'/></HashLink>
    </div>
    <div id='videoWrapper'>
      <video autoPlay muted loop id="bgvideo">
        <source src={gradientVid} type="video/mp4" />
      </video> 
    </div>
  </StyledHero>
  );
}

export default Hero;