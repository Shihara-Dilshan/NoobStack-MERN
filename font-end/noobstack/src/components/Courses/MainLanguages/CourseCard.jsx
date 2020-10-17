import React, { Component } from "react";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./../../../App.css";

class CourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
  }

  

  render = () => {
    return (
     <Card>
    <Card.Img variant="top" src={this.props.courseImage}/>
    <Card.Body>
      <Card.Title>{this.props.courseTitle}</Card.Title>
      <Card.Text>
        {this.props.courseDiscription}
      </Card.Text>
       <Button variant="primary">View Course</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
    );
  };
}

export default CourseCard;
