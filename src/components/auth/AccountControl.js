import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirebase } from 'react-redux-firebase'
import Register from './Register';
import Signin from './Signin';

function AccountControl() {
  const firebase = useFirebase();
  
  const auth = useSelector(state => state.firebase.auth)
  const [signUpStatus, setSignUpStatus] = useState(false);

  let visibleComponent;

  function doSignOut() {
    firebase.logout().then(() => console.log('logged out!!')).catch((e) => console.log(e.message))
  }

  if ((isLoaded(auth)) && (!isEmpty(auth))) {
    return(<button onClick = {doSignOut}>Log out</button>)
  }

  if (signUpStatus) {
    visibleComponent = <Register />
  } else {
    visibleComponent = <Signin />
  }
  return (
    <React.Fragment>
      {visibleComponent}
      <button onClick={() => setSignUpStatus(true)}>Register for an account</button>
      <button onClick={() => setSignUpStatus(false)}>Login</button>
    </React.Fragment>
  );
}

export default AccountControl;