// still redirects to landing page even if ur logged in?

import React from 'react'
import {  Route,  Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function PrivateRoute({ children, ...rest }) {
  useFirebaseConnect('auth');
  const auth = useSelector(state => state.firebase.auth);

  return (
    <Route
      {...rest}
      render={({ location }) => 
      isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/#account",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;