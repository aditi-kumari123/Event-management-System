import React from 'react';
import './volunteer.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Music from '../images/music.svg';
import Poster from '../images/postermaking.svg';
import Treasurehunt from '../images/treasurehunt.svg';
import Badminton from '../images/badminton.svg';
import Basketball from '../images/basketball.svg';
import Race from '../images/race.svg';
const participant = () => {
    return(
        <div>
            <Container>
   <Row>
   <Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Race} />
    <Card.Body>
      <Card.Title>Event Name : 500 Meter Race </Card.Title>
      <Card.Text>
        <button id="addvoln">Show Participants</button>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Music} />
    <Card.Body>
      <Card.Title>Event Name : Group Song Competition</Card.Title>
      <Card.Text>
        <button id="addvoln">Show Participants</button>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Poster} />
    <Card.Body>
      <Card.Title>Event Name : Poster Making Competition</Card.Title>
      <Card.Text>
        <button id="addvoln">Show Participants</button>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>

      </Row>
      <Row>
   <Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Treasurehunt} />
    <Card.Body>
      <Card.Title>Event Name : Treasure Hunt </Card.Title>
      <Card.Text>
        <button id="addvoln">Show Participants</button>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Badminton} />
    <Card.Body>
      <Card.Title>Event Name : Badminton Competition</Card.Title>
      <Card.Text>
        <button id="addvoln">Show Participants</button>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Basketball} />
    <Card.Body>
      <Card.Title>Event Name : Basketball Competition</Card.Title>
      <Card.Text>
        <button id="addvoln">Show Participants</button>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>

      </Row>

      </Container>   
        </div>
    );
};
export default participant;