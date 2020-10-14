import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";

import LoginImage from './../../../static/images/welcome-composition-with-flat-character_23-2147895814.jpg';

import LoginForm from "./LoginForm";


class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  

  render = () => {
    return (
        <Jumbotron className="container test" style={{marginTop:"100px"}}>
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
    <Col><LoginForm /></Col>
  </Row>
  
</Container>
	</Jumbotron>
    );
  };
}

export default Login;
