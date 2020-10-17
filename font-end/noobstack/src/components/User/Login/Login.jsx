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

import LoginImage from "./../../../static/images/welcome-composition-with-flat-character_23-2147895814.jpg";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
  }

  signIn = async (e) => {
     const loginPogress = document.getElementById("loginPogress");
     const accountErrors = document.getElementById("accountError");
     loginPogress.classList.remove("hide");
     e.preventDefault();
     axios
      .post("http://localhost:5000/users/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        if(res.status === 200){
           localStorage.setItem("auth-token", res.data);
           this.props.history.push("/");
        }else{
           
        }
      })
      .catch((err) => {
        console.error(err);
        accountErrors.classList.remove("hide");
        loginPogress.classList.add("hide");
      });
      
      setTimeout( () => {
          accountErrors.classList.add("hide");
      },4000);
     
  }

  render = () => {
    return (
      <Jumbotron className="container test" style={{ marginTop: "100px" }}>
        <Container>
          <Row>
            <Col className="d-none d-sm-block">
              <Image
                className="d-block w-100"
                thumbnail
                src={LoginImage}
                alt="First slide"
              />
            </Col>
            <Col>
                    <Form>
        <h3>Sign In</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
        </Form.Group>
   
        <div
                    className="alert alert-danger test hide"
                    role="alert"
                    id="accountError"
                  >
                    Email or password is incorrect.
                  </div>
        <Form.Group controlId="formBasicCheckbox">
          <div className="text-center">
            <Form.Check type="checkbox" label="Check me out" />
          </div>
        </Form.Group>
        <div className="text-center">
          <ProgressBar variant="success" className="hide test" id="loginPogress" animated now={100} />
          <br />
          <Button variant="success" type="submit" onClick={this.signIn}>
            Sign In
          </Button>
        </div>
        <br />
        <div className="text-center">
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
        <br />
        <br />

        <br />
      </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  };
}

export default Login;
