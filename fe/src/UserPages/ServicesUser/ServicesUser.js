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
                  In this section, you'll see the different packages that Arvanthea offers to its customers.
                  With every set of packages that can be customized to your own
                  preference as long as it has the same reasonable price as the
                  food that's been replaced. For further inquiries kindly message the owner in the contacts provided.
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
                  In this section, you can order individual food trays that you want to be served in the comfort of your home. Arvanthea assures that the food you order will always be fresh and delicious as it is made with a mother's love and care.
                  You'll enjoy eating the food for its reasonable price and flavorsome taste.
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
