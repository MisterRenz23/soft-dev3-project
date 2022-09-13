import React from 'react';
import IndividualTrayDetail from '../IndividualTrayDetail/IndividualTrayDetail';

const ProductOne = () => {
  return (
    <IndividualTrayDetail
      ProductName="Fried Chicken"
      ProductPrice="850"
      ProductServing="10-15"
      ProductDescription="Deliciously crispy fried chicken with a crunchy coating on the outside and juicy, tender chicken inside."
      ProductImage="chicken.png"
    />
  );
};

export default ProductOne;
