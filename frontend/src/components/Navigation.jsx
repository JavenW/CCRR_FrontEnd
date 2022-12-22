import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

import React from "react";
import SignIn from './SignIn';

function Navigation(props) {
  let flag = sessionStorage.getItem('userObject') && Object.keys(sessionStorage.getItem('userObject')).length > 0;
  let user = flag ? JSON.parse(sessionStorage.getItem('userObject')) : null
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
            <LinkContainer to="/recipe" activeClassName="active">
              <Nav.Link>Recipe For You</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/randomreceipe" activeClassName="active">
              <Nav.Link>Random Receipe</Nav.Link>
            </LinkContainer>

          </Nav>
          <Nav>
            {flag&&<img src = {user.pict} tm={Date.now()} width={40} height={40} alt='userIcon'></img>}
            <NavDropdown title={flag?user.name:"Account"} id="collasible-nav-dropdown">
              {
                flag &&
                <NavDropdown.Item href="profile">
                  Profile
                </NavDropdown.Item>
              }
              <NavDropdown.Item>
                <SignIn/>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
