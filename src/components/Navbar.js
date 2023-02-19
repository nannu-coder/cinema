import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navs from "react-bootstrap/Navbar";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navs bg="light" expand="lg">
      <Container>
        <Navs.Brand>
          <Link
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.55)" }}
            to="/"
          >
            Navbar
          </Link>
        </Navs.Brand>
        <Navs.Toggle aria-controls="navbarScroll" />
        <Navs.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">All Movies</Nav.Link>
            <Nav.Link href="#action2">Box Office</Nav.Link>
          </Nav>
          <Button text="Register Now" />
        </Navs.Collapse>
      </Container>
    </Navs>
  );
};

export default Navbar;
