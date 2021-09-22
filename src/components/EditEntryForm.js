// currently redirects to dashboard, having problems redirecting to original post

import React from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import { useDispatch } from 'react-redux'
import { showEntry, showDashboard } from './../actions/index'

function EditEntryForm(props) {
  const { entry } = props;
  const firestore = useFirestore();
  const dispatch = useDispatch();

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    const propertiesToUpdate = {
      rating: event.target.rating.value,
      blurb: event.target.blurb.value,
      keywords: [event.target.keyword1.value, event.target.keyword2.value, event.target.keyword3.value],
    }
    return firestore.update({collection: 'entries', doc: entry.id}, propertiesToUpdate).then(() => {      
      // this redirect isn't really working well
      // const action = showEntry(entry);
      const action = showDashboard();
      dispatch(action)});
  }

  return (
    <React.Fragment>
      <h3>Edit post here</h3>
      <ReusableForm prefilledEntry = {entry} formSubmissionHandler={handleEditPostFormSubmission} buttonText="Update entry" />
    </React.Fragment>
  );
}

export default EditEntryForm;