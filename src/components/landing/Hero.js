import React from 'react';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import StyledHero from './styles/StyledHero';
import gradientVid from './../../assets/img/gradient-vid.mp4';

function Hero() {
  const auth = useSelector(state => state.firebase.auth);
  const profile = useSelector(state => state.firebase.profile)

  let button;
  let welcomeMessage;

  if ((isLoaded(auth)) && (!isEmpty(auth))) {
    welcomeMessage = `welcome to moodboard, ${profile.displayName}`
    button = <Link to='/dashboard'>go inside</Link>
  } else {
    welcomeMessage = 'welcome to moodcloud'
    button = <HashLink smooth to='/#account'>join us</HashLink>
  }
  

  return (
  <StyledHero>
    <div className="content">
      <h1>moodcloud</h1>
      <p>{welcomeMessage}</p>
      <p>{button}</p>
      <p><HashLink to="#about">about</HashLink></p>
    </div>
    <video autoPlay muted loop id="bgvideo">
      <source src={gradientVid} type="video/mp4" />
    </video>
  </StyledHero>
  );
}

export default Hero;