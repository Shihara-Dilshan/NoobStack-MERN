import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

import "./../../../../App.css";

import { storageRef2 } from "../../../../firebase";
import axios from "axios";
import auth from "./../../../../auth";


class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: undefined,
        fname: "",
        lname: ""
    };
  }
  
  updateProfile = () => {
      if (this.state.image === undefined) {
      return;
      }

    const upload = storageRef2
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    upload.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storageRef2
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            try {
      auth.checkAuthentication();
      const userId = auth.getCheckAuthentication()._id;

      axios
        .patch(`http://localhost:5000/users/update/${userId}`, {fname: this.state.fname, lname: this.state.lname, imageUrl: url})
        .then((res) => {
          console.log(res)
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
            
          });
      }
    );
  }
   
  setImage = (e) => {
     if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
      console.log(this.state.image)
     }
     
  }

  render = () => {
    return (
        <Form className="test hide" id="edit_form">
         <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Choose a profile picture" onChange={this.setImage}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="text" placeholder="First Name" size="sm" block value={this.state.fname} onChange={ (e) => {this.setState({fname: e.target.value})}} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Last Name" size="sm" block value={this.state.lname} onChange={ (e) => {this.setState({lname: e.target.value})}} />
  </Form.Group>
  <ProgressBar
                  id="loading"
                  className="test"
                  variant="dark"
                  animated
                  now={100}
                />
  <br />
  <div
                  className="alert alert-success test"
                  role="alert"
                  id="successMsg"
                >
                  successfully updated
                </div>
  <Button variant="outline-dark" size="sm" block onClick={this.updateProfile}>
                      Edit profile
  </Button>
</Form>
    );
  };
}

export default UpdateProfile;
