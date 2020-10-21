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
          <h3
            className="text-center"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Question Feed
          </h3>
		  <Tabs
                  defaultActiveKey="overview"
                  style={{ background: "#f2f2f2" }}
                >
                  <Tab eventKey="overview" title="Overview">
                    <Jumbotron
                      style={{
                        backgroundColor: "#f2f2f2",
                        padding: "5px",
                        overflow: "auto",
                        height: this.state.currentScreenHeight,
                      }}
                    >
                      {this.state.courseData.map((course) => (
                        <Card size="lg" block style={{ marginBottom: "15px" }}>
                          <Card.Header>
                            <b>{course.title}</b>{" "}
                            <Button
                              id={course._id}
                              variant="outline-success"
                              size="sm"
                              style={{ float: "right" }}
                              onClick={this.remove}
                            >
                              View
                            </Button>
                            <Card.Text style={{ fontSize: "15px" }}>
                              {course.discription}
                            </Card.Text>
                            <small className="text-muted">
                      asked by shihara dilshan
                    </small>
                    <br />
                    <small className="text-muted">
                      14 answers
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
