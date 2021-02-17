import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Music from '../images/music.svg';
import Poster from '../images/postermaking.svg';
import Treasurehunt from '../images/treasurehunt.svg';
import Badminton from '../images/badminton.svg';
import Basketball from '../images/basketball.svg';
import Race from '../images/race.svg';

import './volunteer.css';
const SlideShow2 = () => {
  return (
    <>
    <Carousel>
  <Carousel.Item>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Race} />
    <Card.Body>
      <Card.Title>Event Name : 500 Meter Race </Card.Title>
      <Card.Text>
        <button id="addvoln">Details</button> 
        <button id="addvoln">Register</button>
      </Card.Text> 
    </Card.Body>
  </Card>
  </Carousel.Item>  
  <Carousel.Item>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Music} />
    <Card.Body>
      <Card.Title>Event Name : Group Song Competition</Card.Title>
      <Card.Text>
        <button id="addvoln">Details</button>
        <button id="addvoln">Register</button>
      </Card.Text> 
    </Card.Body>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Poster} />
    <Card.Body>
      <Card.Title>Event Name : Poster Making Competition</Card.Title>
      <Card.Text>
        <button id="addvoln">Details</button>
        <button id="addvoln">Register</button>
      </Card.Text> 
    </Card.Body>
  </Card>      
  </Carousel.Item>
  <Carousel.Item>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Treasurehunt} />
    <Card.Body>
      <Card.Title>Event Name : Treasure Hunt </Card.Title>
      <Card.Text>
        <button id="addvoln">Details</button>
        <button id="addvoln">Register</button>
      </Card.Text> 
    </Card.Body>
  </Card>      
  </Carousel.Item>
  <Carousel.Item>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Badminton} />
    <Card.Body>
      <Card.Title>Event Name : Badminton Competition</Card.Title>
      <Card.Text>
        <button id="addvoln">Details</button>
        <button id="addvoln">Register</button>
      </Card.Text> 
    </Card.Body>
  </Card>      
  </Carousel.Item>
  <Carousel.Item>
  <Card style={{width:"80%",height:"90%"}}>
    <Card.Img variant="top" src={Basketball} />
    <Card.Body>
      <Card.Title>Event Name : Basketball Competition</Card.Title>
      <Card.Text>
        <button id="addvoln">Details</button>
        <button id="addvoln">Register</button>
      </Card.Text> 
    </Card.Body>
  </Card>      
  </Carousel.Item>
</Carousel>       
    </>
  );
};

export default SlideShow2;