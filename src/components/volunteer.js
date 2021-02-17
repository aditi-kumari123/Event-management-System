import React from 'react';
import './volunteer.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../images/volunteerprofile.svg';
import ReactModal from 'react-modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ObjCard from './card';
class volunteer extends React.Component { 

  constructor (){
    super();
    this.state={
      isOpen:false,
      posts:[],      
    }
  }
  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    var self = this;
    
    xhttp.onreadystatechange = function(e){
      console.log(this);
      if (xhttp.readyState === 4 && xhttp.status === 200){
        console.log("ok, response :", this.response);
        self.setState({
          posts: JSON.parse(this.response)
        });
      }
    }
    xhttp.open("get", '/admin/volunteers/', true);
    xhttp.send();
  console.log(this.state.posts)
  }
      // getVolunteer = (json) => {
      // const xhr = new XMLHttpRequest();
      // var self = this;
      // xhr.open('GET', '/admin/volunteers/');
      // xhr.responseType = "json";
      // xhr.onreadystatechange = function (e) {
      //   const fetchedVolunteer = xhr.response; 
      //             self.setState({
      //               item: JSON.parse(fetchedVolunteer)
      //              });
      // console.log(this.state.posts);
      // };
      // xhr.send();
      // console.log(this.item)

      // }; 
      

      render(props) {
        // if(this.state.item){
        //   var cards = []
        //   for(let i=0;i < this.state.item.length;i++){
        //     cards.push(<ObjCard data= {this.state.item[i]}/>)
        //   }
        // }
  
      return (
      <div>
        {/* {cards} */}
        {/* <ul>
          {
            this.state.posts.volunteers.map(
              post => {
                return <li>{ post.name }</li>;
              })
          }
          </ul> */}
        <Container>
   <Row>
   <Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Profile} />
    <Card.Body>
      <Card.Title>Volunteer: </Card.Title>
      <Card.Text>
        Email: <br />
        Event Name:
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Profile} />
    <Card.Body>
      <Card.Title>Volunteer: </Card.Title>
      <Card.Text>
        Email: <br />
        Event Name:
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>
<Col>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Profile} />
    <Card.Body>
      <Card.Title>Volunteer: </Card.Title>
      <Card.Text>
        Email: <br />
        Event Name:
      </Card.Text> 
    </Card.Body>
  </Card>
  
</Col>

      </Row>
      </Container>

        <button id="addvoln" onClick={()=>{this.setState({isOpen:true});
        }}> Add New Volunteer </button>
        <div>
        <ReactModal
          isOpen={this.state.isOpen}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          contentLabel="Modal" 
          className="ReactModal"   
        >    
               <Form className="form">
               <h2>Add new Volunteer</h2>
                 <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <input type="text" placeholder="Name" name="Name" />
                 </Form.Group>
                 <Form.Group controlId="formBasicEmail">
                     <Form.Label>Email id</Form.Label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <input type="email" placeholder="Enter email"  name="email"/>
                 </Form.Group>
                 <Form.Group controlId="formBasicEventName">
                    <Form.Label>Event Name</Form.Label>
                     <input type="text" placeholder="EventName" name="EventName" />
                 </Form.Group>
                 <Form.Group controlId="formBasicEventName">
                    <Form.Label>Event Venue</Form.Label>
                     <input type="text" placeholder="EventName" name="EventName" />
                 </Form.Group>
                 <Button id="btn" type="submit" >Add Volunteer</Button> &nbsp;
                      
                 <Button id="btn" onClick={()=>{this.setState({isOpen:false});}}> Close </Button>
              </Form>
          
              </ReactModal>
        </div>
        

      </div>
      );
  }
}
export default volunteer;