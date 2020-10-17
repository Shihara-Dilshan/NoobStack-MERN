import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import auth from './../../../auth'


import axios from "axios";

import "./../../../App.css";

import CourseCard from './CourseCard';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        userData: [],
        currentScreenHeight: undefined,
    };
  }
  
  componentDidMount(){
  
      this.setState({currentScreenHeight: window.screen.height});
    try{
       auth.checkAuthentication();
       const userId = auth.getCheckAuthentication()._id;
       
       axios
         .get(`http://localhost:5000/users/spefic/${userId}`)
         .then(res => {
              this.setState({userData: res.data, isLoading: false});
         })
         .catch(err => console.log(err));
       
    }catch(err){ 
       this.props.history.push("/login");
    }
      
  
      
  }

  render = () => {
    return (
      <Jumbotron className="test userProfile">
       <Container style={{marginTop: "20px", height:this.state.currentScreenHeight}}>
       <Row>
    <Col sm={4}><Card style={{background:"#f2f2f2"}}>
    <Card.Img className="container" style={{paddingTop:"30px",paddingLeft:"30px",paddingRight:"30px", borderRadius:"50%"}} variant="top" src={this.state.userData.imageUrl}/>
    <Card.Body>
      <Card.Text>
          <h3>
          {this.state.userData.fname}{" "}{this.state.userData.lname}
          </h3>
      </Card.Text> 
      <Card.Text>
          {this.state.userData.fname}{" "}{this.state.userData.lname}
      </Card.Text> 
      <Button variant="outline-dark" size="sm" block>Edit profile</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card></Col>
     <Col sm={8}>
     	<Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" style={{background:"#f2f2f2"}} >
  <Tab eventKey="overview" title="Overview">
    <Jumbotron style={{backgroundColor: "#f2f2f2", padding: "5px", overflow: "auto", height:this.state.currentScreenHeight}}>
    
   
  <Card border="dark" size="lg" block style={{marginBottom: "5px"}}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark" size="lg" block style={{marginBottom: "5px"}}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark" size="lg" block style={{marginBottom: "5px"}}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  
  
 
    
</Jumbotron>
  </Tab>
  <Tab eventKey="courses" title="Courses">
   <Jumbotron style={{backgroundColor: "#f2f2f2", padding: "0px"}}>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
  </Tab>
  <Tab eventKey="settings" title="Settings">
   <Jumbotron style={{backgroundColor: "#f2f2f2", padding: "0px"}}>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
  </Tab>
</Tabs>
     
     </Col>
  </Row>
  </Container>
</Jumbotron>
    );
  };
}

export default Profile;
