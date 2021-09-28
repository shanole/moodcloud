import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { showForm } from './../../actions/index'

function LandingPage() {
  const dispatch = useDispatch();

  const goToForm = () => {
    dispatch(showForm("new"));
  }
  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <p><Link to="/dashboard">Go to dashboard</Link></p>
      <p><Link to="/dashboard" onClick={goToForm}>New post</Link></p>
      <p><Link to="/signin">Sign in</Link></p>
    </React.Fragment>
    );
}

export default LandingPage;