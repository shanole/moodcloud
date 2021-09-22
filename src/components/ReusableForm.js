import React from 'react';

function ReusableForm(props) {
  return ( 
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label for="rating">How was your day?</label>
        <input type="number" id="rating" name="rating" min="0" max="100" />
        <label for="blurb">Tell me about your day</label>
        <textarea name="blurb" maxLength="500" placeholder="Write a short blurb about your day here"/>
        <label for="keyword1">Keyword1</label>
        <input type="text" name="keyword1"/>
        <label for="keyword2">Keyword2</label>
        <input type="text" name="keyword2"/>
        <label for="keyword3">Keyword3</label>
        <input type="text" name="keyword3"/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
   );
}

export default ReusableForm;