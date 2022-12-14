import React, { useEffect, useState } from 'react';
import NavbarUser from '../../components/NavbarUser/NavbarUser.js';
import Splash from '../../Pages/Splash/Splash.js';
import API from '../../API';
import FeedbackInt from '../../Pages/Feedback/FeedbackInt.js';
import { Container, Form } from 'react-bootstrap';
import styles from '../../Pages/Feedback/Feedback.module.css';

const FeedbackUser = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const FeedbackList = async (e) => {
    let formField = new FormData();

    formField.append('feedback', feedback);

    await API({
      method: 'post',
      url: '/user/feedback',
      data: formField,
    }).then(() => {
      window.location.reload();
    });
  };

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
          <Container fluid className={styles['exp-pos']}>
            <Container fluid>
              <h5 className={styles.exp}>HOW WAS YOUR EXPERIENCE?</h5>
            </Container>
            <Container fluid>
              <h5 className={styles.common}>LEAVE US A REVIEW</h5>
            </Container>
            <Container fluid className={styles['text-area']}>
              <Form className={styles.form}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Container>
            <Container fluid>
              <button className={styles['submit-btn']} onClick={FeedbackList}>
                Submit
              </button>
            </Container>
            <Container fluid>
              <Container fluid className={styles.box}>
                <Container fluid>
                  <h4 className={styles['box-text']}>
                    WHAT OUR CUSTOMERS ARE SAYING...
                  </h4>
                </Container>
                <Container fluid>
                  <FeedbackInt />
                </Container>
              </Container>
            </Container>
          </Container>
        </div>
      )}
    </div>
  );
};
export default FeedbackUser;
