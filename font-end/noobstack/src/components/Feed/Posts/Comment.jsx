import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Badge } from "react-bootstrap";

import axios from "axios";

import "./../../../App.css";

import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  
  render = () => {
      const newTo = {
          pathname: `/view/${this.props.id}`,
          title: this.props.title,
          description: this.props.description,
          imageUrl: this.props.image,
      }
    return (
                  <Card size="lg" block style={{ marginBottom: "0px" }} className="test">
                              <Card.Header className="test">
                                  <Link to={newTo}><b className="text-info test">{this.props.title}</b></Link>{" "}
                                  <Card.Text style={{ fontSize: "15px" }}>
                                      {this.props.answer}
                                  </Card.Text>
                                  <small className="text-muted">
                                      asked by shihara dilshan at 2020.20.12 22.00AM
                                  </small>
                                  <br />
                                  <small className="text-muted">
                                      <Button
                                          id={this.props.id}
                                          variant="outline-success"
                                          size="sm"
                                          onClick={this.remove}
                                      >
                                          {this.props.views} views
                                      </Button>
                                      { " " }
                                      <Button
                                          id={this.props.id}
                                          variant="success"
                                          size="sm"
                                          onClick={this.remove}
                                      >
                                          3 answers
                                      </Button>
                                  </small>

                              </Card.Header>


                          </Card>

    );
  };
}

export default Comment;
