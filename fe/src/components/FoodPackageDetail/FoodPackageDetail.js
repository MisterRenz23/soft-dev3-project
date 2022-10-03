import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./FoodPackageDetail.module.css";
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { Button } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import API from "../../API";
import NavbarUser from "../NavbarUser/NavbarUser";

const FoodPackageDetail = () => {
  //   const [product, setProduct] = useState([]);
  //   const { id } = useParams();
  const [count, setCount] = useState(0);

  //   const getSingleProduct = async () => {
  //     const { data } = await API.get(`/user/product_list/${id}/`);
  //     console.log(data);
  //     setProduct(data);
  //   };

  //   useEffect(() => {
  //     getSingleProduct();
  //   }, []);

  return (
    <div className={styles["background"]}>
      <NavbarUser />
      <div className={styles["page-container"]}>
        <Link className={styles["link"]} to="/services-user/set-order">
          <h3 className={styles["back-text"]}> {">"} Back To Menu</h3>
        </Link>
        <div className={styles["page-content"]}>
          <div className={styles["image-container"]}>
            <img
              //   src={product.image}
              src="/images/FoodPackagesDetail/set-a.svg"
              className={styles["image-size"]}
              alt="Product"
            />
          </div>
          <div className={styles["product-text"]}>
            <div className={styles["name-price-inline"]}>
              <h1 className={styles["product-name"]}>
                {/* {product.title} */}
                Set A Menu
                <span className={styles["product-price"]}>
                  {/* ₱ {product.price} */}₱ 2900.00
                </span>
              </h1>
            </div>

            <p className={styles["product-serving"]}>
              Good for 10 - 15 persons
            </p>
            <p className={styles["product-description"]}>
              {/* {product.description} */}
              Breaded fish fillet, Bam-i, Fried Chicken, Lumpia Shanghai.
            </p>
            <p>For customization, messages us after you have check this out.</p>
            <div className={styles["counter"]}>
              <button
                className={styles["icon-minus"]}
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
              >
                <VscChromeMinimize className={styles["icon-minus"]} />
              </button>
              <h2 className="number-counter">{count}</h2>
              <button
                className={styles["icon-minus"]}
                onClick={() => setCount(count + 1)}
              >
                <VscAdd className={styles["icon-add"]} />
              </button>

              <Button className={styles["button-add-order"]}>Add To Bag</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPackageDetail;
