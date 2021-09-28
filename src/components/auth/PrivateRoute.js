import React, { useState } from 'react'
import {  Route,  Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useFirebase, useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function PrivateRoute({ children, ...rest }) {
  // useFirebaseConnect('auth');
  const auth = useSelector(state => state.firebase.auth);

  const firebase = useFirebase();
  const [loggedIn, setLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      // window.location = 'home.html'; //After successful login, user will be redirected to home.html
      setLoggedIn(true);
    }
  });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (isLoaded(auth) && !isEmpty(auth)) || loggedIn ? (
          children
        ) : (
          // this may redirect to anchor in the future
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;