import React, { Component } from "react";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import Comment from "./Comment";

import "./../../../App.css";

class EnrollCourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [{"id": 1,"answer": "dsdsdsdsdsdsd"},{"id": 2,"answer": "dsdsdsdsdsdsd"},{"id": 3,"answer": "dsdsdsdsdsdsd"}]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

    postAnswer = () => {
      const oldAnswers = this.state.answers;
      oldAnswers.push({"id": 1,"answer": "dsdsdsdsdsdsd"});
        console.log(oldAnswers)
     this.setState({answers: oldAnswers});

    }

  render = () => {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
            <Card.Text style={{ fontSize: '0.65em' }}
                       className="text-muted" >Asked 4 years, 11 months ago by Shihara Dilshan</Card.Text>
          <Card.Text style={{ fontSize: '1em' }}
                     className="text-muted" >{this.props.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Image fluid thumbnail src={this.props.courseImage} />
        </Card.Footer>
        <Card.Footer>
         <Card.Text className="text-muted text-center">3 Answers</Card.Text>
          {this.state.answers.map( answer => (
          	<Comment />
          ))}
          <hr />
          <Container>
            <Form.Group style={{padding:"10px"}} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Answer</Form.Label><Button onClick={this.postAnswer} sm style={{float:"right"}}>Post</Button>
                <Form.Control as="textarea" rows={10} style={{marginTop:"10px"}} />
            </Form.Group>
              </Container>
        </Card.Footer>
      </Card>
    );
  };
}

export default EnrollCourseCard;
