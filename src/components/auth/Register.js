import React from "react";
import { useFirebase } from 'react-redux-firebase'
import StyledForm from "./styles/StyledForm";

function Register() {
  const firebase = useFirebase();

  const createNewUser = async ({ email, password, username }) => {
    await firebase.createUser({ email, password}, { displayName: username, email, photoUrl: 'https://firebasestorage.googleapis.com/v0/b/moodcloud-b54e6.appspot.com/o/cloud%20icon.jpg?alt=media&token=66d69bc3-d470-450d-b19d-264f4d2c3d6e' })
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

  return (
    <StyledForm>
      <h1>Register</h1>
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
          placeholder='password' />
        <button className='btn primary-link' type='submit'>Sign up</button>
      </form>
    </StyledForm>
  );
}

export default Register;