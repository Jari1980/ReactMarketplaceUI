import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const NavbarComp = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand href="./home">React-Marketplace-UI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  href="#">Login</Nav.Link>
              <Nav.Link href="#">Sign Up</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
