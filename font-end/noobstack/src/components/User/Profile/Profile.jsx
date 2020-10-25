import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";

import auth from "./../../../auth";
import Loading from "./../../Loading";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

import axios from "axios";

import "./../../../App.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      userData: [],
      courseData: [],
      questionData: [],
      currentScreenHeight: undefined,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ currentScreenHeight: window.screen.height });
    try {
      auth.checkAuthentication();
      const userId = auth.getCheckAuthentication()._id;

      axios
        .get(`https://murmuring-depths-51139.herokuapp.com/users/spefic/${userId}`)
        .then((res) => {
          this.setState({
            userData: res.data,
            
            courseData: res.data.courses,
          });
          axios
        .get(`https://murmuring-depths-51139.herokuapp.com/questions/viewbyuser/${userId}`)
        .then((res) => {
          this.setState({
            isLoading: false,
            questionData: res.data,
          });
          
        })
        .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      this.props.history.push("/login");
    }
  }

  remove = (e) => {
    const removeId = e.target.id;
    try {
      auth.checkAuthentication();
      const userId = auth.getCheckAuthentication()._id;
      const webToken = localStorage.getItem("auth-token");
      axios.defaults.headers.common["auth-token"] = "Bearer " + webToken;

      axios
        .patch(
          `https://murmuring-depths-51139.herokuapp.com/users/remove/${userId}`,
          { id: removeId },
          { headers: { "auth-token": webToken } }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      this.props.history.push("/login");
    }

    const remainCourses = this.state.courseData.filter(
      (course) => course._id !== removeId
    );
    this.setState({ courseData: remainCourses });
  };
  
  editProfile = () => {
     const allDetails = document.querySelectorAll('.profileDetails');
     const editForm = document.getElementById('edit_form');
     
     allDetails.forEach(allDetails => {
         allDetails.classList.add("hide");
     });
     
     editForm.classList.remove("hide");
  } 

  render = () => {
    return (
      <Jumbotron className="test userProfile">
        {this.state.isLoading ? (
          <Button
            variant="dark"
            disabled
            style={{ width: "100%", height: "700px" }}
          >
            <Loading />
            Loading...
          </Button>
        ) : (
          <Container
            style={{
              marginTop: "20px",
              height: this.state.currentScreenHeight,
            }}
          >
            <Row>
              <Col sm={4}>
                <Card style={{ background: "#f2f2f2" }}>
                  <Card.Img
                    className="container"
                    id="profileImageRounded"
                    style={{
                      paddingTop: "30px",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      borderRadius: "50%",
                    }}
                    variant="top"
                    src={this.state.userData.imageUrl}
                  />
                  <Card.Body>
                    <Card.Text className="profileDetails" id="userNameBanner">
                      <h3>
                        {this.state.userData.fname} {this.state.userData.lname}
                      </h3>
                    </Card.Text>
                    <Card.Text className="profileDetails" id="userNameBanner2">
                      {this.state.userData.fname} {this.state.userData.lname}
                    </Card.Text >
                    <Button variant="outline-dark" size="sm" block onClick={this.editProfile} className="profileDetails">
                      Edit profile
                    </Button>
                    <UpdateProfile fname={this.state.userData.fname} lname={this.state.userData.lname} imageurl={this.state.userData.imageUrl}/>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {this.state.userData.fname} {this.state.userData.lname}
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
              <Col sm={8}>
                <Tabs
                  defaultActiveKey="enrolledCourses"
                  id="uncontrolled-tab-example"
                  style={{ background: "#f2f2f2" }}
                >
                  <Tab eventKey="enrolledCourses" title="Enrolled Courses">
                    <Jumbotron
                      style={{
                        backgroundColor: "#f2f2f2",
                        padding: "5px",
                        overflow: "auto",
                        height: this.state.currentScreenHeight,
                      }}
                    >
                      {this.state.courseData.map((course) => (
                        <Card size="lg" block style={{ marginBottom: "5px" }}>
                          <Card.Header>
                            <b>{course.title}</b>{" "}
                            <Button
                              id={course._id}
                              variant="outline-danger"
                              size="sm"
                              style={{ float: "right" }}
                              onClick={this.remove}
                            >
                              Remove
                            </Button>
                          </Card.Header>
                          <Card.Body>
                            <Card.Text style={{ fontSize: "15px" }}>
                              {course.discription}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      ))}
                    </Jumbotron>
                  </Tab>
                  <Tab eventKey="questions" title="My Questions">
                    <Jumbotron
                      style={{
                        backgroundColor: "#f2f2f2",
                        padding: "5px",
                        overflow: "auto",
                        height: this.state.currentScreenHeight,
                      }}
                    >
                      {this.state.questionData.map((course) => (
                        <Card size="lg" block style={{ marginBottom: "0px" }}>
                              <Card.Header>
                                  <b className="text-info">{course.title}</b>{" "}
                                  <Card.Text style={{ fontSize: "15px" }}>
                                      {course.description}
                                  </Card.Text>
                                  <small className="text-muted">
                                      asked at {course.date}
                                  </small>
                                  <br />
                                  <small className="text-muted">
                                      <Button
                                          id={this.props.id}
                                          variant="outline-success"
                                          size="sm"
                                          onClick={this.remove}
                                      >
                                          {course.views} views
                                      </Button>
                                      { " " }
                                      <Button
                                          
                                          variant="success"
                                          size="sm"
                                      >
                                          {course.comments.length} answers
                                      </Button>
                                  </small>

                              </Card.Header>


                          </Card>
                      ))}
                    </Jumbotron>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        )}
      </Jumbotron>
    );
  };
}

export default Profile;
