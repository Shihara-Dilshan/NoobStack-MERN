import React, { Component } from "react";

import { Card } from "react-bootstrap";

import "./../../../App.css";

class CourseViewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render = () => {
    return (
      <Card>
        <div class="embed-responsive embed-responsive-16by9">
  <iframe title="content_video" class="embed-responsive-item" src={this.props.courseVideo} allowFullScreen></iframe>
</div>
        <Card.Body>
          <Card.Title className="text-muted">{this.props.courseTitle}</Card.Title>
          <Card.Text></Card.Text>

        </Card.Body>
        
      </Card>
    );
  };
}

export default CourseViewCard;
