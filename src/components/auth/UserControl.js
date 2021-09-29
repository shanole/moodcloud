import React from 'react';
import { useSelector } from 'react-redux'
import { useFirebase, isLoaded } from 'react-redux-firebase'


function UserControl() {
  const firebase = useFirebase()
  const profile = useSelector(state => state.firebase.profile)

  function updateUserProfile() {
    console.log('update clicked');
    console.log(profile)
    return firebase.updateProfile({ displayName: 'shannon' })
  }

  return (
    <div>
      <h2>Update User Profile</h2>
      <span>
        Click the button to update profile to include role parameter
      </span>
      <button onClick={updateUserProfile}>
        Add Role To User
      </button>
      <div>
        {
          isLoaded(profile)
            ? JSON.stringify(profile, null, 2)
            : 'Loading...'
        }
      </div>
    </div>
  )
}
export default UserControl;