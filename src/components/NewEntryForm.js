// figure out - adding new keywords to other firestore collection

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
  const keywordsRef = firestore.collection('keywords').doc();

  console.log('entriesRef', entriesRef)

  const handleSubmitBatch = async (newEntry, newKeywords) => {
    batch.set(entriesRef, newEntry);

    // if keyword does not exist, add to keywords collection.
    // if it does, increment count and calculate new average - THIS DOESN"T WORK YET
    await newKeywords.forEach( (keyword) => {
      var keywordAggRef = firestore.collection('keywords').doc(keyword.text);
      keywordAggRef.get().then( (doc) => {
        if (doc.exists) {
          let newNumRatings = doc.data().numRatings + 1;
          let oldRatingTotal = doc.data().avgRating * doc.data().numRatings;
          let newAvgRating = (oldRatingTotal + newEntry.rating) / newNumRatings;

          batch.update(keywordAggRef, {
            numRatings: newNumRatings,
            avgRating: newAvgRating
          })
        } else {
          let newKeywordAgg = {
            numRatings: 1,
            avgRating: newEntry.rating
          }
          batch.set(keywordsRef, newKeywordAgg)
        }
        batch.commit().then( () => dispatch(showDashboard() ))
      }
      )
    })
      
    // batch.commit().then(() => {
    //     dispatch(showDashboard());
    //   }  
    // );
  }

  // function addPostToFirestore(event) {
  //   event.preventDefault();
  //   const action = showDashboard();
  //   dispatch(action);
  //   return entriesRef.add({
  //     rating: event.target.rating.value,
  //     blurb: event.target.blurb.value,
  //     keywords: tagsToBeSubmitted,
  //     timePosted: new Date(Date.now()).toLocaleString('en-US', dateOptions),
  //     // internal timestamp
  //     timestamp: firestore.FieldValue.serverTimestamp()
  //   })
  // }

  function addPostToFirestore(event) {
    event.preventDefault();
    handleSubmitBatch({
          rating: event.target.rating.value,
          blurb: event.target.blurb.value,
          keywords: tagsToBeSubmitted,
          timePosted: new Date(Date.now()).toLocaleString('en-US', dateOptions),
          // internal timestamp
          timestamp: firestore.FieldValue.serverTimestamp()
        }, tagsToBeSubmitted)
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