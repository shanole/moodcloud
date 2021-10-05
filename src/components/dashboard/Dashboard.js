import React, { useState } from 'react';
import { useFirebase, useFirestore } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import * as a from './../../actions/index';
import Graph from './Graph';
import EntryList from '../entry/EntryList';
import UserDetails from './UserDetails';
import NewEntryForm from './../entry/NewEntryForm';
import EditEntryForm from './../entry/EditEntryForm';
import EntryDetails from './../entry/EntryDetails';
import KeywordDetails from './../keyword/KeywordDetails';
import TopKeywords from './TopKeywords';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

function Dashboard() {
  const firebase = useFirebase();
  const firestore = useFirestore();
  const [timespan, setTimespan] = useState(7);
  const dispatch = useDispatch();
  const dashboardView = useSelector(state => state.dashboardView);

  const handleDeleteKeywordTransaction = async (keyword, rating) => {
    const uuid = firebase.auth().currentUser.uid;

    var ref = firestore.collection('keywords').doc(uuid).collection('userKeywords').doc(keyword);
    await firestore.runTransaction( async (transaction) => {
      return transaction.get(ref).then(doc => {
        if (!doc.exists) {
          console.log("document doesn't exist");
        }
        let newNumRating = doc.data().numRatings-1;       
        if (newNumRating > 0) {
          let oldRatingTotal = doc.data().avgRating * doc.data().numRatings;
          let newAvgRating = (oldRatingTotal - (rating)) / newNumRating;
          transaction.set(ref, {text: keyword, numRatings: newNumRating, avgRating: newAvgRating})
        } else {
          transaction.delete(ref)
        } 
      })
    })
  }

  const handleAddKeywordTransaction = async (keyword, rating) => {
    const uuid = firebase.auth().currentUser.uid;

    var ref = firestore.collection('keywords').doc(uuid).collection('userKeywords').doc(keyword);
    firestore.runTransaction( async (transaction) => {
      return transaction.get(ref).then( (doc) => {
        if (doc.exists) {
          let newNumRatings = doc.data().numRatings + 1;
          let oldRatingTotal = doc.data().avgRating * doc.data().numRatings;
          let newAvgRating = (oldRatingTotal + (rating)) / newNumRatings;
          transaction.set(ref, {text: keyword, numRatings: newNumRatings, avgRating: newAvgRating})
        } else {
          transaction.set(ref, {text: keyword, numRatings: 1, avgRating: (rating)})
        }
      })
    })
  }

  const handleDeletingKeywords = async (keywordsArray, rating) => {
    for (const keyword of keywordsArray) {
      await handleDeleteKeywordTransaction(keyword.text, rating);
    }
  }

  const handleDelete = (entry) => {
    firestore.delete({collection: 'entries', doc: entry.id});
    handleDeletingKeywords(entry.keywords, parseInt(entry.rating));
    const action = a.showDashboard();
    dispatch(action);
  }

  const { selectedForm, selectedKeyword, selectedEntry } = dashboardView;
  let currentlyVisibleComponent;
  let modal;

  if (selectedForm != null && selectedEntry === null) {
    currentlyVisibleComponent = <NewEntryForm onSubmittingKeyword={handleAddKeywordTransaction}/>
  } else if (selectedForm != null && selectedEntry != null) {
    currentlyVisibleComponent = <EditEntryForm entry={selectedEntry} updateKeyword={handleAddKeywordTransaction} deleteOriginalKeywords={handleDeletingKeywords}/>
  } else if (selectedEntry != null) {
    currentlyVisibleComponent = <EntryDetails entry={selectedEntry} onClickingDelete={handleDelete} />
  } else if (selectedKeyword != null) {
    currentlyVisibleComponent = <KeywordDetails keyword={selectedKeyword} />
  } else {
    currentlyVisibleComponent = null;
  }
  
  modal = (currentlyVisibleComponent) ? <div className="modal-comp"><div className='close-modal' onClick={() => dispatch(a.showDashboard())}><FontAwesomeIcon icon='long-arrow-alt-left' /> back</div>
    {currentlyVisibleComponent}
    </div> : null;

  return(
    <React.Fragment>
      <Container fluid="md" className="dashboard-container">
        <Row>
            <UserDetails />           
        </Row>
        <Row className='columns'>
          <Col className='col-l' sm={5}>
            <h3 className='section-heading'>mood chart</h3>
            <div className='time-toggle'>
              <button onClick={() => setTimespan(7)}>past week</button>
              <button onClick={() => setTimespan(30)}>past month</button>
            </div>
            <Graph timespan={timespan}/>
            <TopKeywords timespan={timespan}/>
          </Col>
          <Col className='col-r' sm={5}>
            <h3 className='section-heading'>entries</h3>
            <EntryList limit={3}/>
          </Col>
          {modal}
        </Row>
      </Container>
    </React.Fragment>
  );
}

 
export default Dashboard;