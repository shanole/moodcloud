import React from 'react';
import KeywordForm from './KeywordForm';

function ReusableForm(props) {
  let entryRating, entryBlurb, entryKeywords;

  if (props.prefilledEntry !== undefined) {
    entryRating = props.prefilledEntry.rating;
    entryBlurb = props.prefilledEntry.blurb;
    entryKeywords = props.prefilledEntry.keywords;
  }

  return ( 
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="rating">How was your day?</label>
        <input 
          type="number" 
          id="rating" 
          name="rating" 
          min="0" max="100" 
          defaultValue = {entryRating}
          required/>
        <label htmlFor="blurb">Tell me about your day</label>
        <textarea 
          name="blurb" 
          maxLength="500" 
          placeholder="Write a short blurb about your day here" 
          defaultValue = {entryBlurb}
          required/>
        
        <KeywordForm prefilledTags={entryKeywords ? entryKeywords : []} addNewTags={props.newTagHandler}/>
        
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
   );
}

export default ReusableForm;