import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SetB.module.css';

const SetB = () => {
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
                <h5 className={styles['food-link']}>Garlic Buttered Shrimp</h5>
              </Link>
              <p className={styles.paragraph}>
                The sweet taste of this dish is attributed to the soda. It also
                blends well with butter and garlic.
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
                <h5 className={styles['food-link']}>Lumpia Shanghai</h5>
              </Link>
              <p className={styles.paragraph}>
                Filipino-style spring roll made of ground pork, chicken filling
                wrapped in thin crepes called lumpia wrappers.
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

export default SetB;
