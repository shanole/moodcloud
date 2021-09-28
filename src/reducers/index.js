import { dashboardReducer } from './dashboard-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; 
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  dashboardView: dashboardReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer