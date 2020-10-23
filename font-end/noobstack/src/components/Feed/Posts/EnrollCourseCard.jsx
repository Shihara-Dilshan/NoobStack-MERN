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
import auth from "../../../auth";
import axios from "axios";

class EnrollCourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [{"id": 1,"answer": "\n" +
              "\n" +
              "One thing you have to know it's that both fetch and setTimeout functions are not really a functions of javascript. They belong to Window - Web Apis. You can read more about it here: https://developer.mozilla.org/en-US/docs/Web/API/Window\n" +
              "\n" +
              "And whenever you are using those functions they go of the call stack and into a window api that is written in probably in C# or something. Once they are done doing what they are suppose to do, they send back response inside a callback queue, which u can imagine as a different call stack.\n" +
              "\n" +
              "Javascript itself is single threaded but with functions from window api it can be run async.\n"},{"id": 2,"answer": "What exactly is a \"method that takes a long time to execute\"? Something like while (true) {}? Or an AJAX request or something like that?"},{"id": 3,"answer": "The API function will end executing immediately and log nothing of interest. fetch is returning a promise, and to get the promise result you need to add a .then callback to it. At which point it'll behave the same as the setTimeout case"}]
    };
  }

    scrollPage = () => {
        let element = document.getElementById( 'beginAnswer' );
        let pos = this.getPosition( element );

        window.scrollTo(pos.x , pos.y);
    }

     getPosition = ( element ) => {
        let rect = element.getBoundingClientRect();
        return {x:rect.left,y:rect.top};
    }

  componentDidMount() {
    window.scrollTo(0, 0);
      try {
          auth.checkAuthentication();
          const answer = document.getElementById('submitanswerBtn');
          answer.classList.remove('hide')

      } catch (err) {
          const logintoAnswer = document.getElementById('logintoanswer');
          logintoAnswer.classList.remove('hide');

          const textArea=  document.getElementById("answerArea");
          textArea.classList.add('hide');
      }
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
            <Card.Title className="text-dark"><u><b>{this.props.title}</b></u></Card.Title>
            <Card.Text style={{ fontSize: '0.65em' }}
                       className="text-muted" >Asked 4 years, 11 months ago by Shihara Dilshan</Card.Text>
          <Card.Text style={{ fontSize: '1em' }}
                     className="text-muted" >{this.props.description}</Card.Text>
            <small className="text-muted">
                <Button
                    id={this.props.id}
                    variant="outline-success"
                    size="sm"
                    onClick={this.remove}
                >
                    122k views
                </Button>
                { " " }
                <Button
                    id={this.props.id}
                    variant="success"
                    size="sm"
                    onClick={this.scrollPage}
                >
                    13 answers
                </Button>
            </small>
        </Card.Body>

        <Card.Footer>
          <Image fluid thumbnail src={this.props.courseImage} />
        </Card.Footer>
        <Card.Footer>
            <Button variant="success" size="sm" id="beginAnswer" block onClick={this.editProfile} className="profileDetails">
                Answers for the questions
            </Button>
          <br />
          {this.state.answers.map( answer => (
          	<Comment answer={answer.answer}/>
          ))}
          <hr />

            <Form.Group  controlId="exampleForm.ControlTextarea1" style={{marginLeft: "10px",marginRight: "12px"}}>
                <Form.Label className="text-dark"><b>Your Answer</b></Form.Label>
                <Link to="/login"><Button  sm style={{float:"right"}} variant="danger" className="hide" id="logintoanswer">Login to add an answer</Button></Link>
                <Button onClick={this.postAnswer} sm style={{float:"right"}} variant="danger" className="hide" id="submitanswerBtn">Post</Button>
                <Form.Control active as="textarea" id="answerArea" rows={10} style={{marginTop:"10px"}} />
            </Form.Group>

        </Card.Footer>
      </Card>
    );
  };
}

export default EnrollCourseCard;
