import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Graph from './Graph';
import EntryList from './EntryList';
import KeywordCloud from './KeywordCloud';
import UserDetails from './UserDetails';
import NewEntryForm from './NewEntryForm';
import EditEntryForm from './EditEntryForm';
import EntryDetails from './EntryDetails';
import KeywordDetails from './KeywordDetails';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase'
import * as a from './../actions/index';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cloudVisible: true
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.showForm("new");
    dispatch(action);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditForm();
    dispatch(action);
  }
  
  handleHomeClick = () => {
    const { dispatch } = this.props;
    const action = a.showDashboard();
    dispatch(action);
  }

  // bug here!! specifically when doc already exists
  handleDeleteKeywordTransaction = async (keyword, rating) => {
    var ref = this.props.firestore.collection('keywords').doc(keyword);
    await this.props.firestore.runTransaction( async (transaction) => {
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

  handleAddKeywordTransaction = async (keyword, rating) => {
    var ref = this.props.firestore.collection('keywords').doc(keyword);
    this.props.firestore.runTransaction( async (transaction) => {
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

  handleDeletingKeywords = async (keywordsArray, rating) => {
    for (const keyword of keywordsArray) {
      await this.handleDeleteKeywordTransaction(keyword.text, rating);
    }
  }

  handleDelete = (entry) => {
    const { dispatch } = this.props;
    this.props.firestore.delete({collection: 'entries', doc: entry.id});
    this.handleDeletingKeywords(entry.keywords, parseInt(entry.rating));
    const action = a.showDashboard();
    dispatch(action);
  }

  render() {
    const { selectedForm, selectedKeyword, selectedEntry } = this.props;
    let currentlyVisibleComponent = null;

    if (selectedForm != null && selectedEntry === null) {
      currentlyVisibleComponent = <NewEntryForm onSubmittingKeyword={this.handleAddKeywordTransaction}/>
    } else if (selectedForm != null && selectedEntry != null) {
      currentlyVisibleComponent = <EditEntryForm entry={selectedEntry} updateKeyword={this.handleAddKeywordTransaction} deleteOriginalKeywords={this.handleDeletingKeywords}/>
    } else if (selectedEntry != null) {
      currentlyVisibleComponent = <EntryDetails entry={selectedEntry} onClickingDelete={this.handleDelete} onClickingEdit={this.handleEditClick}/>
    } else if (selectedKeyword != null) {
      currentlyVisibleComponent = <KeywordDetails keyword={selectedKeyword} />
    } else {
      currentlyVisibleComponent = 
        <div>
          <button onClick={this.handleClick}>New Entry Button</button>
          <Graph />
          <KeywordCloud/>
        </div>
    }
    return(
      <Container fluid="md" className="dashboard">
        <Row>
          <Col sm={3}>
            <button onClick={this.handleHomeClick}>Home</button>
            <UserDetails />
            <EntryList/>
          </Col>
          <Col sm={9}>
            {currentlyVisibleComponent}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return{
    selectedForm: state.dashboardView.selectedForm,
    selectedKeyword: state.dashboardView.selectedKeyword,
    selectedEntry: state.dashboardView.selectedEntry
  }
}

Dashboard = connect(mapStateToProps)(Dashboard);
 
export default withFirestore(Dashboard);