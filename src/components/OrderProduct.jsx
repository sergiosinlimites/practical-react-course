import '@styles/OrderProduct.scss';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import { useContext } from 'react';

const OrderProduct = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemoveProduct = (id) => {
    removeFromCart(id)
  }

  return (
    <div className="OrderProduct">
      <figure>
        <img src={ product.images[0] } alt={ product.title } />
      </figure>
      <p>{ product.title }</p>
      <p>${ product.price }</p>
      <img src={close} alt="close" onClick={() => handleRemoveProduct(product.id)} />
    </div>
  );
}

export default OrderProduct;