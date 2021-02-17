import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../images/slideimg1.jpg';
import Img2 from '../images/slideimg2.jpeg';
import './volunteer.css';
const SlideShow = () => {
  return (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="slide"
      src={Img1}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide"
      src={Img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>       
    </>
  );
};

export default SlideShow;