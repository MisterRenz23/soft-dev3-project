import React, { useState } from "react";
import { Grid, Row, Col } from "@nordnet/grid";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useForm from "./useForm";
import validate from "./validateInfo";
import styles from "./Register.module.css";
import "./Register.css";
import Input from "react-phone-number-input/input";
import "react-dropdown/style.css";
import FormSuccess from "../Register/FormSuccess";
import { RadioGroup, Radio } from "react-radio-group";

const RegisterV2 = () => {
  const { handleChange, handleSubmit, registerSuccess, values, errors } =
    useForm(validate);

  return registerSuccess ? (
    <FormSuccess />
  ) : (
    <div className={styles["page-container"]}>
      <NavBarComponent />
      <div className={styles["whole-box"]}>
        <div className={styles["first-box"]}>
          <Grid>
            <Row componentClass="nav">
              <Col xs={6} noPadding>
                <div className="title-description">
                  <h2 className={styles["h2-text"]}>Create Account</h2>
                  <h3 className={styles["h3-text"]}>
                    Already have an account?{"  "}
                    <Link to="/login" className={styles["login-link"]}>
                      Sign in Here
                    </Link>
                  </h3>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control
                      required
                      className={styles["form-controller"]}
                      type="text"
                      placeholder="First Name"
                      name="first_name"
                      value={values.first_name}
                      onChange={handleChange}
                    />
                    {errors.first_name && <p>{errors.first_name}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control
                      required
                      className={styles["form-controller"]}
                      type="text"
                      placeholder="Middle Name"
                      name="middle_name"
                      value={values.middle_name}
                      onChange={handleChange}
                    />
                    {errors.middle_name && <p>{errors.middle_name}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control
                      required
                      className={styles["form-controller"]}
                      type="text"
                      placeholder="Last Name"
                      name="last_name"
                      value={values.last_name}
                      onChange={handleChange}
                    />
                    {errors.last_name && <p>{errors.last_name}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control
                      required
                      className={styles["form-controller"]}
                      type="text"
                      placeholder="Current Address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                    />
                    {errors.address && <p>{errors.address}</p>}
                  </Form.Group>

                  <div className="radio-container">
                    <RadioGroup
                      className="radio-group"
                      name="sex"
                      selectedValue={values.sex}
                      onChange={(sex) =>
                        handleChange({ target: { value: sex, name: "sex" } })
                      }
                    >
                      <Radio value="male" className="radio-selection" />
                      Male{"                       "}
                      <Radio value="female" />
                      Female
                    </RadioGroup>
                    {errors.sex && <p>{errors.sex}</p>}
                  </div>

                  <Input
                    className="number-container"
                    placeholder="Contact No."
                    country="PH"
                    international
                    withCountryCallingCode
                    name="contact_number"
                    value={values.contact_number}
                    onChange={(contact_number) =>
                      handleChange({
                        target: {
                          value: contact_number,
                          name: "contact_number",
                        },
                      })
                    }
                  />
                  {errors.contact_number && <p>{errors.contact_number}</p>}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      required
                      className={styles["form-controller"]}
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </Form.Group>

                  <DatePicker
                    selected={values.startDate}
                    name="birth_date"
                    placeholderText="Birthdate: yyyy/mm/dd"
                    dateFormat="yyyy/MM/dd"
                    onChange={(date) =>
                      handleChange({
                        target: { value: date, name: "startDate" },
                      })
                    }
                  />
                  {errors.startDate && (
                    <p className={styles["birthdate-required"]}>
                      {errors.startDate}
                    </p>
                  )}
                </Form>
              </Col>
              <Col xs={6} noPadding>
                <Form
                  className="second-form-controller"
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control
                      required
                      className={styles["form-controller-second-col"]}
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                  </Form.Group>

                  <Form.Group
                    className={styles["mb-3"]}
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      required
                      className={styles["form-controller-second-col2"]}
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                  </Form.Group>

                  <Form.Group
                    className={styles["mb-3"]}
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      required
                      className={styles["form-controller-second-col3"]}
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                    />
                    {errors.confirm_password && (
                      <p>{errors.confirm_password}</p>
                    )}
                  </Form.Group>

                  <Button
                    className={styles["button-create-account"]}
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Create Account
                  </Button>

                  <p className={styles["or-text"]}>- or -</p>

                  <div className={styles["button-container"]}>
                    <Button
                      disabled
                      className={styles["button-sign-in-google"]}
                      variant="primary"
                      type="submit"
                    >
                      Sign in with Google
                    </Button>
                  </div>
                  <div className={styles["button-container"]}>
                    <Button
                      disabled
                      className={styles["button-sign-in-facebook"]}
                      variant="primary"
                      type="submit"
                    >
                      Sign in with Facebook
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default RegisterV2;
