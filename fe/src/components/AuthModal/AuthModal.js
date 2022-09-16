import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './AuthModal.module.css';
import { Link } from 'react-router-dom';

const AuthModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={styles.button} onClick={handleShow}>
        INQUIRE NOW
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Account Needed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          An account is needed before you can order.Please sign in if you
          already have an account. You can also sign up if you don't have one.
        </Modal.Body>
        <Modal.Footer>
          <Link to="/register">
            <Button variant="primary">Sign Up</Button>
          </Link>
          <Link to="/login">
            <Button variant="primary">Sign In</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AuthModal;
