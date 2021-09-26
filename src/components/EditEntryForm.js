import React, {useState} from 'react';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import { useDispatch } from 'react-redux'
import { showEntry } from './../actions/index'


function EditEntryForm(props) {
  const { entry } = props;
  const firestore = useFirestore();
  const dispatch = useDispatch();

  async function handleEditPostFormSubmission(event) {
    event.preventDefault();
    const propertiesToUpdate = {
      rating: event.target.rating.value,
      blurb: event.target.blurb.value,
      keywords: tagsToBeSubmitted,
    }

    const handleKeywordSubmission = async (newKeywords, rating) => {
      for (const keyword of newKeywords) {
        await props.updateKeyword(keyword.text, parseInt(rating));
      }
    }

    const originalKeywords = entry.keywords;
    const originalRating = entry.rating;

    firestore.update({collection: 'entries', doc: entry.id}, propertiesToUpdate).then( async () => {      
      var docRef = firestore.collection('entries').doc(entry.id); 
      docRef.get().then((doc) => {
        if (doc.exists) {
          const action = showEntry(doc.data());
          dispatch(action);
        } else {
          console.log("No such document");
        }
      })
    });
    props.deleteOriginalKeywords(originalKeywords, originalRating).then(()=>
      handleKeywordSubmission(tagsToBeSubmitted, event.target.rating.value)
    )

  }

  const [tagsToBeSubmitted, setTags] = useState([]);
  function updateTags(tagsArray) {
    setTags(tagsArray);
  }

  return (
    <React.Fragment>
      <h3>Edit post here</h3>
      <ReusableForm newTagHandler={updateTags} prefilledEntry = {entry} formSubmissionHandler={handleEditPostFormSubmission} buttonText="Update entry" />
    </React.Fragment>
  );
}

export default EditEntryForm;