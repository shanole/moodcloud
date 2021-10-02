import React, { useState } from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { showDashboard } from './../../actions/index'
import dateOptions from '../util/dateOptions';

function NewEntryForm(props) {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.firebase.auth);

  const handleKeywordSubmission = async (newKeywords, rating) => {
    for (const keyword of newKeywords) {
      await props.onSubmittingKeyword(keyword.text, parseInt(rating));
    }
  }

  function addPostToFirestore(event) {
    event.preventDefault();
    firestore.collection('entries').add(
      {
      uuid: auth.uid,
      rating: event.target.rating.value,
      blurb: event.target.blurb.value,
      keywords: tagsToBeSubmitted,
      timePosted: new Date(Date.now()).toLocaleString('en-US', dateOptions),
      // internal timestamp
      timestamp: firestore.FieldValue.serverTimestamp()
    });
    handleKeywordSubmission(tagsToBeSubmitted, event.target.rating.value);
    dispatch(showDashboard());
  }

  // puts current number of keywords in the tag input box in the STATE
  const [tagsToBeSubmitted, setTags] = useState([]);
  function getTags(tagsArray) {
    setTags(tagsArray);
  }

  console.log(auth);

  return (
    <React.Fragment>
      <h3>New Journal Entry</h3>
      <ReusableForm newTagHandler={getTags} formSubmissionHandler={addPostToFirestore} buttonText="Submit"/>
    </React.Fragment>
  );
}

export default NewEntryForm;