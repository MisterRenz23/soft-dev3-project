import React from 'react';
import AddedProducts from '../../components/AddedProductsToCart/AddedProductsToCart';
import NavbarUser from '../../components/NavbarUser/NavbarUser.js';
import styles from './BagSummary.module.css';
import { Button } from 'react-bootstrap';

const BagSummary = () => {
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
              <AddedProducts ProductImage="chicken.png" />
              <AddedProducts ProductImage="chicken.png" />
              <AddedProducts ProductImage="chicken.png" />
              <AddedProducts ProductImage="chicken.png" />
            </div>
            <div className={styles['horizontal-line-total']}></div>
            <div className={styles['inline']}>
              <h3 className={styles['total-text']}>Total</h3>
              <h3 className={styles['total-product-price']}>₱ 75000.00</h3>
            </div>
            <Button className={styles['checkout-button']}>
              Proceed to Checkout
            </Button>
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
