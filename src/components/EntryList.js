import React, { useState } from 'react';
import Entry from './Entry';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { getSnapshotByObject } from 'redux-firestore';

function EntryList(props) {
  const [cursor, setCursor] = useState(null);

  const updateCursor = () => {
    setCursor(getSnapshotByObject(entries[entries.length-1]));
  }
  // order by date
  useFirestoreConnect({collection: 'entries', orderBy: ['timestamp', 'desc'], limit: 3, ...(cursor && { startAfter: cursor})});

  const entries = useSelector(state => state.firestore.ordered.entries);
  
  if (isLoaded(entries) && !isEmpty(entries)) {
    return(
      <React.Fragment>
        <button onClick={() => setCursor(null)}>Back to Top</button>
      <div style={{height: "300px", overflowY: "auto"}}>
        {entries.map( entry => {
          return <Entry key={entry.id} entryContent={entry}/>
        })}
        <button onClick={updateCursor}>more</button>
      </div>
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