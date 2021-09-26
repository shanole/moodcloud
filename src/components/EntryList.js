import React from 'react';
import Entry from './Entry';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'


function EntryList(props) {
  // order by date
  useFirestoreConnect({collection: 'entries', orderBy: ['timestamp', 'desc']});
  
  const entries = useSelector(state => state.firestore.ordered.entries);

  if (isLoaded(entries) && !isEmpty(entries)) {
    return(
      <React.Fragment>
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

export default EntryList;