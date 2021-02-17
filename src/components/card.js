import React from 'react';
import './volunteer.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../images/volunteerprofile.svg';
class ObjCard extends React.Component { 
  constructor (props){
    super(props);
    this.state={
      isOpen:false,
      posts:[],      
    }
console.log(props)
}
   render(props) {
  
      return (
      <div>          
   <Container>
   <Row>
   <Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Profile} />
    <Card.Body>
      <Card.Title>Volunteer:{props} </Card.Title>
      <Card.Text>
        Email: {props} <br />
        Event Name:
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>

      </Row>
      </Container>
     
   
        

      </div>
      );
  }
}
export default ObjCard;