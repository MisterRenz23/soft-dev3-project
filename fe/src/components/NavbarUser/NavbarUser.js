import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavbarUser.module.css';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';
import { MdFeedback, MdFoodBank } from 'react-icons/md';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const NavbarUser = () => {
  const handleClick = () => {
    localStorage.clear();
  };
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
          <Link to="/home-user">
            <img src="/images/Logo.png" alt="logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {['end'].map((direction) => (
              <NavDropdown
                title={<img src="/images/menu.png" alt="menu" />}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
              >
                <NavDropdown.Item href="/home-user">
                  <FaHome className={styles['nav-icons']} />
                  Home
                </NavDropdown.Item>
                <NavDropdown.Item href="/about-user">
                  <FaQuestionCircle className={styles['nav-icons']} />
                  About Us
                </NavDropdown.Item>
                <NavDropdown.Item href="/services-user">
                  <MdFoodBank className={styles['nav-icons']} />
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item href="/faqs-user">
                  <RiQuestionAnswerFill className={styles['nav-icons']} />
                  Faqs
                </NavDropdown.Item>
                <NavDropdown.Item href="/feedback-user">
                  <MdFeedback className={styles['nav-icons']} />
                  Feedback
                </NavDropdown.Item>
              </NavDropdown>
            ))}
          </Nav>
          <Nav>
            {['start'].map((direction) => (
              <NavDropdown
                title={<img src="/images/account.png" alt="account" />}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
              >
                <NavDropdown.Item href="/profile/:id/">
                  <CgProfile className={styles['nav-icons']} />
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/login" onClick={handleClick}>
                  <BiLogOut className={styles['nav-icons']} />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ))}
          </Nav>
          <Nav.Link href="/order-summary">
            <img src="/images/cart.png" alt="cart" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarUser;
