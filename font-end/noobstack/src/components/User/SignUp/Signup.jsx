import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

import axios from "axios";

import "./../../../App.css";

// eslint-disable-next-line
import { storageRef } from "../../../firebase";

import SignupImage from "./../../../static/images/nature-abstract-eco-concept-with-green-leaves-frame_1284-41031.jpg";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      cpassword: "",
    };
  }

  signUp = async (e) => {
    e.preventDefault();

    const emistsEmail = document.getElementById("emailExists");

    if (!this.validate()) {
      return;
    }
    const preLoader = document.getElementById("loading");
    const successMsg = document.getElementById("successMsg");
    preLoader.classList.remove("hide");
    preLoader.classList.add("show");

    axios
      .get(`http://localhost:5000/users/speficbyemail/${this.state.email}`)
      .then((res) => {
        if (res.data.length === 0) {
          axios
            .post("http://localhost:5000/users/register", {
              fname: this.state.fname,
              lname: this.state.lname,
              email: this.state.email,
              password: this.state.password,
            })
            .then((res) => {
              setTimeout(() => {
                preLoader.classList.remove("show");
                preLoader.classList.add("hide");
                successMsg.classList.remove("hide");
                successMsg.classList.add("show");
                setTimeout(() => {
                  this.props.history.push("/");
                }, 2000);
              }, 1000);
            })
            .catch((err) => console.error(err));
        } else {
          preLoader.classList.remove("show");
          preLoader.classList.add("hide");
          emistsEmail.classList.remove("hide");
        }
      })
      .catch((err) => console.error(err));

    setTimeout(() => {
      emistsEmail.classList.add("hide");
    }, 4000);
  };

  validate = () => {
    // eslint-disable-next-line
    const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const regName = /^[a-zA-Z ]{2,30}$/;

    let isvalid = true;

    const emailEmpty = document.getElementById("emailEmpty");
    const emailError = document.getElementById("emailError");

    const fnameEmpty = document.getElementById("firstnameEmpty");
    const fnameError = document.getElementById("firstnameError");

    const lnameEmpty = document.getElementById("lastnameEmpty");
    const lnameError = document.getElementById("lastnameError");

    const passwordEmpty = document.getElementById("passwordEmpty");
    const passwordError = document.getElementById("passwordError");

    const cpasswordEmpty = document.getElementById("cpasswordEmpty");
    const cpasswordError = document.getElementById("cpasswordError");

    if (this.state.email.trim().length === 0) {
      emailEmpty.classList.remove("hide");
      isvalid = false;
    }

    if (this.state.fname.trim().length === 0) {
      fnameEmpty.classList.remove("hide");
      isvalid = false;
    }

    if (this.state.lname.trim().length === 0) {
      lnameEmpty.classList.remove("hide");
      isvalid = false;
    }

    if (this.state.password.trim().length === 0) {
      passwordEmpty.classList.remove("hide");
      isvalid = false;
    }

    if (this.state.cpassword.trim().length === 0) {
      cpasswordEmpty.classList.remove("hide");
      isvalid = false;
    }

    if (
      !emailValidationRegex.test(String(this.state.email).toLowerCase()) &&
      this.state.email.trim().length !== 0
    ) {
      emailError.classList.remove("hide");
      isvalid = false;
    }

    if (
      !regName.test(String(this.state.fname).toLowerCase()) &&
      this.state.fname.trim().length !== 0
    ) {
      fnameError.classList.remove("hide");
      isvalid = false;
    }

    if (
      !regName.test(String(this.state.lname).toLowerCase()) &&
      this.state.lname.trim().length !== 0
    ) {
      lnameError.classList.remove("hide");
      isvalid = false;
    }

    if (this.state.password.trim().length < 8 && this.state.password.trim().length !== 0) {
      passwordError.classList.remove("hide");
      isvalid = false;
    }

    if (
      this.state.password.trim() !== this.state.cpassword.trim() &&
      this.state.cpassword.trim().length !== 0
    ) {
      cpasswordError.classList.remove("hide");
      isvalid = false;
    }

    setTimeout(() => {
      emailEmpty.classList.add("hide");
      emailError.classList.add("hide");
      fnameEmpty.classList.add("hide");
      fnameError.classList.add("hide");
      lnameEmpty.classList.add("hide");
      lnameError.classList.add("hide");
      passwordEmpty.classList.add("hide");
      passwordError.classList.add("hide");
      cpasswordEmpty.classList.add("hide");
      cpasswordError.classList.add("hide");
    }, 4000);

    return isvalid;
  };

  render = () => {
    return (
      <Jumbotron className="container test" style={{ marginTop: "120px" }}>
        <Container>
          <Row>
            <Col className="d-none d-sm-block">
              <Image
                className="d-block w-100"
                thumbnail
                src={SignupImage}
                alt="First slide"
              />
            </Col>
            <Col>
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
                  <div
                    className="alert alert-danger test hide"
                    role="alert"
                    id="emailExists"
                  >
                    An account is already exists with this email.
                  </div>
                  <div
                    className="alert alert-danger test hide"
                    role="alert"
                    id="emailEmpty"
                  >
                    Email cannot be empty
                  </div>
                  <div
                    className="alert alert-danger test hide"
                    role="alert"
                    id="emailError"
                  >
                    Invalid email
                  </div>
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
                      <div
                        className="alert alert-danger test hide"
                        role="alert"
                        id="firstnameEmpty"
                      >
                        This field cannot be empty.
                      </div>
                      <div
                        className="alert alert-danger test hide"
                        role="alert"
                        id="firstnameError"
                      >
                        cannot contain 0-9 or Symbols.
                      </div>
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
                      <div
                        className="alert alert-danger test hide"
                        role="alert"
                        id="lastnameEmpty"
                      >
                        This field cannot be empty.
                      </div>
                      <div
                        className="alert alert-danger test hide"
                        role="alert"
                        id="lastnameError"
                      >
                        cannot contain 0-9 or Symbols.
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
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
                      <div
                        className="alert alert-danger test hide"
                        role="alert"
                        id="passwordEmpty"
                      >
                        Enter a password.
                      </div>
                      <div
                        className="alert alert-danger test hide"
                        role="alert"
                        id="passwordError"
                      >
                        Must contain 8 charactors.
                      </div>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={this.state.cpassword}
                        onChange={(e) => {
                          this.setState({ cpassword: e.target.value });
                        }}
                      />
                      <div
                        className="alert alert-danger test hide"
                        role="alert"
                        id="cpasswordEmpty"
                      >
                        Confirm the password.
                      </div>
                      <div
                        className="alert alert-danger test hide"
                        role="alert"
                        id="cpasswordError"
                      >
                        Password mismatched.
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <ProgressBar
                  id="loading"
                  className="hide test"
                  variant="success"
                  animated
                  now={100}
                />
                <div
                  className="alert alert-success hide test"
                  role="alert"
                  id="successMsg"
                >
                  successfully registered
                </div>
                <div className="text-center" style={{ marginTop: "10px" }}>
                  <Button variant="success" type="submit" onClick={this.signUp}>
                    Sign Up
                  </Button>
                  <br />
                  <br />
                  <br />
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
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  };
}

export default Signup;
