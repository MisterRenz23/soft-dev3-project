import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import styles from "./Register.module.css";
import Input from "react-phone-number-input/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup, Radio } from "react-radio-group";
import "./Register.css";
import useForm from "./useForm";
import validate from "./validateInfo";
import FormSuccess from "./FormSuccess";

const Register = () => {
  const {
    handleChange,
    handleSubmit,
    changeDate,
    registerSuccess,
    values,
    errors,
  } = useForm(validate);

  return registerSuccess ? (
    <FormSuccess />
  ) : (
    <div className={styles["page-container"]}>
      <NavBarComponent />
      <div className={styles["container-box"]}>
        <div className={styles["box-form"]}>
          <div className={styles["title-description"]}>
            <h2>Sign Up</h2>
            <p>
              Have an account?{" "}
              <Link to="/login" className={styles["create-acc-link"]}>
                Login
              </Link>
            </p>
          </div>
          <div className={styles["form-container"]}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  required
                  className={styles["form-controller"]}
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
              </Form.Group>

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
                {errors.lastname && <p>{errors.lastname}</p>}
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

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  required
                  className={styles["form-controller"]}
                  type="email"
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
                placeholderText="YYYY/MM/DD"
                dateFormat="yyyy/MM/dd"
                onChange={(date) =>
                  handleChange({ target: { value: date, name: "startDate" } })
                }
              />
              {errors.startDate && <p>{errors.startDate}</p>}

              <Input
                className="number-container"
                country="PH"
                international
                withCountryCallingCode
                placeholder="+63"
                name="contact_number"
                value={values.contact_number}
                onChange={(contact_number) =>
                  handleChange({
                    target: { value: contact_number, name: "contact_number" },
                  })
                }
              />
              {errors.contact_number && <p>{errors.contact_number}</p>}

              <RadioGroup
                className="radio-group"
                name="sex"
                selectedValue={values.sex}
                onChange={(sex) =>
                  handleChange({ target: { value: sex, name: "sex" } })
                }
              >
                <Radio value="male" />
                Male
                <Radio value="female" />
                Female
              </RadioGroup>
              {errors.sex && <p>{errors.sex}</p>}

              <Form.Group
                className={styles["mb-3"]}
                controlId="formBasicPassword"
              >
                <Form.Control
                  required
                  className={styles["form-controller"]}
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
                  className={styles["form-controller"]}
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                />
                {errors.confirm_password && <p>{errors.confirm_password}</p>}
              </Form.Group>
              <div className={styles["button-container"]}>
                <Button
                  className={styles["button-sign-in"]}
                  variant="primary"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
