import React from "react";
import { useFirebase } from 'react-redux-firebase'

function Register() {
  const firebase = useFirebase();

  const createNewUser = async ({ email, password, username }) => {
    await firebase.createUser({ email, password}, { username, email })
  }

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;

    createNewUser({ email, password, username})
        .then( () => console.log('successfully signed up!!'))
        // .then( () => auth.updateProfile({ displayName: username}) )
        .catch((error) => console.log(error.message));
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
    </React.Fragment>
  );
}

export default Register;