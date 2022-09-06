import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavbarUser from '../../components/NavbarUser/NavbarUser';
import styles from './HomeUser.module.css';
import Splash from '../../Pages/Splash/Splash';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';

const HomeUser = () => {
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
          <NavbarUser />
          <div className={styles.container}>
            <Image src="/images/home.png" alt="home" />
          </div>
          <Container fluid>
            <Row>
              <Col className={styles['nav-pics']}>
                <Link to="/about-user">
                  <Image src="/images/about.png" alt="about" />
                </Link>
              </Col>
              <Col className={styles['nav-pics']}>
                <Link to="/services-user">
                  <Image
                    className={styles['nav-individual-pics']}
                    src="/images/services.png"
                    alt="services"
                  />
                </Link>
              </Col>
              <Col className={styles['nav-pics']}>
                <Link to="/faqs-user">
                  <Image src="/images/faqs.png" alt="faqs" />
                </Link>
              </Col>
              <Col className={styles['nav-pics']}>
                <Link to="/feedback-user">
                  <Image src="/images/about.png" alt="feedback" />
                </Link>
              </Col>
            </Row>
          </Container>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeUser;
