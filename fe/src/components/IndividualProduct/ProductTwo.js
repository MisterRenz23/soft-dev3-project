import React from 'react';
import IndividualTrayDetail from '../IndividualTrayDetail/IndividualTrayDetail';

const ProductTwo = () => {
  return (
    <IndividualTrayDetail
      ProductName="Cordon Bleu"
      ProductPrice="850"
      ProductServing="10-15"
      ProductDescription="A cordon bleu is a dish of meat wrapped around cheese , then breaded and pan-fried or deep fried."
      ProductImage="cordonbleu.png"
    />
  );
};

export default ProductTwo;
