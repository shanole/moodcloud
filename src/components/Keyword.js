import React from 'react';
import styled from 'styled-components';

const KeywordBubble = styled.div`
background-color: lightgrey;
margin: 0px 10px 10px 0px;
box-sizing: border-box;
padding: 5px 10px;
border-radius: 10px;
`

function Keyword(props) {
  return (
    <KeywordBubble>{props.text}
    </KeywordBubble>
  );
}

export default Keyword;