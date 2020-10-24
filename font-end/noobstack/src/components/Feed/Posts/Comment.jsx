import React, { Component } from "react";

import { Card } from "react-bootstrap";


import "./../../../App.css";


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
                  <Card size="lg" block style={{ marginBottom: "10px" }} className="test text-dark border-secondary" variance="dark">
                              <Card.Header className="test">
                                  <Link to={newTo}><b className="text-info test">{this.props.title}</b></Link>{" "}
                                  <Card.Text style={{ fontSize: "15px" }}>
                                      <b>{this.props.answer}</b>
                                  </Card.Text>
                                  <small className="text-muted">
                                      Answered by <b>{this.props.auther}</b> at {this.props.date}
                                  </small>


                              </Card.Header>


                          </Card>

    );
  };
}

export default Comment;
