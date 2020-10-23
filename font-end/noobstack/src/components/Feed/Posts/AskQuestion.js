import React, { Component } from "react";
import "./../../../App.css";
import {Button, Col, Container, Form, Image, Jumbotron, ProgressBar, Row} from "react-bootstrap";
import SignupImage from "../../../static/images/nature-abstract-eco-concept-with-green-leaves-frame_1284-41031.jpg";

class AskQuestion extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Jumbotron className="test">

                    <Row>
                        <Col className="d-none d-sm-block">
                            <Image
                                className="d-block w-100"
                                thumbnail
                                src="https://image.freepik.com/free-vector/flat-people-holding-question-marks_52683-8638.jpg"
                                alt="First slide"
                            />
                        </Col>
                        <Col>
                            <Form>
                                <h3 style={{ marginTop: "30px" }}>Ask a public question </h3>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{marginBottom: "0px"}}>Title </Form.Label><br />
                                    <Form.Label style={{fontSize:"0.75em", marginTop: "0px"}}>Be specific and imagine you’re asking a question to another person
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="e.g Is there an R function for the index of an element in vector?" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label style={{marginBottom: "0px"}}>Select a topic</Form.Label><br />
                                    <Form.Label style={{fontSize:"0.75em", marginTop: "0px"}}>Select a specific language or framework e.g: java, python , etc...
                                    </Form.Label>
                                    <Form.Control as="select">
                                        <option>JavaScript</option>
                                        <option>HTML/CSS</option>
                                        <option>Java</option>
                                        <option>Python</option>
                                        <option>Android</option>
                                        <option>SQL</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{marginBottom: "0px"}}>Body </Form.Label><br />
                                    <Form.Label style={{fontSize:"0.75em", marginTop: "0px"}}>Include all the information someone would need to answer your question </Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.Controlimage">
                                <Form.File
                                    id="exampleFormControlFile2"
                                    label="Upload an image (optional)"
                                />
                                </Form.Group>
                                <div className="text-center">
                                <Button variant="secondary" type="submit">
                                    Post your Question
                                </Button>
                                </div>

                            </Form>
                        </Col>
                    </Row>

            </Jumbotron>
        );
    }
}

export default AskQuestion;