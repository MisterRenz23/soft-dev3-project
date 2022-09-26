import React from "react";
import styles from "./AddedProductsToCart.module.css";

const AddedProducts = (ProductImage) => {
  return (
    <div className={styles["inline"]}>
      <img
        src={`/images/IndividualTrayDetail/chicken.png`}
        className={styles["images"]}
        alt="Product"
        width="40px"
        height="40px"
      />
      <h3 className={styles["product-quantity"]}>2x</h3>
      <h3 className={styles["product-name"]}>Fried Chicken</h3>
      <h3 className={styles["product-price"]}>₱ 1700.00</h3>
    </div>
  );
};

export default AddedProducts;
