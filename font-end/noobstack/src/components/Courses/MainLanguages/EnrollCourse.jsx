import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";

import auth from "./../../../auth";
import axios from "axios";

import "./../../../App.css";

import EnrollCourseCard from "./EnrollCourseCard";

class EnrollCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      auth.checkAuthentication();
      let userId = auth.getCheckAuthentication()._id;

      axios
        .post(`https://murmuring-depths-51139.herokuapp.com/users/enrolled/${userId}`, {
          course: {
            title: this.props.location.title,
            description: this.props.location.discription,
          },
        })
        .then((res) => {
          if (res.data.length === 1) {
            let viewBtn = document.getElementById("enrollView");
            viewBtn.classList.remove("hide");
          } else {
            let enrollButton = document.getElementById("enrollStatus");
            enrollButton.classList.remove("hide");
          }
        })
        .catch((err) => {
          console.log(err);
          let enrollButton = document.getElementById("enrollStatus");
          enrollButton.classList.remove("hide");
        });
    } catch (err) {
      console.error(err);
      let enrollButton = document.getElementById("enrollStatus");
      enrollButton.classList.remove("hide");
    }
  }

  enroll = () => {
    let loading = document.getElementById("loadingEnroll");
    let success = document.getElementById("enrolledMsg");
    loading.classList.remove("hide");
    try {
      auth.checkAuthentication();
      let userId = auth.getCheckAuthentication()._id;
      const webToken = localStorage.getItem("auth-token");
      axios.defaults.headers.common["auth-token"] = "Bearer " + webToken;

      axios
        .patch(
          `https://murmuring-depths-51139.herokuapp.com/users/${userId}`,
          {
            course: {
              title: this.props.location.title,
              description: this.props.location.discription,
            },
          },
          { headers: { "auth-token": webToken } }
        )
        .then((res) => {
          loading.classList.add("hide");
          success.classList.remove("hide");
          success.classList.add("show");

          let viewBtn = document.getElementById("enrollView");
          viewBtn.classList.remove("hide");

          let enrollButton = document.getElementById("enrollStatus");
          enrollButton.classList.add("hide");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      this.props.history.push("/login");
    }
  };

  render = () => {
    return (
      <Jumbotron className="test">
        <Container>
          <h3
            className="text-center"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            {this.props.location.title}
          </h3>
          <CardDeck>
            <EnrollCourseCard
              enroll={this.enroll}
              courseTitle={this.props.location.title}
              courseDiscription={this.props.location.discription}
              courseImage={this.props.location.imageUrl}
              id={this.props.location.id}
            />
          </CardDeck>
        </Container>
      </Jumbotron>
    );
  };
}

export default EnrollCourse;
