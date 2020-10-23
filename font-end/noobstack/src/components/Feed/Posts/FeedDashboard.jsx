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
import { Link } from "react-router-dom";


import axios from "axios";
import ViewQuestion from "./ViewQuestion";

import "./../../../App.css";

import CourseCard from "./CourseCard";
import auth from "../../../auth";

class FeedDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      courseData: [],
      isLoggedIn: false
    };
  }

  componentDidMount() {

    try {
      auth.checkAuthentication();
      const userId = auth.getCheckAuthentication()._id;
      this.setState({isLoggedIn: true})
    } catch (err) {
      this.setState({isLoggedIn: false})
    }


    axios
      .get("http://localhost:5000/questions/all")
      .then((res) => {
        this.setState({ courseData: res.data, isLoading: false });
      })
      .catch((err) => console.log(err));
  }

  render = () => {
    return (
        <React.Fragment>

            {this.state.isLoading ? (
                <Jumbotron>
                <Button
                    variant="dark"
                    disabled
                    style={{ width: "100%", height: "700px" }}
                >
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
                </Jumbotron>
            ) : (
                <Jumbotron className="test feed">

                    <Row>
                        <Col> <h3
                            className="text-center"
                            style={{ marginTop: "30px", marginBottom: "20px",float: "left" }}
                        >
                            Top Questions
                        </h3></Col>
                        <Col> {this.state.isLoggedIn ? <Link to="/ask" > <Button
                            variant="danger"
                            size="sm"
                            style={{ marginTop: "30px", marginBottom: "20px",float: "right" }}
                        >
                          Ask Question
                        </Button></Link> : <Link to="/login" ><Button
                            variant="danger"
                            size="sm"
                            style={{ marginTop: "30px", marginBottom: "20px",float: "right" }}
                        >
                          Login to ask questions
                        </Button></Link>}
                          </Col>
                    </Row>


                    <Tabs
                        defaultActiveKey="all"
                        style={{ background: "#f2f2f2" }}
                    >
                        <Tab eventKey="all" title="All" >
                            <Jumbotron
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "5px",
                                    overflow: "auto",
                                    height: this.state.currentScreenHeight,
                                }}
                            >
                                {this.state.courseData.map((question) => (
                                    <ViewQuestion comments={question.comments} image={question.image} views={question.views} title={question.title} description={question.description} id={question._id}/>
                                ))}
                            </Jumbotron>
                        </Tab>
                        <Tab eventKey="javascript" title="JavaScript" >
                            <Jumbotron
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "5px",
                                    overflow: "auto",
                                    height: this.state.currentScreenHeight,
                                }}
                            >
                                {this.state.courseData.filter(question => question.category === "JavaScript").map((question) => (
                                    <ViewQuestion comments={question.comments} title={question.title} description={question.description} id={question._id}/>
                                ))}
                            </Jumbotron>
                        </Tab>
                        <Tab eventKey="HTMLCSS" title="HTML/CSS" >
                            <Jumbotron
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "5px",
                                    overflow: "auto",
                                    height: this.state.currentScreenHeight,
                                }}
                            >
                                {this.state.courseData.filter(question => question.category === "HTML/CSS").map((question) => (
                                    <ViewQuestion comments={question.comments} title={question.title} description={question.description} id={question._id}/>
                                ))}
                            </Jumbotron>
                        </Tab>
                        <Tab eventKey="java" title="Java" >
                            <Jumbotron
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "5px",
                                    overflow: "auto",
                                    height: this.state.currentScreenHeight,
                                }}
                            >
                                {this.state.courseData.filter(question => question.category === "Java").map((question) => (
                                    <ViewQuestion comments={question.comments} title={question.title} description={question.description} id={question._id}/>
                                ))}
                            </Jumbotron>
                        </Tab>
                        <Tab eventKey="python" title="Python" >
                            <Jumbotron
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "5px",
                                    overflow: "auto",
                                    height: this.state.currentScreenHeight,
                                }}
                            >
                                {this.state.courseData.filter(question => question.category === "Python").map((question) => (
                                    <ViewQuestion comments={question.comments} title={question.title} description={question.description} id={question._id}/>
                                ))}
                            </Jumbotron>
                        </Tab>
                        <Tab eventKey="android" title="Android" >
                            <Jumbotron
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "5px",
                                    overflow: "auto",
                                    height: this.state.currentScreenHeight,
                                }}
                            >
                                {this.state.courseData.filter(question => question.category === "Android").map((question) => (
                                    <ViewQuestion comments={question.comments} title={question.title} description={question.description} id={question._id}/>
                                ))}
                            </Jumbotron>
                        </Tab>
                        <Tab eventKey="sql" title="SQL" >
                            <Jumbotron
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "5px",
                                    overflow: "auto",
                                    height: this.state.currentScreenHeight,
                                }}
                            >
                                {this.state.courseData.filter(question => question.category === "SQL").map((question) => (
                                    <ViewQuestion comments={question.comments} title={question.title} description={question.description} id={question._id}/>
                                ))}
                            </Jumbotron>
                        </Tab>
                        <Tab eventKey="other" title="Other" >
                            <Jumbotron
                                style={{
                                    backgroundColor: "#f2f2f2",
                                    padding: "5px",
                                    overflow: "auto",
                                    height: this.state.currentScreenHeight,
                                }}
                            >
                                {this.state.courseData.filter(question => question.category === "Other").map((question) => (
                                    <ViewQuestion comments={question.comments} title={question.title} description={question.description} id={question._id}/>
                                ))}
                            </Jumbotron>
                        </Tab>
                    </Tabs>
                </Jumbotron>
            )}

        </React.Fragment>




    );
  };
}

export default FeedDashboard;
