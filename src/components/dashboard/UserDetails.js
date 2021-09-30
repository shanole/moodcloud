import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import { showDashboard, showForm } from './../../actions/index';
import { Link } from 'react-router-dom';

function UserDetails() {
  // maybe move default image to register portion?
  // const [profilePic, setProfilePic] = useState('https://firebasestorage.googleapis.com/v0/b/moodcloud-b54e6.appspot.com/o/cloud%20icon.jpg?alt=media&token=67e6638c-40b2-4f3b-ae29-411318fd6bb3')

  const profile = useSelector(state => state.firebase.profile);

  const dispatch = useDispatch();
  
  return (
    <div>
      <img src={profile.photoUrl} width="300" height="300" alt="profile-pic"  style={{borderRadius: '50%'}}/>
      <h3 className='section-heading'>Hello, {profile.displayName}</h3>
      <p><Link to='/account' className='link'>Edit user details</Link></p>
      <p className='link' onClick={() => dispatch(showForm('new'))}>New post</p>
      <p className='link' onClick={() => dispatch(showDashboard())}>Home</p>
    </div>
  );
}

export default UserDetails;