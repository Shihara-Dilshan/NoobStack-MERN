import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";


import "./../../../App.css";

import EnrollCourseCard from "./EnrollCourseCard";

class ViewQs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render = () => {
    return (
      <Jumbotron className="test">

          <CardDeck className="text-dark" style={{ marginTop: "20px", marginBottom: "20px" }}>
            <EnrollCourseCard
              title={this.props.location.title}
              description={this.props.location.description}
              courseImage={this.props.location.imageUrl}
              comments={this.props.location.comments}
              id={this.props.location.id}
            />
          </CardDeck>

      </Jumbotron>
    );
  };
}

export default ViewQs;
