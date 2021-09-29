import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty, useFirebase } from 'react-redux-firebase'
import Register from './Register';
import Signin from './Signin';
import StyledAccountControl from './styles/StyledAccountControl';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { showForm } from './../../actions/index'

function AccountControl() {
  const firebase = useFirebase();
  
  const auth = useSelector(state => state.firebase.auth)
  
  const [signUpStatus, setSignUpStatus] = useState(false);

  const dispatch = useDispatch();

  const goToForm = () => {
    dispatch(showForm("new"));
  }

  let visibleComponent;

  function doSignOut() {
    firebase.logout().then(() => console.log('logged out!!')).catch((e) => console.log(e.message))
  }

  if ((isLoaded(auth)) && (!isEmpty(auth))) {
    return (<StyledAccountControl>
      <div className="content" id="account">
        <Link to='/dashboard' onClick = {goToForm}>how was your day?</Link>
        <button onClick = {doSignOut}>Log out</button>
      </div>
    </StyledAccountControl>)
  }

  if (signUpStatus) {
    visibleComponent = <div>
      <Register />
      <p onClick={() => setSignUpStatus(false)}>Already have an account? Log in here</p>
    </div>
  } else {
    visibleComponent = <div>
      <Signin />
      <p onClick={() => setSignUpStatus(true)}>Register for an account</p>
    </div>
  }

  return (
    <StyledAccountControl>
      <div className="content" id="account">
        {visibleComponent}       
      </div>
    </StyledAccountControl>
  );
}

export default AccountControl;