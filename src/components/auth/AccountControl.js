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

  // add smooth scroll
  function doSignOut() {
    firebase.logout()
      .then(() => {
        console.log('logged out!!');
        window.location = '/';
      })
      .catch((e) => console.log(e.message))
  }

  if ((isLoaded(auth)) && (!isEmpty(auth))) {
    return (<StyledAccountControl>
      <div className="content" id="account">
        <Link to='/dashboard' onClick={goToForm} className='question'>how was your day?</Link>
        <button className='btn primary-link' onClick = {doSignOut}>sign out</button>
      </div>
    </StyledAccountControl>)
  }

  

  if (signUpStatus) {
    visibleComponent = <div>
      <Register />
      <p className='toggle' onClick={() => setSignUpStatus(false)}>Already have an account? Log in here</p>
    </div>
  } else {
    visibleComponent = <div>
      <Signin />
      <p className='toggle' onClick={() => setSignUpStatus(true)}>Register for an account</p>
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