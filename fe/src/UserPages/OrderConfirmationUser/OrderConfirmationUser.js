import React from "react";
import styles from "./OrderConfirmationUser.module.css";
import { Link } from "react-router-dom";

const OrderConfirmationUser = () => {
  return (
    <div className={styles["whole-page"]}>
      <div className={styles["center"]}>
        <div className={styles["box"]}>
          <div className={styles["success-section"]}>
            <img
              className={styles["icon"]}
              src="/images/success-icon.svg"
              alt="success-message"
            />
            <h2>SUCCESS</h2>
          </div>
          <div className={styles["text-section"]}>
            <div className={styles["text"]}>
              <h1>Thank You For Ordering!</h1>
              <p>
                Please for an order confirmation email Kindly check your email
                for the details of the payment methods and delivery options. A
                representative will be reaching out to you for the payment
                confirmation and order processing.
              </p>
              <p className={styles["end-text"]}>Enjoy Your Day Ahead!</p>
            </div>
            <Link to="/services-user">
              <button className={styles["back-button"]}>Back To Menu</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationUser;
