import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

import auth from './../../../auth'

import axios from "axios";

import "./../../../App.css";

import EnrollCourseCard from './EnrollCourseCard';

class EnrollCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
 
  enroll = () => {
    try{
       auth.checkAuthentication();
       
    }catch(err){ 
       this.props.history.push("/login");
    }
  }
 

  render = () => {
    return (
      <Jumbotron className="test">
      <Container>
      <h3 className="text-center" style={{marginTop:"20px",marginBottom:"20px"}}>{this.props.location.title}</h3>
        <CardDeck>
         <EnrollCourseCard enroll={this.enroll} courseTitle={this.props.location.title} courseDiscription={this.props.location.discription} courseImage={this.props.location.imageUrl} />
    

 
  

</CardDeck>
</Container>  
</Jumbotron>
    );
  };
}

export default EnrollCourse;
