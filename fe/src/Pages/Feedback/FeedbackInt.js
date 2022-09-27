import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import API from '../../API';
import styles from './Feedback.module.css';

const FeedbackInt = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const getFeedbacks = async () => {
    const response = await API.get('user/feedback');
    setFeedbacks(response.data);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div>
      {feedbacks.map((feedback, index) => (
        <Container fluid className={styles['feedback-pos']}>
          <Container fluid className={styles['feedback-background']}>
            <p className={styles['feedback-text']}>{feedback.feedback}</p>
          </Container>
        </Container>
      ))}
    </div>
  );
};

export default FeedbackInt;
