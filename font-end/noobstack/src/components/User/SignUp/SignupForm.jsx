import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

import axios from "axios";

import "./../../../App.css";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
    };
  }

  signUp = async (e) => {
    e.preventDefault();
    let that = this;
    const preLoader = document.getElementById("loading");
    preLoader.classList.remove("hide");
    preLoader.classList.add("show");

    axios
      .post("https://murmuring-depths-51139.herokuapp.com/users/", {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        password: this.state.password,
        imageUrl: "image url",
      })
      .then((res) => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch((err) => console.error(err));
  };

  render = () => {
    return (
      <Form>
        <h3>Sign up</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="formBasicLname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                placeholder="First name"
                value={this.state.fname}
                onChange={(e) => {
                  this.setState({ fname: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicLname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                placeholder="Last name"
                value={this.state.lname}
                onChange={(e) => {
                  this.setState({ lname: e.target.value });
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" />
        </Form.Group>
        <ProgressBar
          id="loading"
          className="hide test"
          variant="success"
          animated
          now={100}
        />
        <div className="text-center" style={{ marginTop: "10px" }}>
          <Button variant="success" type="submit" onClick={this.signUp}>
            Sign Up
          </Button>
          <p>or else sign up with</p>
          <button type="button" className="btn btn-primary">
            <a href="www.facebook.com/" className="fa fa-facebook">
              {" "}
            </a>
          </button>{" "}
          <button type="button" className="btn btn-dark">
            <a href="www.facebook.com/" className="fa fa-github">
              {" "}
            </a>
          </button>{" "}
          <button type="button" className="btn btn-danger">
            <a href="www.facebook.com/" className="fa fa-google">
              {" "}
            </a>
          </button>{" "}
        </div>
        <div className="text-center">
          <br />
        </div>
      </Form>
    );
  };
}

export default SignupForm;
