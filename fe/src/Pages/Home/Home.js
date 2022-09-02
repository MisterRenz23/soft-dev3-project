import React from 'react';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import NavbarUser from '../../components/NavbarUser/NavbarUser';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <NavBarComponent />

      <Container fluid>
        <img className={styles.pic} src="/images/Home.png" alt="Home" />
      </Container>
      <Carousel variant="dark">
        <Carousel.Item>
          <Container className={styles.foodDisplay}>
            <Row>
              <Col>
                <img
                  className={styles.image}
                  src="/images/BeefSteak.png"
                  alt="First slide"
                />
              </Col>
              <Col>
                <Carousel.Caption>
                  <h5>Beef Steak</h5>
                </Carousel.Caption>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className={styles.foodDisplay}>
            <Row>
              <Col>
                <img
                  className={styles.image}
                  src="/images/BeefSteak.png"
                  alt="First slide"
                />
              </Col>
              <Col>
                <Carousel.Caption>
                  <h5>Beef Steak</h5>
                </Carousel.Caption>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className={styles.foodDisplay}>
            <Row>
              <Col>
                <img
                  className={styles.image}
                  src="/images/BeefSteak.png"
                  alt="First slide"
                />
              </Col>
              <Col>
                <Carousel.Caption>
                  <h5>Beef Steak</h5>
                </Carousel.Caption>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
  // return <NavbarUser />;
};

export default Home;
