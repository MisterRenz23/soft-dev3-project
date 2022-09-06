import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavbarLogin.module.css';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';
import { MdFeedback, MdFoodBank } from 'react-icons/md';
import { RiQuestionAnswerFill } from 'react-icons/ri';

const NavbarLogin = () => {
  return (
    <Navbar
      className={styles['nav-container']}
      collapseOnSelect
      expand="lg"
      bg="light"
      varian="dark"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title={<img src="/images/menu.png" />}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/">
                <FaHome className={styles['nav-icons']} />
                Home
              </NavDropdown.Item>
              <NavDropdown.Item href="/about">
                <FaQuestionCircle className={styles['nav-icons']} />
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/services">
                <MdFoodBank className={styles['nav-icons']} />
                Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/faqs">
                <RiQuestionAnswerFill className={styles['nav-icons']} />
                Faqs
              </NavDropdown.Item>
              <NavDropdown.Item href="/feedback">
                <MdFeedback className={styles['nav-icons']} />
                Feedback
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/register">
              <img src="/images/SignUp.png" alt="Sign Up Button"></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLogin;
