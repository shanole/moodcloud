import React, { useState } from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { showDashboard } from './../actions/index'

function NewEntryForm() {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const batch = firestore.batch();

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

  const entriesRef = firestore.collection('entries').doc();

  const handleKeywordSubmission = async (newKeywords, rating) => {
    for (const keyword of newKeywords) {
      await firestore.collection('keywords').doc(keyword.text).get().then( (doc) => {
        if (doc.exists) {
          let newNumRatings = doc.data().numRatings + 1;
          let oldRatingTotal = doc.data().avgRating * doc.data().numRatings;
          let newAvgRating = (oldRatingTotal + parseInt(rating)) / newNumRatings;

          batch.update(firestore.collection('keywords').doc(keyword.text), {
            numRatings: newNumRatings,
            avgRating: newAvgRating
          })
        } else {
          let newKeywordAgg = {
            numRatings: 1,
            avgRating: rating
          }
          batch.set(firestore.collection('keywords').doc(keyword.text), newKeywordAgg)
        }
      })
    }
  }

  function addPostToFirestore(event) {
    event.preventDefault();
    batch.set(entriesRef, {
      rating: event.target.rating.value,
      blurb: event.target.blurb.value,
      keywords: tagsToBeSubmitted,
      timePosted: new Date(Date.now()).toLocaleString('en-US', dateOptions),
      // internal timestamp
      timestamp: firestore.FieldValue.serverTimestamp()
    });
    handleKeywordSubmission(tagsToBeSubmitted, event.target.rating.value).then(() => batch.commit());
    dispatch(showDashboard());
  }

  // puts current number of keywords in the tag input box in the STATE
  const [tagsToBeSubmitted, setTags] = useState([]);
  function getTags(tagsArray) {
    setTags(tagsArray);
  }
  return (
    <React.Fragment>
      <h3>New Journal Entry</h3>
      <ReusableForm newTagHandler={getTags} formSubmissionHandler={addPostToFirestore} buttonText="Submit"/>
    </React.Fragment>
  );
}

export default NewEntryForm;