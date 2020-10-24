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
      lname: "",
      imageURL: "",
    };
  }

  validate = () => {
    const regName = /^[a-zA-Z ]{2,30}$/;

    let isvalid = true;

    const fnameEmpty = document.getElementById("fnameEmptyEdit");
    const fnameError = document.getElementById("fnameErrorEdit");

    const lnameEmpty = document.getElementById("lnameEmptyEdit");
    const lnameError = document.getElementById("lnameErrorEdit");

    if (this.state.fname.trim().length === 0) {
      fnameEmpty.classList.remove("hide");
      isvalid = false;
    }

    if (this.state.lname.trim().length === 0) {
      lnameEmpty.classList.remove("hide");
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

    setTimeout(() => {
      fnameEmpty.classList.add("hide");
      fnameError.classList.add("hide");
      lnameEmpty.classList.add("hide");
      lnameEmpty.classList.add("hide");
    }, 4000);

    return isvalid;
  };

  updateProfile = () => {
    const loadingUpdate = document.getElementById("loadingUpdate");
    const successUpdate = document.getElementById("updateSuccessMsg");

    loadingUpdate.classList.remove("hide");
    successUpdate.classList.remove("hide");

    if (!this.validate()) {
      loadingUpdate.classList.add("hide");
      successUpdate.classList.add("hide");
      return;
    }

    if (this.state.image === undefined) {
      try {
        auth.checkAuthentication();
        const userId = auth.getCheckAuthentication()._id;

        axios
          .patch(`https://murmuring-depths-51139.herokuapp.com/users/update/${userId}`, {
            fname: this.state.fname,
            lname: this.state.lname,
            imageUrl: this.props.imageurl,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.error(err);
      }
      loadingUpdate.classList.add("hide");
      setTimeout(() => {
        successUpdate.classList.add("hide");
        setTimeout(() => {
          const allDetails = document.querySelectorAll(".profileDetails");
          const editForm = document.getElementById("edit_form");

          allDetails.forEach((allDetails) => {
            allDetails.classList.remove("hide");

            editForm.classList.add("hide");

            document.querySelector("#userNameBanner").innerHTML = `<h3>
                        ${this.state.fname} ${this.state.lname}
                      </h3>`;

            document.querySelector(
              "#userNameBanner2"
            ).innerHTML = `${this.state.fname} ${this.state.lname}`;
          });

          //editForm.classList.remove("hide");
        }, 1000);
      }, 2000);

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
            document.getElementById('profileImageRounded').src = url;
            try {
              auth.checkAuthentication();
              const userId = auth.getCheckAuthentication()._id;

              axios
                .patch(`https://murmuring-depths-51139.herokuapp.com/users/update/${userId}`, {
                  fname: this.state.fname,
                  lname: this.state.lname,
                  imageUrl: url,
                })
                .then((res) => {
                  //console.log(res);
                })
                .catch((err) => console.log(err));
            } catch (err) {
              console.error(err);
            }
          });
      }
    );

    loadingUpdate.classList.add("hide");
    setTimeout(() => {
      successUpdate.classList.add("hide");
      setTimeout(() => {
        const allDetails = document.querySelectorAll(".profileDetails");
        const editForm = document.getElementById("edit_form");

        allDetails.forEach((allDetails) => {
          allDetails.classList.remove("hide");

          editForm.classList.add("hide");

          document.querySelector("#userNameBanner").innerHTML = `<h3>
                        ${this.state.fname} ${this.state.lname}
                      </h3>`;

          document.querySelector(
            "#userNameBanner2"
          ).innerHTML = `${this.state.fname} ${this.state.lname}`;

          
        });
      }, 1000);
    }, 2000);
  };

  setImage = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
    }
  };

  render = () => {
    return (
      <Form className="test hide" id="edit_form">
        <Form.Group>
          <Form.File
            id="exampleFormControlFile2"
            label="Choose a profile picture"
            onChange={this.setImage}
          />
          <small className="text-danger">
            You can skip this if you want to stick with the current image
          </small>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="First Name"
            size="sm"
            block
            value={this.state.fname}
            onChange={(e) => {
              this.setState({ fname: e.target.value });
            }}
          />
        </Form.Group>
        <div
          className="alert alert-danger test hide"
          role="alert"
          id="fnameEmptyEdit"
        >
          First name Cannot be empty
        </div>
        <div
          className="alert alert-danger test hide"
          role="alert"
          id="fnameErrorEdit"
        >
          Cannot contain 0-9 or sybmols
        </div>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Last Name"
            size="sm"
            block
            value={this.state.lname}
            onChange={(e) => {
              this.setState({ lname: e.target.value });
            }}
          />
        </Form.Group>
        <div
          className="alert alert-danger test hide"
          role="alert"
          id="lnameEmptyEdit"
        >
          Last name Cannot be empty
        </div>
        <div
          className="alert alert-danger test hide"
          role="alert"
          id="lnameErrorEdit"
        >
          Cannot contain 0-9 or sybmols
        </div>
        <ProgressBar
          id="loadingUpdate"
          className="test hide"
          variant="dark"
          animated
          now={100}
        />
        <br />
        <div
          className="alert alert-success test hide"
          role="alert"
          id="updateSuccessMsg"
        >
          successfully updated
        </div>
        <Button
          variant="outline-dark"
          size="sm"
          block
          onClick={this.updateProfile}
        >
          Edit profile
        </Button>
      </Form>
    );
  };
}

export default UpdateProfile;
