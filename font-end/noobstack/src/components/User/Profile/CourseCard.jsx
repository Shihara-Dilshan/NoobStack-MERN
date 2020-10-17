import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./../../../App.css";

class CourseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  
  componentDidMount(){
      
  }

  

  render = () => {
  const newTo = { 
  pathname: `/enroll/${this.props.courseTitle.split(" ")[0]}`, 
  title: this.props.courseTitle,
  discription: this.props.courseDiscription,
  imageUrl: this.props.courseImage
  
  };
    return (
     <Card>
    <Card.Img variant="top" src={this.props.courseImage}/>
    <Card.Body>
      <Card.Title>{this.props.courseTitle}</Card.Title>
      <Card.Text>
        {this.props.courseDiscription}
      </Card.Text>
       <Link to={newTo}><Button variant="success">View Course</Button></Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
    );
  };
}

export default CourseCard;
