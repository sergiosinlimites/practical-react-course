import React, { useState } from 'react';
import addToCart from '@icons/bt_add_to_cart.svg';
import '@styles/Product.scss';

const Product = ({ product }) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([])
  }
  
  return (
    <div className="Product">
      <img src={ product.images[0] } alt={ product.title } />
      <div className="Product-info">
        <div>
          <p>${ product.price }</p>
          <p>{ product.title }</p>
        </div>
        <figure onClick={handleClick}>
          <img src={addToCart} alt="add to cart" />
        </figure>
      </div>
    </div>
  );
}

export default Product;