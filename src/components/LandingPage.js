import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

function LandingPage() {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <p><Link to="/dashboard">Go to dashboard</Link></p>
      <p><Link to="/signin">Sign in</Link></p>
    </React.Fragment>
    );
}

export default LandingPage;