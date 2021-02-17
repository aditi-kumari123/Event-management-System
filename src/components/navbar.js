import React from 'react';
import "./admin";
import "./regEvents";
import * as ReactBootstrap from 'react-bootstrap';
const Navbar = () => {
  return (
    <>
  <ReactBootstrap.Navbar collapseOnSelect expand="md" style={{background: "linear-gradient(to right, #a8dadc, #8bc2cc, #70abbd, #5993ad, #457b9d)"}}>
  <ReactBootstrap.Navbar.Brand href="/">MyWebsite</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">      
    </ReactBootstrap.Nav>
    <ReactBootstrap.Nav>
    <ReactBootstrap.Nav.Link href="/regEvents">Events</ReactBootstrap.Nav.Link> 
      <ReactBootstrap.Nav.Link href="/admin">Admin</ReactBootstrap.Nav.Link> 
      <ReactBootstrap.Nav.Link eventKey={2} href="/">
        Login
      </ReactBootstrap.Nav.Link>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    </>
  );
};

export default Navbar;