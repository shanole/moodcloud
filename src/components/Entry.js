import React from 'react';

function Entry(props) {
  return (
    <div>
      <hr />
      <p>Rating: {props.rating}</p>
      <p>Blurb: {props.blurb}</p>
      <p>Keywords: {props.keywords.map((keyword, index) => <li key={index}>{keyword}</li>)}</p>
    </div>
  );
}

export default Entry;