import React, { Component } from "react";


import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";


import "./../../../App.css";

import { Link } from "react-router-dom";
import axios from "axios";

class ViewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  
  
  incrementViews =() => {
        let views = Number.parseInt(this.props.views) + 1;
        let questionId = this.props.id;
  	axios
            .patch(`https://murmuring-depths-51139.herokuapp.com/questions/updateviews/${questionId}`,
                {
                        views: views
                }
                )
            .then( res => console.log(res))
            .catch(err => console.log(err))
  }
  
  render = () => {
      const newTo = {
          pathname: `/view/${this.props.id}`,
          id: this.props.id,
          comments: this.props.comments,
          title: this.props.title,
          description: this.props.description,
          imageUrl: this.props.image,
          date: this.props.date,
          auther: this.props.auther,
          views: Number.parseInt(this.props.views) + 1
      }
    return (
                  <Card size="lg" block style={{ marginBottom: "0px" }}>
                              <Card.Header>
                                  <Link to={newTo}><b onClick={this.incrementViews} className="text-info">{this.props.title}</b></Link>{" "}
                                  <Card.Text style={{ fontSize: "15px" }}>
                                      {this.props.description}
                                  </Card.Text>
                                  <small className="text-muted">
                                      asked by {this.props.auther} at {this.props.date}
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
                                      <Link to={newTo}><Button onClick={this.incrementViews}
                                          id={this.props.id}
                                          variant="success"
                                          size="sm"
                                      >
                                          {this.props.comments.length} answers
                                      </Button>
                                      </Link>
                                  </small>

                              </Card.Header>


                          </Card>

    );
  };
}

export default ViewQuestion;
