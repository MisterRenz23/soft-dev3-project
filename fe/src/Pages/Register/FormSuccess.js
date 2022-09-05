import React from "react";
import { Button } from "react-bootstrap";
import styles from "./FormSuccess.module.css";
import { Link } from "react-router-dom";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className={styles["center-box"]}>
      <div className={styles["box-container"]}>
        <div className={styles["first-rectangle"]}>
          <div className={styles["icon-container"]}>
            <img
              className={styles["icon"]}
              src="/images/success-icon.svg"
              alt="success-message"
            />
          </div>
          <h3 className={styles["success-text"]}>success</h3>
        </div>
        <div className={styles["second-rectangle"]}>
          <p>
            Congratulations, your account has been successfully created. Please
            click continue to login.
          </p>
          <div className={styles["button-container"]}>
            <Link to="/login">
              <Button
                className={styles["button-continue"]}
                variant="primary"
                type="submit"
                onClick
              >
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSuccess;
