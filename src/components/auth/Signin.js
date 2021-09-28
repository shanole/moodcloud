import React from "react";
import { useFirebase } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

function Signin(){

  const firebase = useFirebase();

  const auth = useSelector(state => state.firebase.auth);
  const currentUser = firebase.auth().currentUser;

  const createNewUser = async ({ email, password, username }) => {
    await firebase.createUser({ email, password, displayName: username}, { username, email })
  }

  const login = async({email, password}) => {
    await firebase.login({email, password})
  }

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;

    createNewUser({ email, password, username})
        .then( () => console.log('successfully signed up!!'))
        .catch((error) => console.log(error.message));
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    login({ email, password })
      .then( () => console.log('succesfully signed in!!', auth))
      .catch((error) => console.log(error.message))
  }

  function doSignOut() {
    firebase.logout().then(() => console.log('logged out!!')).catch((e) => console.log(e.message))
  }



  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='text'
          name='username'
          placeholder='username' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

      <hr />
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

      <hr />
      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default Signin