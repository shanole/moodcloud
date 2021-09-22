import React, { useState } from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { showDashboard } from './../actions/index'

function NewEntryForm() {
  const firestore = useFirestore();
  const dispatch = useDispatch();

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

  function addPostToFirestore(event) {
    event.preventDefault();
    const action = showDashboard();
    dispatch(action);
    return firestore.collection('entries').add({
      rating: event.target.rating.value,
      blurb: event.target.blurb.value,
      // temporary solution for keywords
      keywords: [event.target.keyword1.value, event.target.keyword2.value, event.target.keyword3.value],
      timePosted: new Date(Date.now()).toLocaleString('en-US', dateOptions),
      // internal timestamp
      timestamp: firestore.FieldValue.serverTimestamp()
    })
  }

  // puts current number of keywords in the tag input box in the STATE
  const [tagsToBeSubmitted, setTags] = useState([]);
  function getTags(tagsArray) {
    setTags(tagsArray);
    console.log(tagsToBeSubmitted);
  }


  return (
    <React.Fragment>
      <h3>New Journal Entry</h3>
      <ReusableForm newTagHandler={getTags} formSubmissionHandler={addPostToFirestore} buttonText="Submit"/>
    </React.Fragment>
  );
}

export default NewEntryForm;