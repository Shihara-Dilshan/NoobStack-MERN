import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  

  render = () => {
    return (
        <Form>
        <h3>Sign In</h3>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <br />
  <Form.Group controlId="formBasicCheckbox">
    <div className="text-center">
    	<Form.Check type="checkbox" label="Check me out" />
    </div>
  </Form.Group>
  <div className="text-center">
  <ProgressBar variant="success" animated now={100} />
  <br />
  <Button variant="success" type="submit" >
    Sign In
  </Button>
  </div>
  <br />
  <div className="text-center">
  <p>or else sign up with</p>
  <button type="button" className="btn btn-primary"><a href="www.facebook.com/" className="fa fa-facebook">{ " " }</a></button>{ " "}
  <button type="button" className="btn btn-dark"><a href="www.facebook.com/" className="fa fa-github">{ " " }</a></button>{ " " }
  <button type="button" className="btn btn-danger"><a href="www.facebook.com/" className="fa fa-google">{ " " }</a></button>{ " " }
  </div>
  <br /><br />

  <br />
  
</Form>
    );
  };
}

export default LoginForm;
