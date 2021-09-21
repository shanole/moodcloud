import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Graph from './Graph';
import EntryList from './EntryList';
import KeywordCloud from './KeywordCloud';
import UserDetails from './UserDetails';
import NewEntryForm from './NewEntryForm';
import EditEntryForm from './EditEntryForm';
import EntryDetails from './NewEntryForm';
import KeywordDetails from './KeywordDetails';
import { connect } from 'react-redux';
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
    const action = a.showForm("edit");
    dispatch(action);
  }
  
  handleHomeClick = () => {
    console.log("home button clicked");
    const { dispatch } = this.props;
    const action = a.showDashboard();
    dispatch(action);
  }

  render() {
    console.log(this.props)
    const { selectedForm, selectedKeyword, selectedEntry } = this.props;
    let currentlyVisibleComponent = null;

    if (selectedForm != null) {
      if (selectedForm === "new") {
        currentlyVisibleComponent = <NewEntryForm />
      } else {
        currentlyVisibleComponent = <EditEntryForm />
      }
    } else if (selectedEntry != null) {
      currentlyVisibleComponent = <EntryDetails entry={selectedEntry} />
    } else if (selectedKeyword != null) {
      currentlyVisibleComponent = <KeywordDetails keyword={selectedKeyword} />
    } else {
      currentlyVisibleComponent = 
        <div>
          <button onClick={this.handleClick}>New Entry Button</button>
          <button onClick={this.handleEditClick}>Edit Entry Button</button>
          <Graph />
          <KeywordCloud />
        </div>
    }
    return(
      <Container fluid="md" className="dashboard">
        <Row>
          <Col sm={3}>
            <UserDetails />
            <EntryList />
            <button onClick={this.handleHomeClick}>Home</button>
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
    selectedForm: state.selectedForm,
    selectedKeyword: state.selectedKeyword,
    selectedEntry: state.selectedEntry
  }
}

Dashboard = connect(mapStateToProps)(Dashboard);
 
export default Dashboard;