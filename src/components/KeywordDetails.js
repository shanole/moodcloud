import React from 'react';

function KeywordDetails(props) {
  const { keyword } = props;
  console.log(keyword);
  return (
    <div>
      <h4>{keyword.text}</h4>
      <p>Average: {keyword.avgRating}</p>
      <p>Lists of posts below</p>
    </div>
  );
}

export default KeywordDetails;