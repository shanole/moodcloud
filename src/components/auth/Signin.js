import React from "react";
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

function Signin(){

  const firebase = useFirebase();

  useFirebaseConnect('auth');

  const auth = useSelector(state => state.firebase.auth);

  const login = async({email, password}) => {
    await firebase.login({email, password})
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    login({ email, password })
      .then( () => console.log('succesfully signed in!!', auth))
      .catch((error) => console.log(error.message))
  }

  

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