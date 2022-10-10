import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Splash from '../Splash/Splash.js';
import NavbarUser from '../../components/NavbarUser/NavbarUser.js';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import styles from './Profile.module.css';
import API from '../../API.js';

const NewProfile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setProfile] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProfile = async () => {
    const { data } = await API.get(`/user/profile/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    });
    setProfile(data);
  };

  const nav = () => {
    navigate('/home-user');
  };

  useEffect(() => {
    getProfile();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
              <div className={styles['box-size']}>
                <Container className={styles['profile-image']}>
                  <Image
                    className={styles.img}
                    src="/images/ProfileHolder.png"
                    alt="Profile Holder"
                  />
                </Container>
                <Container fluid className={styles['name-pos']}>
                  <h5 className={styles['profile-name']}>
                    {user.first_name} {user.middle_name} {user.last_name}
                  </h5>
                </Container>
                <Container fluid className={styles['btn-pos']}>
                  <Link
                    to={`/profile/edit-profile/${user.id}`}
                    className={styles['link-btn']}
                  >
                    <h5 className={styles['edit-btn']}>Edit Profile {'>'}</h5>
                  </Link>
                </Container>
                <Container fluid>
                  <Container fluid className={styles['form-pos']}>
                    <Row className={styles.row}>
                      <Col className={styles.col} xs={4}>
                        <div className={styles['col-title']}>
                          <h5>Username</h5>
                        </div>
                      </Col>
                      <Col className={styles.col} xs={8}>
                        <Container className={styles['form-container']} fluid>
                          <h5 className={styles['form-text']}>
                            {user.username}
                          </h5>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Container>
                <Container fluid>
                  <Container fluid className={styles['form-pos']}>
                    <Row className={styles.row}>
                      <Col className={styles['col-title']} xs={4}>
                        <div>
                          <h5>Address</h5>
                        </div>
                      </Col>
                      <Col className={styles.col} xs={8}>
                        <Container className={styles['form-container']}>
                          <h5 className={styles['form-text']}>
                            {user.address}
                          </h5>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Container>
                <Container fluid>
                  <Container fluid className={styles['form-pos']}>
                    <Row className={styles.row}>
                      <Col className={styles['col-title']} xs={4}>
                        <div>
                          <h5>Contact Number</h5>
                        </div>
                      </Col>
                      <Col className={styles.col} xs={8}>
                        <Container className={styles['form-container']}>
                          <h5 className={styles['form-text']}>
                            {user.contact_number}
                          </h5>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Container>
                <Container fluid>
                  <Container fluid className={styles['form-pos']}>
                    <Row className={styles.row}>
                      <Col className={styles['col-title']} xs={4}>
                        <div>
                          <h5>Email Address</h5>
                        </div>
                      </Col>
                      <Col className={styles.col} xs={8}>
                        <Container className={styles['form-container']}>
                          <h5 className={styles['form-text']}>{user.email}</h5>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Container>
                <Container fluid>
                  <Container fluid className={styles['form-pos']}>
                    <Row className={styles.row}>
                      <Col className={styles['col-title']} xs={4}>
                        <div>
                          <h5>Birthdate</h5>
                        </div>
                      </Col>
                      <Col className={styles.col} xs={8}>
                        <Container className={styles['form-container']}>
                          <h5 className={styles['form-text']}>
                            {user.birth_date}
                          </h5>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Container>
                <Container fluid className={styles['btn-posb']}>
                  <Button
                    className={styles['btn-size']}
                    variant="secondary"
                    onClick={nav}
                  >
                    Back
                  </Button>
                </Container>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default NewProfile;
