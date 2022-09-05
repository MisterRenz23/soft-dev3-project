import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

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
            <NavDropdown title={<FaBars />} id="collasible-nav-dropdown">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarUser;
