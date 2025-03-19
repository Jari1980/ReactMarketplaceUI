import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Link } from "react-router-dom";
import { useCounterContext } from "./context";
import { ToggleButton } from "react-bootstrap";
import { Button } from "react-bootstrap";





const NavbarComp = () => {
  
  const {counter, setCounter} = useCounterContext(0)
  const {background, setBackground} = useCounterContext("");
  const {heading, setHeading} = useCounterContext("");

  function handleClick() {
    if(background === "linear-gradient(0deg,#f0e6e600, #d6d4dd 75%,#0000FF)") {
      setBackground("linear-gradient(0deg,#f0e6e600, #d6d4dd 75%,#00000F)")
      setHeading("black")
    }
    else{
      setBackground("linear-gradient(0deg,#f0e6e600, #d6d4dd 75%,#0000FF)")
      setHeading("blue")
    }
  }

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Container >
          <Navbar.Brand as={Link} to="/home">React-Marketplace-UI {counter}</Navbar.Brand>
          
          <Button onClick={handleClick}>Toggle background</Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  as={Link} to="/">Login</Nav.Link>
              <Nav.Link as={Link} to="/">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;


//{`${props.num.valueOf()}`}
// "linear-gradient(0deg,#f0e6e600, #d6d4dd 75%,#FFFFFF)"
// {() => {setBackground("linear-gradient(0deg,#f0e6e600, #d6d4dd 75%,#FFFFFF)")}}