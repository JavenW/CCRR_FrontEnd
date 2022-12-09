import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

import React, {useState} from "react";
import {useEffect} from "react";
import jwt_decode from "jwt-decode";

function Navigation(props) {
  const [user, setUser] = useState({});
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "348914870957-et5471e8skds6e7firt8oglhkhp766ql.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline", size:"large"}
    );
  },[]);


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Refrigerator Recipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/" activeClassName="active">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName="active">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

          </Nav>
          <Nav>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <div id = "signInDiv"></div>
              </NavDropdown.Item>
              <NavDropdown.Item href="signout">
                Sign On
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
