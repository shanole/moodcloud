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
    const { dispatch } = this.props;
    const action = a.showDashboard();
    dispatch(action);
  }

  render() {
    const { selectedForm, selectedKeyword, selectedEntry } = this.props;
    let currentlyVisibleComponent = null;

    if (selectedForm != null && selectedEntry === null) {
      currentlyVisibleComponent = <NewEntryForm />
    } else if (selectedForm != null && selectedEntry != null) {
      currentlyVisibleComponent = <EditEntryForm entry={selectedEntry}/>
    } else if (selectedEntry != null) {
      currentlyVisibleComponent = <EntryDetails entry={selectedEntry} />
    } else if (selectedKeyword != null) {
      currentlyVisibleComponent = <KeywordDetails keyword={selectedKeyword} />
    } else {
      currentlyVisibleComponent = 
        <div>
          <button onClick={this.handleClick}>New Entry Button</button>
          <Graph />
          <KeywordCloud />
        </div>
    }
    return(
      <Container fluid="md" className="dashboard">
        <Row>
          <Col sm={3}>
            <button onClick={this.handleHomeClick}>Home</button>
            <UserDetails />
            <EntryList />
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
 
export default Dashboard;