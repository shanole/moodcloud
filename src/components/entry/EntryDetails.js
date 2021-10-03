import React from 'react';
import Keyword from './../keyword/Keyword';
import { useDispatch } from 'react-redux';
import { toggleEditForm } from './../../actions/index';
import StyledEntryDetails from './styles/StyledEntryDetails';

function EntryDetails(props) {
  const { entry } = props;
  const dispatch = useDispatch();
  
  return(
    <StyledEntryDetails>
      <div className='detail-content'>
        <h4 className='entry-title'>{entry.timePosted}</h4>
        <div className='rating'>
          <p className='rating-label'>your mood for the day:</p>
          <p>{entry.rating}</p>
          </div>
        <p className='blurb'>{entry.blurb}</p>
        <div className='entry-keywords'>{entry.keywords.map((keyword, index) => <Keyword key={index} keywordData={keyword} />)}</div>
      </div>
      <div className='detail-mod-links'>
        <hr />
        <button onClick={() => dispatch(toggleEditForm())}>Edit</button>
        <button onClick={() => props.onClickingDelete(entry)}>Delete</button>
      </div>
    </StyledEntryDetails>
  )
}

export default EntryDetails;