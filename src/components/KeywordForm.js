// max number of tags?

import React, {useState, useEffect} from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const COUNTRIES = ['Thailand','India','Vietnam','Turkey']

const suggestions = COUNTRIES.map(country => {
  return {
    id: country,
    text: country
  };
});

const KeyCodes = {
  tab: 9,
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.tab];

function KeywordForm(props) {

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
          suggestions={suggestions}
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