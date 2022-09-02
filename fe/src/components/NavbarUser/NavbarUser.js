import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarUser = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" varian="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src="/images/Logo.png" alt="Home"></img>
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
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarUser;
