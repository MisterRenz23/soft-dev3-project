import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './SetB.module.css';
import API from '../../API';

const SetB = () => {

  const [set, setPackage] = useState([])


  const getSinglePackage = async () => {
    const { data } = await API.get(`/user/package_list/2/`)
    console.log(data);
    setPackage(data);
  }

  useEffect(() => {
    getSinglePackage();
  }, [])

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
              <h5 className={styles['food-link']}>Garlic Buttered Shrimp</h5>

              <p className={styles.paragraph}>
                The sweet taste of this dish is attributed to the soda. It also
                blends well with butter and garlic.
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
              <h5 className={styles['food-link']}>Lumpia Shanghai</h5>

              <p className={styles.paragraph}>
                Filipino-style spring roll made of ground pork, chicken filling
                wrapped in thin crepes called lumpia wrappers.
              </p>
            </Container>
          </Col>
        </Row>
        <Container fluid className={styles['button-container']}>
          <Link to={`/services-user/set-order/set/${set.id}`}>
            <button className={styles.button}>
              INQUIRE NOW
            </button>
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default SetB;
