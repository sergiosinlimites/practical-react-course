import React, { useState } from 'react';
import addToCart from '@icons/bt_add_to_cart.svg';
import '@styles/Product.scss';

const Product = () => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([])
  }
  
  return (
    <div className="Product">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image" />
      <div className="Product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleClick}>
          <img src={addToCart} alt="add to cart" />
        </figure>
        
      </div>
    </div>
  );
}

export default Product;