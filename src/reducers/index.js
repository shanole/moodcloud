import { dashboardReducer } from './dashboard-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; 

const rootReducer = combineReducers({
  dashboardView: dashboardReducer,
  firestore: firestoreReducer
});

export default rootReducer