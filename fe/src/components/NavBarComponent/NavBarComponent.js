import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" varian="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href="/faqs">Faqs</NavDropdown.Item>
              <NavDropdown.Item href="/feedback">Feedback</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">
              <img src="/images/SignIn.png" alt="Sign In Button" />
            </Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
