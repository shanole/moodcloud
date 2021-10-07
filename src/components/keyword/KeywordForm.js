// max number of tags?

import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import React, {useState, useEffect} from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import styled from 'styled-components';
import theme from '../../theme';
import PropTypes from "prop-types";


const StyledTags = styled.div`
.ReactTags__selected {
    span.ReactTags__tag {
    border: none;
    background: ${theme.colors.cream};
    color: ${theme.colors.navy};
    font-size: 14px;
    display: inline-block;
    padding: 5px 8px;
    margin: 0 5px;
    border-radius: 10px;
  }
  .ReactTags__remove {
    color: black;
    background: none;
    margin-left: 8px;
    cursor: pointer;
  }
}

.ReactTags__suggestions {
  position: absolute;
  ul {
    list-style-type: none;
    background: white;
    width: 200px;
  }
  li {
    padding: 5px 6px;
    margin: 0
    
    mark {
      background: none;
      font-weight: 600;
    }
  }
  li.ReactTags__activeSuggestion {
    background: none;
    cursor: pointer;
  }
}
`

const KeyCodes = {
  tab: 9,
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab];

function KeywordForm(props) {
  const auth = useSelector(state => state.firebase.auth);

  useFirestoreConnect({
    collection: 'keywords',
    doc: auth.uid,
    subcollections: [{collection: 'userKeywords', orderBy: ['numRatings', 'desc']}],
    storeAs: 'userKeywords'
  });
  
  const keywords = useSelector(state => state.firestore.ordered.userKeywords);
  let keywordSuggestions =[];

  if(isLoaded(keywords)) {
    keywords.forEach(keyword => 
      keywordSuggestions.push(
        {
          id: keyword.text,
          text: keyword.text
        })
    )}

  const [tags, setTags] = useState(props.prefilledTags);

  useEffect(() => props.addNewTags(tags) )

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  return (
    <StyledTags>
      <label>Keywords:</label>
        <ReactTags
          tags={tags}
          suggestions={keywordSuggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          allowDragDrop={false}
          inputFieldPosition="top"
          autocomplete
        />
    </StyledTags>
  );
}

KeywordForm.propTypes = {
  prefilledTags: PropTypes.array,
  addNewTags: PropTypes.func
}

export default KeywordForm;