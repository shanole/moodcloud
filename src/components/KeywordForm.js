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

  const [tags, setTags] = useState([
  ]);

  useEffect(() => props.addNewTags(tags) )

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
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
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
    </React.Fragment>
  );
}

export default KeywordForm;