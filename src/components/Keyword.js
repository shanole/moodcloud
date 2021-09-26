import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showKeyword } from '../actions';
import { useFirestore } from 'react-redux-firebase';

const KeywordBubble = styled.div`
background-color: lightgrey;
margin: 0px 10px 10px 0px;
box-sizing: border-box;
padding: 5px 10px;
border-radius: 10px;
`

function Keyword(props) {
  const firestore = useFirestore();
  const dispatch = useDispatch();

  const goToKeywordDetails = (keyword) => {
    var keywordRef = firestore.collection('keywords').doc(keyword);
    keywordRef.get().then((doc) => {
      const action = showKeyword(doc.data());
      dispatch(action);
    })
  }

  return (
    <div onClick={() => goToKeywordDetails(props.keyword.text)}>
      <KeywordBubble>{props.keyword.text}
      </KeywordBubble>
    </div>
  );
}

export default Keyword;