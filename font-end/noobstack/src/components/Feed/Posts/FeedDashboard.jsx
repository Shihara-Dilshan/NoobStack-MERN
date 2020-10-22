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

class FeedDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      courseData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/questions/all")
      .then((res) => {
        this.setState({ courseData: res.data, isLoading: false });
      })
      .catch((err) => console.log(err));
  }

  render = () => {
    return (
      <Jumbotron className="test feed">
   
  <Row>
    <Col> <h3
            className="text-center"
            style={{ marginTop: "30px", marginBottom: "20px",float: "left" }}
          >
            Top Questions
          </h3></Col>
    <Col> <Button
                              variant="danger"
                              size="sm"
                              style={{ marginTop: "30px", marginBottom: "20px",float: "right" }}
                            >
                             Ask Question
                            </Button></Col>
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
                        <Card size="lg" block style={{ marginBottom: "0px" }}>
                          <Card.Header>
                            <b className="text-info">{question.title}</b>{" "}
                            <Card.Text style={{ fontSize: "15px" }}>
                              {question.description}
                            </Card.Text>
                            <small className="text-muted">
                      asked by shihara dilshan at 2020.20.12 22.00AM
                    </small>
                    <br />
                    <small className="text-muted">
                      <Button
                              id={question._id}
                              variant="outline-success"
                              size="sm"
                              onClick={this.remove}
                            >
                             13 views
                            </Button>
                            { " " }
                        <Button
                              id={question._id}
                              variant="success"
                              size="sm"
                              onClick={this.remove}
                            >
                             3 answers
                            </Button>
                    </small>
                    
                          </Card.Header>
                          
                          
                        </Card>
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
                    <Card size="lg" block style={{ marginBottom: "0px" }}>
                      <Card.Header>
                        <b className="text-info">{question.title}</b>{" "}
                        <Card.Text style={{ fontSize: "15px" }}>
                          {question.description}
                        </Card.Text>
                        <small className="text-muted">
                          asked by shihara dilshan at 2020.20.12 22.00AM
                        </small>
                        <br />
                        <small className="text-muted">
                          <Button
                              id={question._id}
                              variant="outline-success"
                              size="sm"
                              onClick={this.remove}
                          >
                            13 views
                          </Button>
                          { " " }
                          <Button
                              id={question._id}
                              variant="success"
                              size="sm"
                              onClick={this.remove}
                          >
                            3 answers
                          </Button>
                        </small>

                      </Card.Header>


                    </Card>
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
                    <Card size="lg" block style={{ marginBottom: "0px" }}>
                      <Card.Header>
                        <b className="text-info">{question.title}</b>{" "}
                        <Card.Text style={{ fontSize: "15px" }}>
                          {question.description}
                        </Card.Text>
                        <small className="text-muted">
                          asked by shihara dilshan at 2020.20.12 22.00AM
                        </small>
                        <br />
                        <small className="text-muted">
                          <Button
                              id={question._id}
                              variant="outline-success"
                              size="sm"
                              onClick={this.remove}
                          >
                            13 views
                          </Button>
                          { " " }
                          <Button
                              id={question._id}
                              variant="success"
                              size="sm"
                              onClick={this.remove}
                          >
                            3 answers
                          </Button>
                        </small>

                      </Card.Header>


                    </Card>
                ))}
              </Jumbotron>
            </Tab>
                </Tabs>
        </Jumbotron>

    );
  };
}

export default FeedDashboard;
