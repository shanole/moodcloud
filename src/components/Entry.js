import React from 'react';
import Keyword from './Keyword';

function Entry(props) {
  return (
    <div>
      <hr />
      <h4>{props.timePosted}</h4>
      <p>Rating: {props.rating}</p>
      <p>Blurb: {props.blurb}</p>
      <div style={{display: 'flex'}}>{props.keywords.map((keyword, index) => <Keyword key={index} text={keyword.text} />)}</div>
    </div>
  );
}

export default Entry;