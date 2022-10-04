import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './Home.module.css';
import Splash from '../Splash/Splash';
import beef from '../../assets/BeefSteak.png';
import shrimp from '../../assets/shrimp.png';
import chicken from '../../assets/chicken.png';
import lumpia from '../../assets/lumpia.png';
import chopsuey from '../../assets/chopsuey.png';
import fish from '../../assets/fish.png';
import spag from '../../assets/spag.png';
import cordonbleu from '../../assets/cordonbleu.png';
import PublicFooter from '../../components/footer/PublicFooter.js';

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Splash loading="loading" />
      ) : (
        <div>
          <NavBarComponent />
          <div>
            <Image className={styles.pic} src="/images/Home.png" alt="Home" />
          </div>
          <Container className={styles['title-pos']} fluid>
            <h5 className={styles['title-text']}>Some Dishes We Serve</h5>
          </Container>
          <Container fluid>
            <Row>
              <Col>
                <Row className={styles['pic-position']}>
                  <Image className={styles['food-pic']} src={beef} alt="Beef" />
                  <h5 className={styles['pic-text']}>Beef Steak</h5>
                </Row>
                <Row className={styles['pic-position']}>
                  <Image
                    className={styles['food-pic']}
                    src={shrimp}
                    alt="Shrimp"
                  />
                  <h5 className={styles['pic-text']}>Buttered Garlic shrimp</h5>
                </Row>
                <Row className={styles['pic-position']}>
                  <Image
                    className={styles['food-pic']}
                    src={fish}
                    alt="Fish Fillet"
                  />
                  <h5 className={styles['pic-text']}>Fish Fillet</h5>
                </Row>
                <Row className={styles['pic-position']}>
                  <Image
                    className={styles['food-pic']}
                    src={chicken}
                    alt="Fried Chicken"
                  />
                  <h5 className={styles['pic-text']}>Fried Chicken</h5>
                </Row>
              </Col>
              <Col>
                <Row className={styles['pic-position']}>
                  <Image
                    className={styles['food-pic']}
                    src={chopsuey}
                    alt="Chopsuey"
                  />
                  <h5 className={styles['pic-text']}>Chopsuey</h5>
                </Row>
                <Row className={styles['pic-position']}>
                  <Image
                    className={styles['food-pic']}
                    src={lumpia}
                    alt="Lumpia"
                  />
                  <h5 className={styles['pic-text']}>Lumpiang Shanghai</h5>
                </Row>
                <Row className={styles['pic-position']}>
                  <Image
                    className={styles['food-pic']}
                    src={spag}
                    alt="Spaghetti"
                  />
                  <h5 className={styles['pic-text']}>Spaghetti</h5>
                </Row>
                <Row className={styles['pic-position']}>
                  <Image
                    className={styles['food-pic']}
                    src={cordonbleu}
                    alt="Cordon Bleu"
                  />
                  <h5 className={styles['pic-text']}>Cordon Bleu</h5>
                </Row>
              </Col>
            </Row>
            <Container className={styles['title-pos']} fluid>
              <Link to="/services">
                <button className={styles['btn-modal']}>Order Now</button>
              </Link>
            </Container>
          </Container>
          <div>
            <PublicFooter />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
