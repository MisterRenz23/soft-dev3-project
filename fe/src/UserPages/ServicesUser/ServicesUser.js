import React, { useState, useEffect } from 'react';
import styles from './ServicesUser.module.css';
import { Button } from 'react-bootstrap';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import NavbarUser from '../../components/NavbarUser/NavbarUser';
import Splash from '../../Pages/Splash/Splash';

const ServicesUser = () => {
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
        <div className={styles['page-container']}>
          <NavbarUser />
          <div className={styles['header-container']}>
            <h2 className={styles['h2-text']}>SERVICES</h2>
            <h1 className={styles['h1-text']}>
              BRINGING PEOPLE TOGETHER FOR ALL LIFE'S OCCASION
            </h1>
            <p className={styles['p-text']}>
              To get started, simply select the service you're looking for:
            </p>
          </div>
          <div className={styles['box-container']}>
            <div className={styles['box-1']}>
              <div className={styles['picture-container-box1']}></div>
              <div className={styles['box-text-container']}>
                <h1 className={styles['box-1-h1-text']}>FOOD PACKAGE</h1>
                <p className={styles['box-1-p-text']}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <Link to="/services-user/set-order">
                  <Button
                    className={styles['button-view-menu']}
                    variant="primary"
                    type="submit"
                  >
                    VIEW MENUS
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles['box-2']}>
              <div className={styles['picture-container-box2']}></div>
              <div className={styles['box-text-container']}>
                <h1 className={styles['box-1-h1-text']}>INDIVIDUAL TRAYS</h1>
                <p className={styles['box-1-p-text']}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting.
                </p>
                <Link to="/services-user/individual-order">
                  <Button
                    className={styles['button-view-menu']}
                    variant="primary"
                    type="submit"
                  >
                    VIEW MENUS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default ServicesUser;
