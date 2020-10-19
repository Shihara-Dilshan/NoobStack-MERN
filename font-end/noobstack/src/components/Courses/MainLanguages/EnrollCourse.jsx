import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";

import auth from './../../../auth';
import axios from "axios";



import "./../../../App.css";

import EnrollCourseCard from './EnrollCourseCard';

class EnrollCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  
  async componentDidMount(){
   try{
       auth.checkAuthentication();
       let userId = auth.getCheckAuthentication()._id;
       
       axios
          .post(`http://localhost:5000/users/enrolled/${userId}`,{
               course: { title: this.props.location.title , description:  this.props.location.discription}
          })
          .then( res => {
              
              if(res.data.length === 1){
                  let viewBtn = document.getElementById("enrollView");
                  viewBtn.classList.remove("hide");
              }else{
                  let enrollButton = document.getElementById("enrollStatus");
                  enrollButton.classList.remove("hide");
              }
          })
          .catch( err => {
              console.log(err);
              let enrollButton = document.getElementById("enrollStatus");
              enrollButton.classList.remove("hide");    
              
          })
   }catch(err){ 
       console.error(err);
       let enrollButton = document.getElementById("enrollStatus");
       enrollButton.classList.remove("hide");
   }
  
      
          
  }
 
  enroll = () => {
    
    let loading = document.getElementById("loadingEnroll");
    let success = document.getElementById("enrolledMsg");
    loading.classList.remove("hide");
    try{
       auth.checkAuthentication();
       let userId = auth.getCheckAuthentication()._id;
       
       axios
         .patch(`http://localhost:5000/users/${userId}`, {
              course: {title: this.props.location.title , description: this.props.location.discription}
         })
         .then( (res) => {
             loading.classList.add("hide");
             success.classList.remove("hide");
             success.classList.add("show");
             
             let viewBtn = document.getElementById("enrollView");
             viewBtn.classList.remove("hide");
             
             let enrollButton = document.getElementById("enrollStatus");
             enrollButton.classList.add("hide");   
          })
         .catch(err => {console.log(err)});
         
       
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
