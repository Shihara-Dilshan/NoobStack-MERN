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
      answers: this.props.comments,
      id: this.props.id,
      userData: [],
      isLoading: true,
      comment: "",
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
          const userId = auth.getCheckAuthentication()._id;

          axios
              .get(`http://localhost:5000/users/spefic/${userId}`)
              .then((res) => {
                  this.setState({
                      userData: res.data,
                      isLoading: false
                  });
              })
              .catch((err) => console.log(err));

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

       if(this.state.comment === "" || this.state.comment.length === 0){
           return ;
       }

        axios
            .patch(`http://localhost:5000/questions/${this.state.id}`,
                {
                    comments: {
                        auther: `${this.state.userData.fname} ${this.state.userData.lname}`,
                        autherUniqueId: this.state.userData._id,
                        comment: this.state.comment
                    }
                }
                )
            .then( res => {
                const oldAnswers = this.state.answers;
                oldAnswers.push({"_id": 1,"auther": `${this.state.userData.fname} ${this.state.userData.lname}`, "autherUniqueId": this.state.userData._id, "comment" : this.state.comment, "date" : "Few seconds ago" });
                this.setState({answers: oldAnswers, comment: ""});
            })
            .catch(err => console.log(err))

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
                    {this.state.answers.length} answers
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
          	<Comment answer={answer.comment} auther={answer.auther} comment={answer.comment} date={answer.date}/>
          ))}
          <hr />

            <Form.Group  controlId="exampleForm.ControlTextarea1" style={{marginLeft: "10px",marginRight: "12px"}}>
                <Form.Label className="text-dark"><b>Your Answer</b></Form.Label>
                <Link to="/login"><Button  sm style={{float:"right"}} variant="danger" className="hide" id="logintoanswer">Login to add an answer</Button></Link>
                <Button onClick={this.postAnswer} sm style={{float:"right"}} variant="danger" className="hide" id="submitanswerBtn">Post</Button>
                <Form.Control active as="textarea" id="answerArea" rows={10} style={{marginTop:"10px"}} value={this.state.comment} onChange={(e) => {this.setState({comment: e.target.value})}}/>
            </Form.Group>

        </Card.Footer>
      </Card>
    );
  };
}

export default EnrollCourseCard;
