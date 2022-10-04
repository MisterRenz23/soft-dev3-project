import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import API from '../../API';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import Splash from '../Splash/Splash';
import styles from './Feedback.module.css';
import FeedbackInt from './FeedbackInt';

const Feedback = () => {
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
          <NavBarComponent />
          <Container fluid className={styles['exp-pos']}>
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

export default Feedback;
