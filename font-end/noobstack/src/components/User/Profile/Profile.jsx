import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";



import auth from './../../../auth'
import Loading from "./../../Loading"

import axios from "axios";

import "./../../../App.css";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        userData: [],
        courseData: [],
        currentScreenHeight: undefined,
    };
  }
  
  componentDidMount(){
      window.scrollTo(0,0);
      this.setState({currentScreenHeight: window.screen.height});
    try{
       auth.checkAuthentication();
       const userId = auth.getCheckAuthentication()._id;
       
       axios
         .get(`http://localhost:5000/users/spefic/${userId}`)
         .then(res => {
              this.setState({userData: res.data, isLoading: false, courseData: res.data.courses});
         })
         .catch(err => console.log(err));
       
    }catch(err){ 
       this.props.history.push("/login");
    }
      
  }
  
  remove = (e) => {
       const removeId = e.target.id;
       try{
       auth.checkAuthentication();
       const userId = auth.getCheckAuthentication()._id;
       
        axios
         .patch(`http://localhost:5000/users/remove/${userId}`, {
              id : removeId
         })
         .then( (res) => {
           console.log(res);
          })
         .catch(err => {console.log(err)});
       
    }catch(err){ 
       this.props.history.push("/login");
    }
       
         
       const remainCourses = this.state.courseData.filter(course => course._id !== removeId);
       this.setState({courseData: remainCourses});
  }

  render = () => {
    return (
      <Jumbotron className="test userProfile">
      
      {this.state.isLoading ? <Button variant="dark" disabled style={{width:"100%", height:"700px"}}>
    <Loading />
    Loading...
  </Button> :   <Container style={{marginTop: "20px", height:this.state.currentScreenHeight}}>
       <Row >
    <Col sm={4} ><Card style={{background:"#f2f2f2"}}>
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
    {this.state.courseData.map( course  => (
       <Card size="lg" block style={{marginBottom: "5px"}}>
    <Card.Header><b>{course.title}</b>  <Button id={course._id} variant="outline-danger" size="sm" style={{float:"right"}} onClick={this.remove}>Remove</Button></Card.Header>
    <Card.Body>
      <Card.Text style={{fontSize: "15px"}}>
        {course.discription}
      </Card.Text>
    </Card.Body>
  </Card>
    
    ))}
    
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
      
      }
       
</Jumbotron>
    );
  };
}

export default Profile;
