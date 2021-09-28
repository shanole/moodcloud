import React from 'react';
import { useSelector } from 'react-redux'

function UserDetails() {
  const auth = useSelector(state => state.firebase.auth);
  
  console.log(auth);
  return (
    <h3>Hello, {auth.email}</h3>
  );
}

export default UserDetails;