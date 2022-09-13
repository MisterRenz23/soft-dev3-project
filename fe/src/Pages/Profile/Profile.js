import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Splash from '../../Pages/Splash/Splash.js';
import NavbarUser from '../../components/NavbarUser/NavbarUser.js';
import { Container, Image } from 'react-bootstrap';
import styles from './Profile.module.css';

const Profile = () => {
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
          <Container>
            <Image src="/images/ProfileBg.png" alt="Profile Background" />
          </Container>
          <Container fluid className={styles['box-container']}>
            <div className={styles.box}>
              <Container className={styles['profile-image']}>
                <Image
                  className={styles.img}
                  src="/images/ProfileHolder.png"
                  alt="Profile Holder"
                />
              </Container>
              <Container fluid className={styles['name-pos']}>
                <h5 className={styles['profile-name']}>Krishna Tamosa</h5>
              </Container>
              <Container fluid className={styles['btn-pos']}>
                <Link to="/profile/edit-profile" className={styles['link-btn']}>
                  <h5 className={styles['edit-btn']}>Edit Profile {'>'}</h5>
                </Link>
              </Container>
              <Container fluid>
                <Container fluid className={styles['form-pos']}>
                  <div>
                    <h5>Username</h5>
                  </div>
                  <Container className={styles['form-container']}>
                    <h5 className={styles['form-text']}>Koorezna</h5>
                  </Container>
                </Container>
              </Container>
              <Container fluid>
                <Container fluid className={styles['form-pos']}>
                  <div>
                    <h5>Address</h5>
                  </div>
                  <Container className={styles['form-container']}>
                    <h5 className={styles['form-text']}>
                      449 Filipa Bldg., Katipunan Street, Labangon, Cebu City
                    </h5>
                  </Container>
                </Container>
              </Container>
              <Container fluid>
                <Container fluid className={styles['form-pos']}>
                  <div>
                    <h5>Contact Number</h5>
                  </div>
                  <Container className={styles['form-container']}>
                    <h5 className={styles['form-text']}>092114456356</h5>
                  </Container>
                </Container>
              </Container>
              <Container fluid>
                <Container fluid className={styles['form-pos']}>
                  <div>
                    <h5>Email Address</h5>
                  </div>
                  <Container className={styles['form-container']}>
                    <h5 className={styles['form-text']}>
                      krshnacarla@gmail.com
                    </h5>
                  </Container>
                </Container>
              </Container>
              <Container fluid>
                <Container fluid className={styles['form-pos']}>
                  <div>
                    <h5>Birthdate</h5>
                  </div>
                  <Container className={styles['form-container']}>
                    <h5 className={styles['form-text']}>June 27, 2004</h5>
                  </Container>
                </Container>
              </Container>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Profile;
