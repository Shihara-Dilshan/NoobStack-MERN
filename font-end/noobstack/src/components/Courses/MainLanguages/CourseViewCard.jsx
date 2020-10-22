import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./../../../App.css";

class CourseViewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render = () => {
    const newTo = {
      pathname: `/enroll/${this.props.courseTitle.split(" ")[0]}`,
      title: this.props.courseTitle,
      discription: this.props.courseDiscription,
      imageUrl: this.props.courseImage,
    };
    return (
      <Card>
        <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" height={this.state.currentScreenHeight} width={this.state.currentScreenWidth} src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
</div>
        <Card.Body>
          <Card.Title>{this.props.courseTitle}</Card.Title>
          <Card.Text>{this.props.courseDiscription}</Card.Text>
          <Link to={newTo}>
            <Button variant="success">View Course</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  };
}

export default CourseViewCard;
