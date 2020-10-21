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
      .get("http://localhost:5000/courses/all")
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
                  defaultActiveKey="overview"
                  style={{ background: "#f2f2f2" }}
                >
                  <Tab eventKey="overview" title="Overview" >
                    <Jumbotron
                      style={{
                        backgroundColor: "#f2f2f2",
                        padding: "5px",
                        overflow: "auto",
                        height: this.state.currentScreenHeight,
                      }}
                    >
                      {this.state.courseData.map((course) => (
                        <Card size="lg" block style={{ marginBottom: "0px" }}>
                          <Card.Header>
                            <b className="text-info">{course.title}</b>{" "}
                            <Card.Text style={{ fontSize: "15px" }}>
                              {course.discription}
                            </Card.Text>
                            <small className="text-muted">
                      asked by shihara dilshan at 2020.20.12 22.00AM
                    </small>
                    <br />
                    <small className="text-muted">
                      <Button
                              id={course._id}
                              variant="outline-success"
                              size="sm"
                              onClick={this.remove}
                            >
                             13 views
                            </Button>
                            { " " }
                        <Button
                              id={course._id}
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
                  <Tab eventKey="courses" title="Courses">
                    <Jumbotron
                      style={{ backgroundColor: "#f2f2f2", padding: "0px" }}
                    >
                      <h1>Hello, world!</h1>
                      <p>
                        This is a simple hero unit, a simple jumbotron-style
                        component for calling extra attention to featured
                        content or information.
                      </p>
                      <p>
                        <Button variant="primary">Learn more</Button>
                      </p>
                    </Jumbotron>
                  </Tab>
                  <Tab eventKey="settings" title="Settings">
                    <Jumbotron
                      style={{ backgroundColor: "#f2f2f2", padding: "0px" }}
                    >
                      <h1>Hello, world!</h1>
                      <p>
                        This is a simple hero unit, a simple jumbotron-style
                        component for calling extra attention to featured
                        content or information.
                      </p>
                      <p>
                        <Button variant="primary">Learn more</Button>
                      </p>
                    </Jumbotron>
                  </Tab>
                </Tabs>
        </Jumbotron>

    );
  };
}

export default FeedDashboard;
