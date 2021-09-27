import React, { useState } from 'react';
import Entry from './Entry';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { getSnapshotByObject } from 'redux-firestore';

function EntryList() {
  const [pointer, setPointer] = useState(null);

  const updatePointer = () => {
    if (isLoaded(entries)) {
      setPointer(getSnapshotByObject(entries[entries.length-1]))
    }
  }
  // order by date
  useFirestoreConnect({collection: 'entries', orderBy: ['timestamp', 'desc'], limit: 2, ...(pointer && { startAfter: pointer })});
  
  const entries = useSelector(state => state.firestore.ordered.entries);

  if (isLoaded(entries) && !isEmpty(entries)) {
    return(
      <React.Fragment>
        <button onClick={() => setPointer(null)}>Back to Top</button>
        {entries.map( entry => {
          return <Entry key={entry.id} entryContent={entry}/>
        })}
        <button onClick={updatePointer}>See More</button>
      </React.Fragment>
    )
  } else if (isLoaded(entries) && isEmpty(entries)) {
    return(
      <React.Fragment>
        <button onClick={() => setPointer(null)}>Back to Top</button>
        <h3>No entries.</h3>
      </React.Fragment>
    )
  } else {
    return(
      <h3>Loading...</h3>
    )
  }
}

export default EntryList;