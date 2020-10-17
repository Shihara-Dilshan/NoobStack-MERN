import auth from './../../auth'
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


class Nevbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggenIn : false,
    };
  }
  
  componentDidMount(){
    setInterval( () => {
    try{
       auth.checkAuthentication();
       this.setState({isLoggenIn : true});
    }catch(err){ 
       this.setState({isLoggenIn : false})
    }
    },50);
    
  }
  
  signOut = () => {
     localStorage.removeItem("auth-token");
     this.props.history.push("/");
  }

  render = () => {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
        <Link to="/">
          <Navbar.Brand href="#home">NoobStack</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {this.state.isLoggenIn === true ? 
              <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses">Courses</Link>
            </Nav.Link>
            <Nav.Link href="#home">SLIIT</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown" className="dropDown">
              <NavDropdown.Item><Link to="/profile">Your profile</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Enrolled courses
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={this.signOut}>
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            :
            <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/courses">Courses</Link>
            </Nav.Link>
            <Nav.Link href="#home">SLIIT</Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">Sign Up</Link>
            </Nav.Link>
          </Nav>
          
          
          
          }
          
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}

export default Nevbar;
