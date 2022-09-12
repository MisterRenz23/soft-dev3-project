import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SetC.module.css';

const SetC = () => {
  return (
    <Container fluid className={styles.box}>
      <Container fluid>
        <div>
          <h5 className={styles.price}>
            Pax: 10-15 persons | Price: ₱ 2,900.00
          </h5>
        </div>
        <div>
          <p className={styles.choose}>
            Choose your own set of foods for ₱ 850.00 per food tray.
          </p>
        </div>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Container fluid>
              <Link to="/services" className={styles.link}>
                <h5 className={styles['food-link']}>Cordon Bleu</h5>
              </Link>
              <p className={styles.paragraph}>
                A cordon bleu or schnitzel cordon bleu is a dish of meat wrapped
                around cheese , then breaded and pan-fried or deep fried.
              </p>
            </Container>
            <Container fluid>
              <Link to="/services" className={styles.link}>
                <h5 className={styles['food-link']}>Chopsuey</h5>
              </Link>
              <p className={styles.paragraph}>
                a dish prepared chiefly from bean sprouts, bamboo shoots, water
                chestnuts, onions, mushrooms, and meat or fish and served with
                rice and soy sauce.
              </p>
            </Container>
            <Container fluid>
              <h5 className={styles['food-link']}>Desserts</h5>

              <p className={styles.paragraph}>
                (add ₱ 500 each, good for 10-15 persons)
              </p>
              <Link to="/services" className={styles.link}>
                <h5 className={styles.dessert}>• Ube Maja Blanca</h5>
              </Link>
              <Link to="/services" className={styles.link}>
                <h5 className={styles.dessert}>• Mango Gulaman</h5>
              </Link>
              <Link to="/services" className={styles.link}>
                <h5 className={styles.dessert}>• Buko Pandan</h5>
              </Link>
              <Link to="/services" className={styles.link}>
                <h5 className={styles.dessert}>• Mango Float</h5>
              </Link>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <Link to="/services" className={styles.link}>
                <h5 className={styles['food-link']}>Fried Chicken</h5>
              </Link>
              <p className={styles.paragraph}>
                Deliciously crispy fried chicken with a crunchy coating on the
                outside and juicy, tender chicken inside.
              </p>
            </Container>
            <Container fluid>
              <Link to="/services" className={styles.link}>
                <h5 className={styles['food-link']}>Spaghetti</h5>
              </Link>
              <p className={styles.paragraph}>
                Spaghetti (Italian: [spaˈɡetti]) is a long, thin, solid,
                cylindrical pasta. It is a staple food of traditional Italian
                cuisine.
              </p>
            </Container>
            <Container fluid>
              <h5 className={styles['food-link']}>
                Dishes available for customization:
              </h5>

              <Link to="/services" className={styles.link}>
                <h5 className={styles.dessert}>• Buffalo Wings</h5>
              </Link>
              <Link to="/services" className={styles.link}>
                <h5 className={styles.dessert}>• Humba</h5>
              </Link>
            </Container>
          </Col>
        </Row>
        <Container fluid className={styles['button-container']}>
          <Link to="/services">
            <button className={styles.button}>INQUIRE NOW</button>
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default SetC;
