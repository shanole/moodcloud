import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useFirebase, useFirebaseConnect, isLoaded } from 'react-redux-firebase'


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

  let visibleComponent;

  if (formVisible) {
    visibleComponent = (
    <div>
      <form onSubmit={onUpload}>
        <label htmlFor='displayName'>display name:</label>
        <input type='text' name='displayName' defaultValue={profile.displayName} />
        <label htmlFor='photoUrl'>upload profile picture:</label>
        <input type="file" onChange={onFileChange}/> 
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
        <button type='submit'>save</button>
      </form>

      <button onClick={() => setFormVisible(false)}>
        back
      </button>
      
    </div>)
  } else { 
    visibleComponent = (<div>
    <p>display name: {profile.displayName}</p>
    <p>email: {profile.email}</p> 
    <button onClick={() => setFormVisible(true)}>edit profile</button>
  </div>
  )
  }
  return (
    <div>
      <h2>user profile</h2>
      <img src={profile.photoUrl} width="300" height="300" alt="profile-pic"  style={{borderRadius: '50%'}}/>
      <h3>hello, {profile.displayName}</h3>
      {visibleComponent}
      {/* <div>
        {
          isLoaded(profile)
            ? JSON.stringify(profile, null, 2)
            : 'Loading...'
        }
      </div> */}
    </div>
  )
}
export default UserControl;