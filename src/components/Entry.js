import React from 'react';

function Entry(props) {
  return (
    <div>
      <hr />
      <h4>{props.timePosted}</h4>
      <p>Rating: {props.rating}</p>
      <p>Blurb: {props.blurb}</p>
      <p>Keywords: {props.keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}</p>
    </div>
  );
}

export default Entry;