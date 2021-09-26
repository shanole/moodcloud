import React from 'react';
import Keyword from './Keyword';

function EntryDetails(props) {
  const { entry } = props;

  return(
    <React.Fragment>
      <h4>{entry.timePosted}</h4>
      <p>Rating: {entry.rating}</p>
      <p>Blurb: {entry.blurb}</p>
      <div style={{display: 'flex'}}>{entry.keywords.map((keyword, index) => <Keyword key={index} keywordData={keyword} />)}</div>
      <button onClick={props.onClickingEdit}>Edit</button>
      <button onClick={() => props.onClickingDelete(entry)}>Delete</button>
    </React.Fragment>
  )
}

export default EntryDetails;