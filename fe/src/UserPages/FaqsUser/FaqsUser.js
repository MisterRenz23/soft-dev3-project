import React, { useEffect, useState } from "react";
import { Container, Accordion } from "react-bootstrap";

import Footer from "../../components/footer/Footer";
import styles from "./Faqs.module.css";
import Splash from "../../Pages/Splash/Splash";
import "./Faqs.css";
import { Link } from "react-router-dom";
import NavbarUser from "../../components/NavbarUser/NavbarUser";

const FaqsUser = () => {
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
          <Container fluid className={styles.accordion}>
            <Container className={styles.pos}>
              <Container className={styles["faqs-text"]}>
                FREQUENTLY ASKED QUESTIONS
              </Container>
              <Container>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      What is Arvanthea all about?
                    </Accordion.Header>
                    <Accordion.Body>
                      Arvanthea is a food ordering website simillar to all other
                      food websites and applications where you can choose a food
                      and order it right away. To know more about Arvanthea, you
                      can visit our About Page or click{" "}
                      <Link to="/about">here</Link> to go to Arvanthea's About
                      page.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      I have a last-minute order, can you help me?
                    </Accordion.Header>
                    <Accordion.Body>
                      While we prefer all events to be confirmed 2 days in
                      advance, we will do our best to accommodate last-minute
                      orders. Please call us ASAP and give us as many details as
                      possible and we will check the schedule to see how we can
                      help you.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      What are your working hours?
                    </Accordion.Header>
                    <Accordion.Body>
                      We are open to taking orders from 8 AM until 5 PM.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How far in advance should I reserve my date?
                    </Accordion.Header>
                    <Accordion.Body>
                      We encourage you to reserve your orders at least 2 days
                      before the schedule, this way we have ample time to
                      prepare the ingredients and resources for your orders.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      What is your cancellation policy?
                    </Accordion.Header>
                    <Accordion.Body>
                      For cancellations, as stated in our contract that will be
                      sent before you place your payment, we will accept it as
                      long as it is 2 days prior to your reservation, and you
                      will get a refund of 100%. Otherwise, you will not be
                      refunded.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Where can I see my Orders?
                    </Accordion.Header>
                    <Accordion.Body>
                      After clicking your orders in the services page. You can
                      see all of them in the cart icon near the profile icon.
                      You can also click <Link to="/cart">here</Link> to go to
                      your bag.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      How can I create my own account?
                    </Accordion.Header>
                    <Accordion.Body>
                      To create an account, you just click the register icon on
                      the right side of the navigation bar or you can also click{" "}
                      <Link to="/register">here</Link> to register.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      How do I pay for the food ordered?
                    </Accordion.Header>
                    <Accordion.Body>
                      After clicking pay now in your cart, you just need to
                      click the pay now button and you will be redirected to the
                      payments page.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8">
                    <Accordion.Header>
                      Can I access Arvanthea using my cellphone?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes. Since Arvanthea is a web application, you can easily
                      search for Arvanthea in any search engines that you are
                      using.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="9">
                    <Accordion.Header>Do you deliver?</Accordion.Header>
                    <Accordion.Body>
                      Yes. Arvanthea does deliver foods. If you purchase a set
                      delivery is free if you are withing Cebu City. If you
                      purchase per food, then you will need atleast a minimum of
                      3 orders to avail free delivery within Cebu City.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Container>
            </Container>
          </Container>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqsUser;
