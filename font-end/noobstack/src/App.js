import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Nevbar from "./components/Layout/Nevbar";
import Home from "./components/Home/Home";
import Login from "./components/User/Login/Login";
import Signup from "./components/User/SignUp/Signup";
import LanguagesDashboard from "./components/Courses/MainLanguages/LanguagesDashboard";

class App extends React.Component{
  render(){
     return (
    <Router>
      <div className="App test">
        <Nevbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/courses" exact component={LanguagesDashboard} />
        </Switch>
      </div>
    </Router>
  );
  }
  
}



export default App;
