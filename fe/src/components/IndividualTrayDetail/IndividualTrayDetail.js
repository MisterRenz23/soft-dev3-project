import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './IndividualTrayDetail.module.css';
import { VscAdd } from 'react-icons/vsc';
import { VscChromeMinimize } from 'react-icons/vsc';
import { Button } from 'react-bootstrap';
import { FiArrowLeft } from 'react-icons/fi';
import API from '../../API';
import 'firebase/compat/firestore';
import { db } from '../FireBase/firebase';
import { set, ref } from 'firebase/database';

const IndividualTrayDetail = () => {
  const [user, setProfile] = JSON.parse(localStorage.getItem('user_data'));

  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [count, setCount] = useState(0);

  const writeToDatabase = () => {
    set(ref(db, `/Cart/${user.username}/${id}`), {
      ProductName: [product.title],
      ProductPrice: [product.price],
      ProductQuantity: [count],
    });
  };

  const getSingleProduct = async () => {
    const { data } = await API.get(`/user/product_list/${id}/`);

    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div className={styles['background']}>
      <div className={styles['page-container']}>
        <Link to="/services-user/individual-order">
          <button className={styles['back-button-container']}>
            <FiArrowLeft className={styles['back-button']} />
          </button>
        </Link>

        <div className={styles['page-content']}>
          <div className={styles['image-container']}>
            <img
              src={product.image}
              className={styles['image-size']}
              alt="Product"
            />
          </div>
          <div className={styles['product-text']}>
            <div className={styles['name-price-inline']}>
              <h1 className={styles['product-name']}>
                {product.title}

                <span className={styles['product-price']}>
                  ₱ {product.price}
                </span>
              </h1>
            </div>

            <p className={styles['product-serving']}>
              Good for 10 - 15 persons
            </p>
            <p className={styles['product-description']}>
              {product.description}
            </p>
            <div className={styles['counter']}>
              <button
                className={styles['icon-minus']}
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
              >
                <VscChromeMinimize className={styles['icon-minus']} />
              </button>

              <h2 className="number-counter">{count}</h2>
              <VscAdd
                className={styles['icon-add']}
                onClick={() => setCount(count + 1)}
              />
              <Link to="/order-summary">
                <Button
                  onClick={writeToDatabase}
                  className={styles['button-add-order']}
                >
                  Add To Bag
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualTrayDetail;
