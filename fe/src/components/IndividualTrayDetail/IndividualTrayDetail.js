import React, { useState } from "react";
import styles from "./IndividualTrayDetail.module.css";
import NavbarUser from "../NavbarUser/NavbarUser";
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { Button } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";

const IndividualTrayDetail = ({
  ProductName,
  ProductPrice,
  ProductServing,
  ProductDescription,
  ProductID,
  ProductImage,
}) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles["background"]}>
      <div className={styles["page-container"]}>
        <button className={styles["back-button-container"]}>
          <FiArrowLeft className={styles["back-button"]} />
        </button>

        <div className={styles["page-content"]}>
          <div className={styles["image-container"]}>
            <img
              src={`/images/IndividualTrayDetail/${ProductImage}`}
              className={styles["image-size"]}
              alt="fried-chicken-picture"
            />
          </div>
          <div className={styles["product-text"]}>
            <div className={styles["name-price-inline"]}>
              <h1 className={styles["product-name"]}>
                {ProductName}

                <span className={styles["product-price"]}>
                  ₱ {ProductPrice}.00
                </span>
              </h1>
            </div>

            <p className={styles["product-serving"]}>
              Good for {ProductServing} persons
            </p>
            <p className={styles["product-description"]}>
              {ProductDescription}
            </p>
            <div className={styles["counter"]}>
              <button
                className={styles["icon-minus"]}
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
              >
                <VscChromeMinimize className={styles["icon-minus"]} />
              </button>

              <h2 className="number-counter">{count}</h2>
              <VscAdd
                className={styles["icon-add"]}
                onClick={() => setCount(count + 1)}
              />
              <Button className={styles["button-add-order"]}>Add To Bag</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualTrayDetail;
