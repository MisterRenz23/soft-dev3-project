import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

const PublicFooter = () => {
  return (
    <div className={styles.container}>
      <Container fluid>
        <Row>
          <Col className={styles['bottom-nav-size']}>
            <Image src="/images/address.png" alt="Address" />
          </Col>
          <Col className={styles['bottom-nav-size']}>
            <Link to="/" className={styles.link}>
              <h5 className={styles['bottom-nav']}>Home</h5>
            </Link>
            <Link to="/about" className={styles.link}>
              <h5 className={styles['bottom-nav']}>About Us</h5>
            </Link>
            <Link to="services" className={styles.link}>
              <h5 className={styles['bottom-nav']}>Services</h5>
            </Link>
            <Link to="/faqs" className={styles.link}>
              <h5 className={styles['bottom-nav']}>Faqs</h5>
            </Link>
            <Link to="/feedback" className={styles.link}>
              <h5 className={styles['bottom-nav']}>Feedback</h5>
            </Link>
          </Col>
          <Col className={styles['bottom-nav-size']}>
            <h5 className={styles['bottom-nav']}>
              Terms and Policies <br /> Privacy Notice
            </h5>
            <h5 className={styles['bottom-nav']}>© Arvanthea 2022 - 2023</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PublicFooter;
