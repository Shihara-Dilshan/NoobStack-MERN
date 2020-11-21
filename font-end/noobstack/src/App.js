import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Nevbar from "./components/Layout/Nevbar";
import Home from "./components/Home/Home";
import Login from "./components/User/Login/Login";
import Signup from "./components/User/SignUp/Signup";
import LanguagesDashboard from "./components/Courses/MainLanguages/LanguagesDashboard";
import EnrollCourse from "./components/Courses/MainLanguages/EnrollCourse";
import ViewCourse from "./components/Courses/MainLanguages/ViewCourse";
import EnrollCourseCard from "./components/Courses/MainLanguages/EnrollCourseCard";
import Profile from "./components/User/Profile/Profile";
import FeedDashboard from "./components/Feed/Posts/FeedDashboard";
import ViewQs from "./components/Feed/Posts/ViewQs";
import AskQuestion from "./components/Feed/Posts/AskQuestion";
import Footer from "./components/Layout/Footer";
import MainDetails from "./components/Covid/MainDetails";

class App extends React.Component{
  render(){
     return (
    <Router>
      <div className="App test">
        <Route path="/" component={Nevbar} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/courses" exact component={LanguagesDashboard} />
          <Route path="/enroll" exact component={EnrollCourse} />
          <Route path="/view" exact component={ViewCourse} />
          <Route path="/enroll/:courseId" component={EnrollCourse} />
          <Route path="/view/:questionId" component={ViewQs} />
          <Route path="/enrollcard" component={EnrollCourseCard} />
          <Route path="/profile" component={Profile} />
          <Route path="/feed" component={FeedDashboard} />
          <Route path="/ask" component={AskQuestion} />
          <Route path="/covid19" component={MainDetails} />
        </Switch>
         <Route path="/" component={Footer} />
      </div>
    </Router>
  );
  }
  
}



export default App;
