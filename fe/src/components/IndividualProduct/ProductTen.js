import React from 'react';
import IndividualTrayDetail from '../IndividualTrayDetail/IndividualTrayDetail';

const ProductTen = () => {
  return (
    <IndividualTrayDetail
      ProductName="Buko Pandan"
      ProductPrice="500"
      ProductServing="10-15"
      ProductDescription="Buko Pandan is a popular Filipino Dessert made using young coconut, pandan leaves (or Screwpine leaves), and sago pearls."
      ProductImage="pandan.png"
    />
  );
};

export default ProductTen;
