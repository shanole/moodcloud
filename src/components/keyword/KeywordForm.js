// max number of tags?

import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import React, {useState, useEffect} from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

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
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default KeywordForm;