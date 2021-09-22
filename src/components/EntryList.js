import React from 'react';
import Entry from './Entry';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { useDispatch } from 'react-redux';
import { showEntry } from './../actions/index';

function EntryList(props) {
  useFirestoreConnect({collection: 'entries'});
  
  const entries = useSelector(state => state.firestore.ordered.entries);

  const dispatch = useDispatch();

  const goToDetails = (entry) => {
    const action = showEntry(entry);
    dispatch(action);
  }

  if (isLoaded(entries) && !isEmpty(entries)) {
    return(
      <React.Fragment>
        {entries.map( entry => {
          return <div onClick={() => goToDetails(entry)} key={entry.id}><Entry 
              rating = {entry.rating}
              blurb = {entry.blurb}
              // timestamp
              keywords = {entry.keywords}
              id = {entry.id}
              key = {entry.id}
            /></div>
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

  // return (
  //   <div>
  //     <h3>Entry List Filler</h3>
  //     <ul>
  //       <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor odio, vestibulum non sollicitudin a, maximus vel nibh. Nam nunc.
  //       </li>
  //       <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor odio, vestibulum non sollicitudin a, maximus vel nibh. Nam nunc.
  //       </li>
  //       <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tortor odio, vestibulum non sollicitudin a, maximus vel nibh. Nam nunc.
  //       </li>
  //     </ul>
  //   </div>
  // );
}

export default EntryList;