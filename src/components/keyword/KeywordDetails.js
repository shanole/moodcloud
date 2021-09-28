import React from 'react';
import EntryList from './../entry/EntryList'

function KeywordDetails(props) {
  const { keyword } = props;
  
  return(
    <React.Fragment>
        <h4>{keyword.text}</h4>
        <p>Average: {keyword.avgRating}</p>
        <EntryList limit={3} keyword={keyword.text} />
      </React.Fragment>
  )
}

export default KeywordDetails;