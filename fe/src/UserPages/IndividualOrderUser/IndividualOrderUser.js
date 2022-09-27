import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./IndividualOrderUser.module.css";
import Splash from "../../Pages/Splash/Splash";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import Individual from "./Individual";

const IndividualOrderUser = () => {
  const [loading, setLoading] = useState(true);

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
            <Container fluid className={styles["deliver-pos"]}>
              <div className={styles["deliver-box"]}>
                <div className={styles["text-pos"]}>
                  <Image src="/images/deliver.png" alt="Deliver Icon" />
                  <h5 className={styles.text}>
                    FREE delivery for orders with above 3 food trays!
                  </h5>
                </div>
              </div>
            </Container>
            <Container fluid>
              <Row>
                <Col className={styles["pic-pos"]}>
                  <Individual />
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
