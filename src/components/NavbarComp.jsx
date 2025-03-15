import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Link } from "react-router-dom";



const NavbarComp = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand as={Link} to="/home">React-Marketplace-UI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  as={Link} to="/">Login</Nav.Link>
              <Nav.Link as={Link} to="/">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

/*
<Navbar expand="lg" bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand href="/home">React-Marketplace-UI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  to="#">Login</Nav.Link>
              <Nav.Link to="#">Sign Up</Nav.Link>
              <Link to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
*/


export default NavbarComp;
