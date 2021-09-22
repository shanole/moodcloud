import React from 'react';

function EntryDetails(props) {
  return (
    <div>
      <hr />
      <h4>Details page</h4>
      <p>Rating: {props.entry.rating}</p>
      <p>Blurb: {props.entry.blurb}</p>
      <p>Keywords: {props.entry.keywords.map((keyword,index) => <li key={index}>{keyword}</li>)}</p>
    </div>
  );
}

export default EntryDetails;