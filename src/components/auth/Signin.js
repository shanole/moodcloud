import React, { useEffect } from "react";
import { useFirebase } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

function Signin(){

  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth)

  const login = async({email, password}) => {
    await firebase.login({email, password})
  }
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    login({ email, password })
      .then( () => {
        window.location = 'dashboard'
        console.log('succesfully signed in!!')})
      .catch((error) => console.log(error.message))
  }

  // firebase.auth().onAuthStateChanged(user => {
  //   if(user) {
  //     window.location = 'dashboard'; //After successful login, user will be redirected to dashboard
  //   }
  // });

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