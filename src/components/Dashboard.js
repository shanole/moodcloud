import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Graph from './Graph';
import EntryList from './EntryList';
import KeywordCloud from './KeywordCloud';
import UserDetails from './UserDetails';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeyword: null,
      selectedEntry: null,
      formVisible: false,
      entryListVisible: false,
      masterEntryList: {}
    };
  }

  render() { 
    return(
      <Container fluid="md" className="dashboard">
        <Row>
          <Col sm={3}>
            <UserDetails />
            <EntryList />
          </Col>
          <Col sm={9}>
            <button>New Entry Button</button>
            <Graph />
            <KeywordCloud />
          </Col>
        </Row>
      </Container>

    );
  }
}
 
export default Dashboard;