import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import LanguagesDashboard from "./../Courses/MainLanguages/LanguagesDashboard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render = () => {
    return (
     <React.Fragment>
      <Carousel className="test" style={{marginBottom:"-40px"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2465962.png"
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-sm-block">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2465922.png"
            alt="Third slide"
          />

          <Carousel.Caption className="d-none d-sm-block">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2465915.png"
            alt="Third slide"
          />

         <Carousel.Caption className="d-none d-sm-block">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2465949.png"
            alt="Third slide"
          />

          <Carousel.Caption className="d-none d-sm-block">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2465923.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="d-none d-sm-block">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <LanguagesDashboard />
      </React.Fragment>
    );
  };
}

export default Home;
