import React, { Component } from "react";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

import { Link } from "react-router-dom";

import "./../../../App.css";

class EnrollCourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render = () => {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.courseTitle}</Card.Title>
          <Card.Text>{this.props.courseDiscription}</Card.Text>
          <Card.Text>Price : FREE</Card.Text>
          <Button
            id="enrollStatus"
            className="hide test"
            variant="success"
            onClick={this.props.enroll}
          >
            Enroll for this course
          </Button>{" "}
          <Link to="/view"><Button id="enrollView" className="hide test" variant="success">
            View course
          </Button>
          </Link>
          <br />
          <br />
          <div
            className="alert alert-success hide test"
            role="alert"
            id="enrolledMsg"
          >
            Successfully enrolled for the course.
          </div>
          <ProgressBar
            id="loadingEnroll"
            className="hide test"
            variant="success"
            animated
            now={100}
          />
        </Card.Body>
        <Card.Footer>
          <Card.Img variant="top" src={this.props.courseImage} />
        </Card.Footer>
      </Card>
    );
  };
}

export default EnrollCourseCard;
