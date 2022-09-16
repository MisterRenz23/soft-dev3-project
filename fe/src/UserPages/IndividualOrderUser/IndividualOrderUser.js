import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './IndividualOrderUser.module.css';
import chicken from '../../assets/chicken.png';
import bleu from '../../assets/cordonbleu.png';
import shrimp from '../../assets/shrimp.png';
import chopsuey from '../../assets/chopsuey.png';
import fish from '../../assets/fish.png';
import lumpia from '../../assets/lumpia.png';
import beef from '../../assets/BeefSteak.png';
import bami from '../../assets/bami.png';
import spag from '../../assets/spag.png';
import pandan from '../../assets/pandan.png';
import maja from '../../assets/maja.png';
import float from '../../assets/float.png';
import Splash from '../../Pages/Splash/Splash';
import NavbarUser from '../../components/NavbarUser/NavbarUser';

const IndividualOrderUser = () => {
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
          <Container fluid className={styles.pos}>
            <Container fluid>
              <h5 className={styles.title}>INDIVIDUAL TRAYS</h5>
            </Container>
            <Container fluid className={styles['deliver-pos']}>
              <div className={styles['deliver-box']}>
                <div className={styles['text-pos']}>
                  <Image src="/images/deliver.png" alt="Deliver Icon" />
                  <h5 className={styles.text}>
                    FREE delivery for orders with above 3 food trays!
                  </h5>
                </div>
              </div>
            </Container>
            <Container fluid>
              <Row>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={chicken} />
                    <Card.Body>
                      <Card.Title>Fried Chicken</Card.Title>
                      <Card.Text>
                        Deliciously crispy fried chicken with a crunchy coating
                        on the outside and juicy, tender chicken inside.
                      </Card.Text>
                      <Link to="/services-user/individual-order/1">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={bleu} />
                    <Card.Body>
                      <Card.Title>Cordon Bleu</Card.Title>
                      <Card.Text>
                        A cordon bleu is a dish of meat wrapped around cheese ,
                        then breaded and pan-fried or deep fried.
                      </Card.Text>
                      <Link to="/services-user/individual-order/2">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={shrimp} />
                    <Card.Body>
                      <Card.Title>Garlic Buttered Shrimp</Card.Title>
                      <Card.Text>
                        The sweet taste of this dish is attributed to the soda.
                        It also blends well with butter and garlic.
                      </Card.Text>
                      <Link to="/services-user/individual-order/3">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={chopsuey} />
                    <Card.Body>
                      <Card.Title>Chopsuey</Card.Title>
                      <Card.Text>
                        A dish prepared chiefly from bean sprouts, bamboo
                        shoots, water chestnuts, onions, mushrooms, and meat or
                        fish.
                      </Card.Text>
                      <Link to="/services-user/individual-order/4">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={fish} />
                    <Card.Body>
                      <Card.Title>Breaded Fish Fillet</Card.Title>
                      <Card.Text>
                        These crispy breaded fish fillets are coated in
                        breadcrumbs and gently pan-fried in oil and butter until
                        crispy, flaky, and golden.
                      </Card.Text>
                      <Link to="/services-user/individual-order/5">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={bami} />
                    <Card.Body>
                      <Card.Title>Bam - I</Card.Title>
                      <Card.Text>
                        Noodle dish that is made with a combination of canton
                        noodles, rice noodles, and a variety vegetables and
                        meats.
                      </Card.Text>
                      <Link to="/services-user/individual-order/6">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={beef} />
                    <Card.Body>
                      <Card.Title>Bisteak</Card.Title>
                      <Card.Text>
                        Bistek is a dish made of thinly sliced beef braised in a
                        mixture of calamnsi juice, soy sauce, pepper, and etc.
                      </Card.Text>
                      <Link to="/services-user/individual-order/7">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={lumpia} />
                    <Card.Body>
                      <Card.Title>Lumpia Shanghai</Card.Title>
                      <Card.Text>
                        Filipino-style spring roll made of ground pork, chicken
                        filling wrapped in thin crepes called lumpia wrappers.
                      </Card.Text>
                      <Link to="/services-user/individual-order/8">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={spag} />
                    <Card.Body>
                      <Card.Title>Spahetti</Card.Title>
                      <Card.Text>
                        Spaghetti is a long, thin, solid, cylindrical pasta. It
                        is a staple food of traditional Italian cuisine.
                      </Card.Text>
                      <Link to="/services-user/individual-order/9">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={pandan} />
                    <Card.Body>
                      <Card.Title>Buko Pandan</Card.Title>
                      <Card.Text>
                        Buko Pandan is a popular Filipino Dessert made using
                        young coconut, pandan leaves (or Screwpine leaves), and
                        sago pearls.
                      </Card.Text>
                      <Link to="/services-user/individual-order/10">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={maja} />
                    <Card.Body>
                      <Card.Title>Ube Maja Blanca</Card.Title>
                      <Card.Text>
                        Maja Blanca is a Filipino dessert made from coconut
                        milk, cornstarch, and sugar. Often called Coconut
                        Pudding.
                      </Card.Text>
                      <Link to="/services-user/individual-order/11">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={styles['pic-pos']}>
                  <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={float} />
                    <Card.Body>
                      <Card.Title>Mango Float</Card.Title>
                      <Card.Text>
                        This Filipino icebox dessert consists of layers of
                        graham crackers, sweetened whipped cream, and ripe
                        mango.
                      </Card.Text>
                      <Link to="/services-user/individual-order/12">
                        <Button variant="primary">Order Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      )}
    </div>
  );
};

export default IndividualOrderUser;
