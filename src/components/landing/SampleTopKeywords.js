import React from 'react';
import KeywordPill from '../keyword/styles/KeywordPill';
import styled from 'styled-components';
import theme from '../../theme';

const SampleKeywordStyle = styled.div`
width: 80%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
align-content: center;
padding: 70px 30px;
.text{
  color: white;
  &:hover {
    color: ${theme.colors.navy};
  }
  font-size: 0.9em;
}
@media (max-width: 768px) {
  padding: 0px;
}
`


function SampleTopKeywords() {
  const sampleKeywords = [{text: 'work', rating: 4},{text: 'friends', rating: 8},{text: 'exercise', rating: 5},{text: 'hiking', rating: 7},{text: 'school', rating: 2},{text: 'netflix', rating: 6}
  ]
  return (
    <SampleKeywordStyle>
      {sampleKeywords.map((keyword, index) => {
        return <KeywordPill key={index} rating={keyword.rating}><div className='text'>{keyword.text}</div></KeywordPill>
      })}
    </SampleKeywordStyle>
  );
}

export default SampleTopKeywords;