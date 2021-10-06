import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useFirebase, useFirebaseConnect, isLoaded } from 'react-redux-firebase'
import StyledUserControl from './styles/StyledUserControl';

function UserControl() {
  const [formVisible, setFormVisible] = useState(false);
  const [file, setFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0);

  const firebase = useFirebase();
  useFirebaseConnect('profile')
  const profile = useSelector(state => state.firebase.profile);
  const storage = firebase.storage();

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const onUpload = (event) => {
    event.preventDefault();
    const storageRef = storage.ref();

    if (file) {
      const fileRef = storageRef.child(file.name)
      const uploadTask = fileRef.put(file);
  
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        console.log('Upload is ' + progress + '% done');
        
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.log(error.message);
      }, 
      () => {
        setFile(null);
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
          console.log('File available at', downloadUrl);
          setFormVisible(false);
          return firebase.updateProfile({ displayName: event.target.displayName.value, photoUrl: downloadUrl })
        });
      }
    );
    }
  setFormVisible(false);
  return firebase.updateProfile({displayName: event.target.displayName.value})
  }

  function doSignOut() {
    firebase.logout().then(() => console.log('logged out!!')).catch((e) => console.log(e.message))
  }

  firebase.auth().onAuthStateChanged(user => {
    if(!user) {
      window.location = '/';
    }
  });

  let visibleComponent;

  if (formVisible) {
    visibleComponent = (
    <div className='profile-form'>
      <form onSubmit={onUpload}>
        <label className='lbl' htmlFor='displayName'>display name:</label>
        <input className='inpt' type='text' name='displayName' defaultValue={profile.displayName} />
        <label className='lbl' htmlFor='photoUrl'>upload profile picture:</label>
        <input className='upload' type="file" onChange={onFileChange}/> 
        {(file && uploadProgress > 0) && (
            <div className="progress">
              <div
                className="progress-bar progress-bar-info progress-bar-striped"
                role="progressbar"
                aria-valuenow={uploadProgress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: uploadProgress + "%", backgroundColor: 'red' }}
              >
                {uploadProgress}%
              </div>
            </div>
          )}
        <button className='btn' type='submit'>save</button>
      </form>

      <button className='btn' onClick={() => setFormVisible(false)}>
        back
      </button>
      
    </div>)
  } else { 
    visibleComponent = (<div>
    <h4 className='lbl'>display name:</h4>
    <p className='inpt'>{profile.displayName}</p>
    <h4 className='lbl'>email:</h4>
    <p className='inpt'>{profile.email}</p> 
    <button className='btn' onClick={() => setFormVisible(true)}>edit profile</button>
  </div>
  )
  }
  return (
    <StyledUserControl>
      <div className='account-container'>
        <h1 className='section-header'>your account</h1> 
        <div className='img-container'><img src={profile.photoUrl} alt="profile-pic"/></div>
        <div className='profile-content'>
          {visibleComponent}
          <button className='btn' onClick={doSignOut}>log out</button>
        </div>
      </div>
    </StyledUserControl>
  )
}
export default UserControl;