import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SetC.module.css';
import AuthModal from '../AuthModal/AuthModal';

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
              <h5 className={styles['food-link']}>Cordon Bleu</h5>

              <p className={styles.paragraph}>
                A cordon bleu or schnitzel cordon bleu is a dish of meat wrapped
                around cheese , then breaded and pan-fried or deep fried.
              </p>
            </Container>
            <Container fluid>
              <h5 className={styles['food-link']}>Chopsuey</h5>

              <p className={styles.paragraph}>
                a dish prepared chiefly from bean sprouts, bamboo shoots, water
                chestnuts, onions, mushrooms, and meat or fish and served with
                rice and soy sauce.
              </p>
            </Container>
            <Container fluid>
              <h5> Note:</h5>
              <p className={styles.paragraph}>
                Desserts are also available in{' '}
                <Link to="/services-user/individual-order">
                  Individual Order
                </Link>{' '}
                (add ₱ 500 each, good for 10-15 persons)
              </p>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <h5 className={styles['food-link']}>Fried Chicken</h5>

              <p className={styles.paragraph}>
                Deliciously crispy fried chicken with a crunchy coating on the
                outside and juicy, tender chicken inside.
              </p>
            </Container>
            <Container fluid>
              <h5 className={styles['food-link']}>Spaghetti</h5>

              <p className={styles.paragraph}>
                Spaghetti (Italian: [spaˈɡetti]) is a long, thin, solid,
                cylindrical pasta. It is a staple food of traditional Italian
                cuisine.
              </p>
            </Container>
          </Col>
        </Row>
        <Container fluid className={styles['button-container']}>
          <AuthModal />
        </Container>
      </Container>
    </Container>
  );
};

export default SetC;
