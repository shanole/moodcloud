import React from 'react';
import Entry from './Entry';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


function KeywordDetails(props) {
  const { keyword } = props;
  useFirestoreConnect({
    collection: 'entries',
    storeAs: 'keywordEntries',
    orderBy: ['timestamp', 'desc'],
    where: ['keywords', 'array-contains', {id: keyword.text, text: keyword.text}]
  });

  const entries = useSelector(state => state.firestore.ordered.keywordEntries)

  console.log(entries);
  if (isLoaded(entries) && !isEmpty(entries)) {
    return(
      <React.Fragment>
        <h4>{keyword.text}</h4>
        <p>Average: {keyword.avgRating}</p>
        {entries.map( entry => {
          return <Entry key={entry.id} entryContent={entry}/>
        })}
      </React.Fragment>
    )
  } else if (isLoaded(entries) && isEmpty(entries)) {
    return(
      <h3>No entries yet.</h3>
    )
  } else {
    return(
      <h3>Loading...</h3>
    )
  }
}

export default KeywordDetails;