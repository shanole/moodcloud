import React from 'react';
import StyledEntry from './styles/StyledEntry';
import Keyword from './../keyword/Keyword';
import { useDispatch } from 'react-redux';
import { showEntry } from './../../actions/index';

function Entry(props) {
  const { entryContent } = props;
  const dispatch = useDispatch();

  const goToDetails = (entry) => {
    const action = showEntry(entry);
    dispatch(action);
  }

  return (
    <StyledEntry>
      <div onClick={()=> goToDetails(entryContent)}>
        <h4 className='entry-title'>{entryContent.timePosted}</h4>
        <div className='entry-content'>
          <div className='content rating'>
            <div className='number'>{entryContent.rating}</div>
            <p className='rating-label'>mood</p>
            </div>
          <div className='content blurb'>{entryContent.blurb}</div>
        </div>
      </div>
      <div className='entry-keywords'>{entryContent.keywords.map((keyword, index) => <Keyword rating={entryContent.rating} key={index} keywordData={keyword} />)}</div>
    </StyledEntry>
  );
}

export default Entry;