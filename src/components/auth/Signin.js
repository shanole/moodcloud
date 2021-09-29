// redirecting to dashboard still doesn't work

import React from "react";
import { useFirebase } from 'react-redux-firebase'

function Signin(){

  const firebase = useFirebase();

  const login = async({email, password}) => {
    await firebase.login({email, password})
  }
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    login({ email, password })
      .then( () => {
        // window.location = 'dashboard'
        console.log('succesfully signed in!!')})
      .catch((error) => console.log(error.message))
  }

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
    </React.Fragment>
  );
}

export default Signin