import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import { Container, Carousel, Image, Button, Modal } from 'react-bootstrap';
import styles from './Home.module.css';
import Splash from '../Splash/Splash';
import beef from '../../assets/BeefSteak.png';
import shrimp from '../../assets/shrimp.png';
import chicken from '../../assets/chicken.png';
import lumpia from '../../assets/lumpia.png';
import chopsuey from '../../assets/chopsuey.png';
import fish from '../../assets/fish.png';
import bami from '../../assets/bami.png';
import spag from '../../assets/spag.png';
import cordonbleu from '../../assets/cordonbleu.png';
import { FaHome } from 'react-icons/fa';

const Home = () => {
  const [show, setShow] = useState(false);
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
          <Container fluid>
            <Image
              className={styles.pic}
              src="/images/Home.png"
              alt="Home"
              fluid
            />
          </Container>
          <Carousel variant="dark">
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image
                  className={styles.image}
                  src={beef}
                  alt="Beef Steak"
                  fluid
                />
                <Carousel.Caption>
                  <h5 className={styles.color}>Beef Steak</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image
                  className={styles.image}
                  src={shrimp}
                  alt="Buttered Shrimp"
                  fluid
                />
                <Carousel.Caption>
                  <h5 className={styles.color}>Buttered Shrimp</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image
                  className={styles.image}
                  src={lumpia}
                  alt="Lumpiang Shanghai"
                  fluid
                />
                <Carousel.Caption>
                  <h5 className={styles.color}>Lumpiang Shanghai</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image
                  className={styles.image}
                  src={chicken}
                  alt="Fried Chicken"
                  fluid
                />
                <Carousel.Caption>
                  <h5 className={styles.color}>Fried Chicken</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image
                  className={styles.image}
                  src={chopsuey}
                  alt="Chopsuey"
                  fluid
                />
                <Carousel.Caption>
                  <h5 className={styles.color}>Chopsuey</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image
                  className={styles.image}
                  src={fish}
                  alt="Fish Fillet"
                  fluid
                />
                <Carousel.Caption>
                  <h5 className={styles.color}>Fish Fillet</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image className={styles.image} src={bami} alt="Bam-I" fluid />
                <Carousel.Caption>
                  <h5 className={styles.color}>Bam-I</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image
                  className={styles.image}
                  src={cordonbleu}
                  alt="Cordon Bleu"
                  fluid
                />
                <Carousel.Caption>
                  <h5 className={styles.color}>Cordon Bleu</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className={styles.foodDisplay} fluid>
                <Image
                  className={styles.image}
                  src={spag}
                  alt="Spaghetti"
                  fluid
                />
                <Carousel.Caption>
                  <h5 className={styles.color}>Spaghetti</h5>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
          </Carousel>
          <Container className={styles.container}>
            <Button
              className={styles.btn}
              variant="secondary"
              onClick={() => setShow(true)}
            >
              Order Now
            </Button>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  You need an account to order
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Link to="/login" className={styles['btn-modal']}>
                  <img src="/images/SignIn.png" alt="Sign In Button" />
                </Link>
                <Link to="/register" className={styles['btn-modal']}>
                  <Button>Register Now</Button>
                </Link>
              </Modal.Body>
            </Modal>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Home;
