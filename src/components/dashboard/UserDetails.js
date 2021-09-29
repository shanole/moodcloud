import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showDashboard, showForm } from './../../actions/index';
import { Link } from 'react-router-dom';

function UserDetails() {

  const [formVisible, setFormVisible] = useState(false);
  const [profilePic, setProfilePic] = useState('https://firebasestorage.googleapis.com/v0/b/moodcloud-b54e6.appspot.com/o/cloud%20icon.jpg?alt=media&token=67e6638c-40b2-4f3b-ae29-411318fd6bb3')

  const profile = useSelector(state => state.firebase.profile);

  const dispatch = useDispatch();
  
  if (profile.photoUrl !== undefined ) {
    setProfilePic(profile.photoUrl);
  }

  return (
    <div>
      <img src={profilePic} width="300" alt="profile-pic"  style={{borderRadius: '50%'}}/>
      <h3>Hello, {profile.displayName}</h3>
      <p><Link to='/account'>Edit user details</Link></p>
      <p onClick={() => dispatch(showForm('new'))}>New post</p>
      <p onClick={() => dispatch(showDashboard())}>Home</p>
    </div>
  );
}

export default UserDetails;