import React from 'react';
import './login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loginimg from '../images/imglogin.svg';
const Register = () => {

  return (
    <div className="body">
    <Container>
  <Row>
  <Col>
        <img src={Loginimg} alt="" width="90%" height="90%"/>  
    </Col>
    <Col>
    <Card className="mx-auto vertical-center" bg="light" style={{width:"80%"}}>
    <Card.Title>Register Now!</Card.Title>
    <Card.Body>
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFname">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLname">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFname">
      <Form.Label>Email id</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLname">
      <Form.Label>Password</Form.Label>
      <Form.Control type="Password" placeholder="Enter Password" />
    </Form.Group>
  </Form.Row>
  
  
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Course</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Branch</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Select</option>
        <option>CS</option>
        <option>IT</option>
        <option>EC</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Section</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Select</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
 <Button id="btn"variant="primary" type="submit">
    Submit
  </Button>
</Form><br/>
      
    </Card.Body></Card>
    </Col>    
  </Row>    
  </Container>

    </div>
  );
};

export default Register;