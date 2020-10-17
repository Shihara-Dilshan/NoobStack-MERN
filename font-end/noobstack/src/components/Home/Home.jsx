import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render = () => {
    return (
      <Carousel className="test">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/noobstack/wp4924004-react-js-wallpapers.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/noobstack/wp4923981-react-js-wallpapers.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/noobstack/wp4923978-react-js-wallpapers.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
}

export default Home;
