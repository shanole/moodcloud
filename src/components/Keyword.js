import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showKeyword } from '../actions';

const KeywordBubble = styled.div`
background-color: lightgrey;
margin: 0px 10px 10px 0px;
box-sizing: border-box;
padding: 5px 10px;
border-radius: 10px;
`

function Keyword(props) {
  const dispatch = useDispatch();
  const goToKeywordDetails = (keyword) => {
    const action = showKeyword(keyword);
    dispatch(action);
  }

  return (
    <div onClick={() => goToKeywordDetails(props.text)}>
      <KeywordBubble>{props.text}
      </KeywordBubble>
    </div>
  );
}

export default Keyword;