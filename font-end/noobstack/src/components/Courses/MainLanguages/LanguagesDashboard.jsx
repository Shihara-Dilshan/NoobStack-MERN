import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

import axios from "axios";

import "./../../../App.css";

import CourseCard from "./CourseCard";

class LanguagesDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      courseData: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://murmuring-depths-51139.herokuapp.com/courses/all")
      .then((res) => {
        this.setState({ courseData: res.data, isLoading: false });
      })
      .catch((err) => console.log(err));
  }

  render = () => {
    return (
      <Jumbotron className="test">
        <Container>
          <h3
            className="text-center"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Popular Courses
          </h3>
          <CardDeck>
            {this.state.isLoading ? (
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
            ) : (
              <Row>
                {" "}
                {this.state.courseData.map((course) => (
                  <Col style={{ marginTop: "20px" }} sm={4}>
                    <CourseCard
                      key={course._id}
                      id={course._id}
                      courseTitle={course.title}
                      courseDiscription={course.discription}
                      courseImage={course.imageUrl}
                    />
                  </Col>
                ))}{" "}
              </Row>
            )}
          </CardDeck>
        </Container>
      </Jumbotron>
    );
  };
}

export default LanguagesDashboard;
