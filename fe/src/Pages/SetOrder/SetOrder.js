import React, { useState, useEffect } from 'react';
import { Container, Image, Tab, Tabs } from 'react-bootstrap';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import Set from '../../components/Set/Set';
import SetB from '../../components/SetB/SetB';
import SetC from '../../components/SetC/SetC';
import SetD from '../../components/SetD/SetD';
import Splash from '../Splash/Splash';
import styles from './SetOrder.module.css';
import './SetOrder.css';

const SetOrder = () => {
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
            <Image
              className={styles.pic}
              src="/images/SetOrder.png"
              alt="Set Order"
            />
          </div>
          <Container fluid className={styles.nav}>
            <Container fluid className={styles.tabs}>
              <Tabs defaultActiveKey="a" justify variant="pills">
                <Tab eventKey="a" title="Set A">
                  <Set />
                </Tab>
                <Tab eventKey="b" title="Set B">
                  <SetB />
                </Tab>
                <Tab eventKey="c" title="Set C">
                  <SetC />
                </Tab>
                <Tab eventKey="d" title="Set D">
                  <SetD />
                </Tab>
              </Tabs>
            </Container>
          </Container>
        </div>
      )}
    </div>
  );
};

export default SetOrder;
