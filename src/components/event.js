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
import ReactModal from 'react-modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Events extends React.Component{
  constructor (){
    super();
    this.state={
      isOpen:false
      
    }
  }
  render() {
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
        Volunteer Name :  <br />
        Event Venue :  <br />
        Event Time : <br/>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Music} />
    <Card.Body>
      <Card.Title>Event Name : Group Song </Card.Title>
      <Card.Text>
        Volunteer Name :  <br />
        Event Venue :  <br />
        Event Time : <br/>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Poster} />
    <Card.Body>
      <Card.Title>Event Name : Poster Making </Card.Title>
      <Card.Text>
        Volunteer Name :  <br />
        Event Venue :  <br />
        Event Time : <br/>
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
        Volunteer Name :  <br />
        Event Venue :  <br />
        Event Time : <br/>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Badminton} />
    <Card.Body>
      <Card.Title>Event Name : Badminton </Card.Title>
      <Card.Text>
        Volunteer Name :  <br />
        Event Venue :  <br />
        Event Time : <br/>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Basketball} />
    <Card.Body>
      <Card.Title>Event Name : Basketball </Card.Title>
      <Card.Text>
        Volunteer Name :  <br />
        Event Venue :  <br />
        Event Time : <br/>
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>

      </Row>

      </Container>   

      <button id="addvoln" onClick={()=>{this.setState({isOpen:true});
        }}> Add New Event </button>
        <div>
        <ReactModal
          isOpen={this.state.isOpen}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          contentLabel="Modal" 
          className="ReactModal"   
        >    
               <Form className="form">
               <h2>Add new Event</h2>
                 <Form.Group controlId="formBasicName">
                    <Form.Label>Event Name</Form.Label>
                     <input type="text" placeholder="Name" name="Name" />
                 </Form.Group>
                 <Form.Group controlId="formBasicEventVenue">
                    <Form.Label>Event Venue</Form.Label>
                     <input type="text" placeholder="Venue" name="Venue" />
                 </Form.Group>
                 <Form.Group controlId="formBasicEventTime">
                    <Form.Label>Event Time</Form.Label>&nbsp;&nbsp;
                     <input type="text" placeholder="Time" name="time" />
                 </Form.Group>
                 <Button id="btn" type="submit" >Add Event</Button> &nbsp;
                      
                 <Button id="btn" onClick={()=>{this.setState({isOpen:false});}}> Close </Button>
              </Form>
          
              </ReactModal>
        </div>     

        </div>
    );
      }
};
export default Events;