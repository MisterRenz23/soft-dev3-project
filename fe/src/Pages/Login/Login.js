import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import styles from "./Login.module.css";
import useForm from "./useForm";
import validate from "./validateLogin";

const Login = () => {
  const { handleChange, clickLogin, values, errors } = useForm(validate);

  return (
    <div className={styles["page-container"]}>
      <NavBarComponent />
      <div className={styles["container-box"]}>
        <div className={styles["box-form"]}>
          <div className={styles["title-description"]}>
            <h2>Sign In</h2>
            <p>
              New to Arvanthea?{" "}
              <Link to="/register" className={styles["create-acc-link"]}>
                Create Account
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
                  name="username"
                  placeholder="Username"
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
                controlId="formBasicCheckbox"
              >
                <Form.Text className="forgot-password">
                  Forgot Password?
                </Form.Text>
              </Form.Group>
              <div className={styles["button-container"]}>
                <Button
                  className={styles["button-sign-in"]}
                  variant="primary"
                  type="submit"
                  onClick={clickLogin}
                >
                  Login
                </Button>
              </div>
              <div className={styles["line-container"]}>
                <div className={styles["lines"]}>
                  <div className={styles["circle"]}></div>
                </div>
              </div>
              <div className={styles["button-container"]}>
                <Button
                  className={styles["button-sign-in-google"]}
                  variant="primary"
                  type="submit"
                >
                  Sign in with Google
                </Button>
              </div>
              <div className={styles["button-container"]}>
                <Button
                  component={Link}
                  to="./login"
                  className={styles["button-sign-in-facebook"]}
                  variant="primary"
                  type="submit"
                >
                  Sign in with Facebook
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
