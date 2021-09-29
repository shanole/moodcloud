import React from 'react';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import StyledHero from './styles/StyledHero';
import gradientVid from './../../assets/img/gradient-vid.mp4';
import gradientbg from './../../assets/img/gradient1.jpg';


function Hero() {
  const auth = useSelector(state => state.firebase.auth);

  let button;

  if ((isLoaded(auth)) && (!isEmpty(auth))) {
    button = <Link to='/dashboard'>go inside</Link>
  } else {
    button = <HashLink smooth to='/#account'>join us</HashLink>
  }
  

  return (
  <StyledHero>
    <div className="content">
      <h1>moodcloud</h1>
      <p>Welcome to moodcloud</p>
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