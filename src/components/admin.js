import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Eventsimg from '../images/events.svg';
import Participantsimg from '../images/participants.svg';
import Volunteerimg from '../images/volunteer.svg';
import './admin.css';
import * as ReactBootstrap from 'react-bootstrap';


const Admin = () => {
    return (
    
    <div>
      <Container>
      <Row>
        <Col>
        <Card id="card">
  <Card.Img id="cardimg" variant="top" src={Eventsimg} />
  <Card.Body>
    <Card.Title>Events</Card.Title>
    <Card.Text>
      Event List...
    </Card.Text>
    <ReactBootstrap.Nav.Link href="/events" id="button">Show Events List</ReactBootstrap.Nav.Link> 
  </Card.Body>
</Card>
        </Col>
        <Col>
        <Card id="card">
  <Card.Img id="cardimg" variant="top" src={Participantsimg} />
  <Card.Body>
    <Card.Title>Participants</Card.Title>
    <Card.Text>
      Participants List...
    </Card.Text>
    <ReactBootstrap.Nav.Link href="/participant" id="button">Show Participants List</ReactBootstrap.Nav.Link> 
  </Card.Body>
</Card>

        </Col>
        <Col>
        <Card id="card">
  <Card.Img id="cardimg" variant="top" src={Volunteerimg} />
  <Card.Body>
    <Card.Title>Volunteers</Card.Title>
    <Card.Text>
      Volunteer List...
    </Card.Text>
    <ReactBootstrap.Nav.Link href="/volunteer" id="button">Show Volunteers List</ReactBootstrap.Nav.Link> 
  </Card.Body>
</Card>
        
        </Col>
      </Row>
      </Container>
      

    </div>
  
  );
};

export default Admin;