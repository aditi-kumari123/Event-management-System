import React from 'react';
import './login.css';
import './register';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loginimg from '../images/imglogin.svg';
const Login = () => {
  // constructor(props){
  //   super(props)
  //     this.state = {
  //       name: "",
  //       password: "",      
  //   }
  // }
  // handleSubmit = (event) =>{
  //   const data = this.state
  //   console.log(data)
  // } 
  // handleChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })

  // }

  return (
    <div className="body">
    <Container >
  <Row>
    <Col>
        <img src={Loginimg} alt="" width="90%" height="90%"/>  
    </Col>
    <Col>
    <Card className="mx-auto vertical-center" bg="light" style={{width:"80%"}}>
    <Card.Title>Login Here!</Card.Title>
    <Card.Body>
        <div>
            {/* <Form onSubmit={this.handleSubmit}> */}
    <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        {/* <Form.Control type="email" placeholder="Enter email"  name="email" onChange={this.handleChange}/> */}
        <Form.Control type="email" placeholder="Enter email"  name="email"/>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
    </Form.Group>
    <Button id="btn" type="submit" >
        Submit
    </Button>
    </Form><br/>
        <div><Link to="/register" className="reg">New User? Click Here to Register!</Link></div>
    </div>
    
      
    </Card.Body></Card>
    </Col>    
  </Row>    
  </Container>
    
 </div>
  );
};

export default Login;