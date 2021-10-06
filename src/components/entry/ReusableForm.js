import React from 'react';
import KeywordForm from './../keyword/KeywordForm';
import StyledForm from './styles/StyledForm';

function ReusableForm(props) {
  let entryRating, entryBlurb, entryKeywords;

  if (props.prefilledEntry !== undefined) {
    entryRating = props.prefilledEntry.rating;
    entryBlurb = props.prefilledEntry.blurb;
    entryKeywords = props.prefilledEntry.keywords;
  }

  return ( 
    <StyledForm>
      <h3 className='form-title'>{props.title}</h3>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="rating">How was your day? (0 = terrible! 10 = best day ever!)</label>
        <div className='range'>
          <input 
            type="range" 
            id="rating" 
            name="rating" 
            min="0" max="10" step="1" 
            defaultValue = {entryRating}
            required/>
            <ul className="range-labels">
              <li className="active selected">0</li>
              <li>1 </li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
        </div>
        <label htmlFor="blurb">Tell me about your day</label>
        <textarea 
          name="blurb" 
          maxLength="500" 
          placeholder="Write a short blurb about your day here" 
          defaultValue = {entryBlurb}
          required/>
        
        <KeywordForm prefilledTags={entryKeywords ? entryKeywords : []} addNewTags={props.newTagHandler}/>
        
        <button className='btn form-submit' type="submit">{props.buttonText}</button>
      </form>
    </StyledForm>
   );
}

export default ReusableForm;