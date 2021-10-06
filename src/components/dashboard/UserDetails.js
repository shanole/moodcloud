import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showDashboard, showForm } from './../../actions/index';
import { Link } from 'react-router-dom';
import StyledUserDetails from './styles/StyledUserDetails';
import dateOptions from './../util/dateOptions';

function UserDetails() {
  const profile = useSelector(state => state.firebase.profile);

  const dispatch = useDispatch();
  
  const date = new Date(Date.now());
  const dateString = date.toLocaleString('en-US', dateOptions);

  return (
    <StyledUserDetails>
      <div className='profile-pic'>
        <Link to='/account'><img src={profile.photoUrl} alt="profile pic"/></Link>
      </div>
      <h3 className='section-heading'>Hello, <Link to='/account' className='link'>{profile.displayName}</Link></h3>
      <h4 className='date'>Today is {dateString}. <span onClick={() => dispatch(showForm('new'))} className='link'>How is your day going?</span></h4>
      {/* <div className='user-nav-links'>
        <p><Link to='/account' className='link'>Edit user details</Link></p>
        <p className='link' onClick={() => dispatch(showForm('new'))}>New post</p>
        <p className='link' onClick={() => dispatch(showDashboard())}>Home</p>
      </div> */}
    </StyledUserDetails>
  );
}

export default UserDetails;