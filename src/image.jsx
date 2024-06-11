// src/assets/Image.js
import React from 'react';
import product from "./products"

const Image = () => {
  return (
    <img src={product.path} alt="Lambo image" style={{ width: '100%', height: 'auto', borderRadius:'5px' }} />
  );
};

export default Image;
