import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './IndividualOrder.module.css';
import './IndividualOrder.css';

const IndividualBtn = () => {
  return (
    <div className={styles.login}>
      <Link to="/login">
        <Button>Sign Up</Button>
      </Link>
      <h5>or</h5>
      <Link to="/login">
        <Button>Log In</Button>
      </Link>
      <h5>to order.</h5>
    </div>
  );
};

export default IndividualBtn;
