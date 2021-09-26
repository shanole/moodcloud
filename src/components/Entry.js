import React from 'react';
import Keyword from './Keyword';
import { useDispatch } from 'react-redux';
import { showEntry } from './../actions/index';

function Entry(props) {
  const { entryContent } = props;
  const dispatch = useDispatch();

  const goToDetails = (entry) => {
    const action = showEntry(entry);
    dispatch(action);
  }

  return (
    <React.Fragment>
      <hr />
      <div onClick={()=> goToDetails(entryContent)}>
        <h4>{entryContent.timePosted}</h4>
        <p>Rating: {entryContent.rating}</p>
        <p>Blurb: {entryContent.blurb}</p>
      </div>
      <div style={{display: 'flex'}}>{entryContent.keywords.map((keyword, index) => <Keyword key={index} keywordData={keyword} />)}</div>
    </React.Fragment>
  );
}

export default Entry;