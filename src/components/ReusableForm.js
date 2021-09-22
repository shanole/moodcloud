import React from 'react';

function ReusableForm(props) {
  return ( 
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="rating">How was your day?</label>
        <input type="number" id="rating" name="rating" min="0" max="100" required/>
        <label htmlFor="blurb">Tell me about your day</label>
        <textarea name="blurb" maxLength="500" placeholder="Write a short blurb about your day here" required/>
        <label htmlFor="keyword1">Keyword1</label>
        <input type="text" name="keyword1"/>
        <label htmlFor="keyword2">Keyword2</label>
        <input type="text" name="keyword2"/>
        <label htmlFor="keyword3">Keyword3</label>
        <input type="text" name="keyword3"/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
   );
}

export default ReusableForm;