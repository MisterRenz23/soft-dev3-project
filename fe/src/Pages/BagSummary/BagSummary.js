import React from 'react';
import NavbarUser from '../../components/NavbarUser/NavbarUser.js';
import { Link } from 'react-router-dom';
import styles from './BagSummary.module.css';
import { Button } from 'react-bootstrap';
import { RealtimeData } from './RealTimeData';
import { set, ref } from 'firebase/database';
import { db } from '../../components/FireBase/firebase';

const BagSummary = () => {
  function handleSubmit() {
    var random_string = '';
    var showdate = new Date();
    var displaydate =
      showdate.getDate() +
      '/' +
      showdate.getMonth() +
      '/' +
      showdate.getFullYear();
    var characters = '135679';
    for (var i, i = 0; i < characters.length; i++) {
      random_string += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    set(ref(db, `/SentOrders/${random_string}`), {
      OrderNo: random_string,
      DateOrdered: displaydate,
      ConfirmStatus: 'Pending',
    });
  }
  return (
    <div className={styles['page-container']}>
      <NavbarUser />
      <h1 className={styles['title-text']}>
        Woohoo! Let's complete your order, shall we? 🥳 🙌 🍽️
      </h1>
      <div className={styles['content']}>
        <div>
          <div className={styles['box-summary']}>
            <h2 className={styles['title-order']}>Order Summary</h2>
            <div className={styles['horizontal-line']}></div>
            <div className={styles['cart-products']}>
              <RealtimeData />
            </div>

            <div className={styles['inline']}>
              <h3 className={styles['total-text']}></h3>
              <h3 className={styles['total-product-price']}></h3>
            </div>
            <Link to="/services-user/order-confirmation">
              <Button
                onClick={handleSubmit}
                className={styles['checkout-button']}
              >
                Proceed to Checkout
              </Button>
            </Link>
            <Link to="/services-user/individual-order">
              <Button className={styles['checkout-button1']}>Order More</Button>
            </Link>
          </div>
        </div>

        <div className={styles['instruction-text']}>
          <div className={styles['title-order-one']}>
            What's going to happen next?
          </div>
          <div className={styles['horizontal-line-two']}></div>
          <div className={styles['information']}>
            <h4>Delivery Options</h4>
            <p>
              Select how you will be receiving your order, either pick-up,
              Angkas, Lalamove, or Grab.
            </p>
            <h4>Payment Information</h4>
            <p>Choose a payment method and enter your payment details.</p>
            <h4>Order Confirmation</h4>
            <p>Place your order and receive a confirmation email.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagSummary;
