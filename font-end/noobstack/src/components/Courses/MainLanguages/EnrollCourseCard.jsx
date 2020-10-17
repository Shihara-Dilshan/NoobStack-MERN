import React, { Component } from "react";
import { Link } from "react-router-dom";

import auth from './../../../auth'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./../../../App.css";

class EnrollCourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
  }
  
  componentDidMount(){
      window.scrollTo(0,0);
  }
  
  render = () => {
    return (
     <Card>

    <Card.Body>
      <Card.Title>{this.props.courseTitle}</Card.Title>
      <Card.Text>
        {this.props.courseDiscription}
      </Card.Text>
      <Card.Text>
        Price : FREE
      </Card.Text>
      <Button variant="success" onClick={this.props.enroll}>Enroll for this course</Button>
    </Card.Body>
    <Card.Footer>
          <Card.Img variant="top" src={this.props.courseImage} />
    </Card.Footer>
  </Card>
    );
  };
}

export default EnrollCourseCard;
