import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SetD.module.css';
import AuthModal from '../AuthModal/AuthModal';

const SetD = () => {
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
              <h5 className={styles['food-link']}>Bisteak</h5>

              <p className={styles.paragraph}>
                Bistek Tagalog is a classic Filipino dish made of thinly sliced
                beef braised in a mixture of calamnsi juice, soy sauce, onions,
                garlic, and pepper.
              </p>
            </Container>
            <Container fluid>
              <h5 className={styles['food-link']}>Bam - I</h5>

              <p className={styles.paragraph}>
                Noodle dish that is made with a combination of canton noodles,
                rice noodles, and a variety vegetables and meats.
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
              <h5 className={styles['food-link']}>Garlic Buttered Shrimp</h5>

              <p className={styles.paragraph}>
                The sweet taste of this dish is attributed to the soda. It also
                blends well with butter and garlic.
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

export default SetD;
