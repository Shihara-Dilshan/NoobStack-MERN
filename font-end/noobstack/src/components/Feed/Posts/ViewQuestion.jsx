import React, { Component } from "react";


import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";


import "./../../../App.css";

import { Link } from "react-router-dom";

class ViewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  
  render = () => {
      const newTo = {
          pathname: `/view/${this.props.id}`,
          id: this.props.id,
          comments: this.props.comments,
          title: this.props.title,
          description: this.props.description,
          imageUrl: this.props.image,
      }
    return (
                  <Card size="lg" block style={{ marginBottom: "0px" }}>
                              <Card.Header>
                                  <Link to={newTo}><b className="text-info">{this.props.title}</b></Link>{" "}
                                  <Card.Text style={{ fontSize: "15px" }}>
                                      {this.props.description}
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

export default ViewQuestion;
