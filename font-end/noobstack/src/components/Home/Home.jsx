import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";

import LanguagesDashboard from "./../Courses/MainLanguages/LanguagesDashboard";
import sliderImage1 from "./../../static/images/sliderimage1.png";
import sliderImage2 from "./../../static/images/sliderImage2.png";
import sliderImage3 from "./../../static/images/sliderImage3.png";
import sliderImage4 from "./../../static/images/sliderImage4.png";
import sliderImage5 from "./../../static/images/sliderImage5.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <React.Fragment>
        <Carousel className="test" style={{ marginBottom: "-40px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderImage4}
              alt="First slide"
            />
            <Carousel.Caption>
           <a href="https://drive.google.com/file/d/10tXLvor17u6lno14I0GqWi36N_Hyq1FR/view?usp=sharing"> <Button variant="danger">sinhalaunix win32</Button></a>{' '}
              <h3 className="d-none d-sm-block">learn JavaScript</h3>
              <p className="d-none d-sm-block">Learning JavaScript will help you to get a better job opportunities</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderImage2}
              alt="Third slide"
            />

            <Carousel.Caption>
             <a href="https://drive.google.com/file/d/1XCyAycLrtM-CUMfycyj_xGi7r8vfW1Qj/view?usp=sharing"><Button variant="dark">sinhalaunix linux app image</Button></a>{' '}
              <h3 className="d-none d-sm-block">Ask any question</h3>
              <p className="d-none d-sm-block">Post any question based on HTML, CSS or any other topic you want.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderImage1}
              alt="Third slide"
            />

            <Carousel.Caption>
            <a href="https://drive.google.com/file/d/1bDijZIYwlQXBY8fSARNShF_gLnPqwwNZ/view?usp=sharing"><Button variant="light">sinhalaunix linux deb</Button></a>{' '}
              <h3 className="d-none d-sm-block">JavaScript on the Server-Side</h3>
              <p className="d-none d-sm-block">
                Learn Node, a run time library for JavaScript to run on the server side.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderImage3}
              alt="Third slide"
            />

            <Carousel.Caption className="d-none d-sm-block">
              <h3>MEAN Stack</h3>
              <p>
                MongoDB, Express, Angular, Node
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sliderImage5}
              alt="Third slide"
            />

            <Carousel.Caption className="d-none d-sm-block">
              <h3>Learn React</h3>
              <p>
                Most popular, fast and powerfull front end framework in thhe world.
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
