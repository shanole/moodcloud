// having problems using firestore connect to listen for changes in individual entry
import React from 'react';
import Keyword from './Keyword';
// import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
// import { useSelector } from 'react-redux'


function EntryDetails(props) {
  // useFirestoreConnect([
  //   {collection: 'entries'}
  // ])
  // const entry = useSelector(state => state.firestore.ordered.entries)[props.entry.id];

  // if (isLoaded(entry)) {
  //   return (
  //     <div>
  //       <hr />
  //       <h4>Details page</h4>

  //       <p>Rating: {entry.rating}</p>
  //       <p>Blurb: {entry.blurb}</p>
  //       <p>Keywords: {entry.keywords.map((keyword,index) => <li key={index}>{keyword}</li>)}</p>
        
  //       <button onClick={handleEditClick}>Edit</button>
  //     </div>
  //   )
  // } else {
  //   console.log(entry);
  //   return(<h3>Loading...</h3>)
  // };
  const { entry } = props;
  return(
    <React.Fragment>
      <h4>{entry.timePosted}</h4>
      <p>Rating: {entry.rating}</p>
      <p>Blurb: {entry.blurb}</p>
      <p style={{display: 'flex'}}>{entry.keywords.map((keyword) => <Keyword text={keyword.text} />)}</p>
      <button onClick={props.onClickingEdit}>Edit</button>
      <button onClick={() => props.onClickingDelete(props.entry.id)}>Delete</button>
    </React.Fragment>
  )
}

export default EntryDetails;