import React from 'react';
import EntryList from './../entry/EntryList'
import StyledKeywordDetails from './styles/StyledKeywordDetails';
import { Accordion } from 'react-bootstrap';

function KeywordDetails(props) {
  const { keyword } = props;
  
  return(
    <StyledKeywordDetails rating={Math.round(keyword.avgRating)}>
        <div className='keyword-summary'>
          <h4 className='keyword-title'>{keyword.text}</h4>
          <p>On average, you rate this keyword:</p>
          <p className='rating-fraction'><sup className='avg-rating'>{keyword.avgRating}</sup>/<sub>10</sub></p>
        </div>
        <div className='keyword-entries'>
          <Accordion flush>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                see all entries with this keyword
              </Accordion.Header>
              <Accordion.Body>
                <EntryList limit={3} keyword={keyword.text} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </StyledKeywordDetails>
  )
}

export default KeywordDetails;