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

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [phonenumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(startDate);
    console.log(phonenumber);
    console.log(gender);
    console.log(password);
    console.log(confirmPassword);
  };

  return (
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
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  required
                  className={styles["form-controller"]}
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  required
                  className={styles["form-controller"]}
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              {/* <DatePicker
                format="y-MM-dd"
                className={styles["react-date-picker"]}
                required
                onChange={setDate}
                value={date}
              /> */}
              {/*  */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

              {/*  */}
              <Input
                className="number-container"
                country="PH"
                international
                withCountryCallingCode
                placeholder="+63"
                value={phonenumber}
                onChange={setPhoneNumber}
              />

              <RadioGroup
                className="radio-group"
                name="Sex"
                selectedValue={gender}
                onChange={setGender}
              >
                <Radio value="male" />
                Male
                <Radio value="female" />
                Female
              </RadioGroup>

              <Form.Group
                className={styles["mb-3"]}
                controlId="formBasicPassword"
              >
                <Form.Control
                  required
                  className={styles["form-controller"]}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className={styles["mb-3"]}
                controlId="formBasicPassword"
              >
                <Form.Control
                  required
                  className={styles["form-controller"]}
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <div className={styles["button-container"]}>
                <Button
                  className={styles["button-sign-in"]}
                  variant="primary"
                  type="submit"
                  onClick={handleSubmit}
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
