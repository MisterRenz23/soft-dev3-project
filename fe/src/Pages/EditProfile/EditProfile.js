import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../API';
import { useNavigate } from 'react-router-dom';
import styles from './EditProfile.module.css';
import NavbarUser from '../../components/NavbarUser/NavbarUser';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstname, setfirstName] = useState('');
  const [middlename, setmiddleName] = useState('');
  const [lastname, setlastName] = useState('');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  let loadStudents = async () => {
    const result = await API.get(`user/profile/${id}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    });

    setlastName(result.data.last_name);
    setfirstName(result.data.first_name);
    setmiddleName(result.data.middle_name);
    setName(result.data.username);
    setEmail(result.data.email);
    setPhone(result.data.contact_number);
    setAddress(result.data.address);
  };

  const updateSingleStudent = async () => {
    let formField = new FormData();

    formField.append('first_name', firstname);
    formField.append('middle_name', middlename);
    formField.append('last_name', lastname);
    formField.append('username', username);
    formField.append('email', email);
    formField.append('address', address);
    formField.append('contact_number', phone);

    await API({
      method: 'PUT',
      url: `user/profile/${id}/`,
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      data: formField,
    }).then(() => {
      navigate(`/user-profile/${id}`);
    });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const nav = () => {
    navigate('/profile/:id');
  };

  return (
    <div>
      <div className={styles['page-container']}>
        <NavbarUser />
        <Container fluid className={styles['box-container']}>
          <div className={styles.box}>
            <div className={styles['box-size']}>
              <Container fluid className={styles['edit-pos']}>
                <h5 className={styles.edit}>Edit Profile</h5>
              </Container>
              <Form>
                <Form.Group className={styles['form-pos']}>
                  <Row className={styles.row}>
                    <Col className={styles.col} xs={4}>
                      <Form.Label>First Name</Form.Label>
                    </Col>
                    <Col className={styles.col} xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setfirstName(e.target.value)}
                        className={styles['form-container']}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className={styles['form-pos']}>
                  <Row className={styles.row}>
                    <Col className={styles.col} xs={4}>
                      <Form.Label>Middle Name</Form.Label>
                    </Col>
                    <Col className={styles.col} xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="Middle Name"
                        value={middlename}
                        onChange={(e) => setmiddleName(e.target.value)}
                        className={styles['form-container']}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className={styles['form-pos']}>
                  <Row className={styles.row}>
                    <Col className={styles.col} xs={4}>
                      <Form.Label>Last Name</Form.Label>
                    </Col>
                    <Col className={styles.col} xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={lastname}
                        onChange={(e) => setlastName(e.target.value)}
                        className={styles['form-container']}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className={styles['form-pos']}>
                  <Row className={styles.row}>
                    <Col className={styles.col} xs={4}>
                      <Form.Label>Username</Form.Label>
                    </Col>
                    <Col className={styles.col} xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                        className={styles['form-container']}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className={styles['form-pos']}>
                  <Row className={styles.row}>
                    <Col className={styles.col} xs={4}>
                      <Form.Label>Email</Form.Label>
                    </Col>
                    <Col className={styles.col} xs={8}>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles['form-container']}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className={styles['form-pos']}>
                  <Row className={styles.row}>
                    <Col className={styles.col} xs={4}>
                      <Form.Label>Username</Form.Label>
                    </Col>
                    <Col className={styles.col} xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Phone Number"
                        name="contact_number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles['form-container']}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className={styles['form-pos']}>
                  <Row className={styles.row}>
                    <Col className={styles.col} xs={4}>
                      <Form.Label>Address</Form.Label>
                    </Col>
                    <Col className={styles.col} xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className={styles['form-container']}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
              <Container fluid className={styles['btn-pos']}>
                <Button
                  className={styles['btn-size']}
                  variant="primary"
                  onClick={updateSingleStudent}
                >
                  Save
                </Button>

                <Button
                  className={styles['btn-size']}
                  variant="secondary"
                  onClick={nav}
                >
                  Cancel
                </Button>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default EditProfile;
