import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import '@styles/Product.scss';

const Product = ({ product }) => {
  const { addToCart, state } = useContext(AppContext)

  const handleClick = item => {
    addToCart(item);
    console.log(state.cart);
  }
  
  return (
    <div className="Product">
      <img src={ product.images[0] } alt={ product.title } />
      <div className="Product-info">
        <div>
          <p>${ product.price }</p>
          <p>{ product.title }</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="add to cart" />
        </figure>
      </div>
    </div>
  );
}

export default Product;