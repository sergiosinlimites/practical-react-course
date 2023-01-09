import '@styles/OrderProduct.scss';
import close from '@icons/icon_close.png';

const OrderProduct = ({ product }) => {
  return (
    <div className="OrderProduct">
      <figure>
        <img src={ product.images[0] } alt={ product.title } />
      </figure>
      <p>{ product.title }</p>
      <p>${ product.price }</p>
      <img src={close} alt="close" />
    </div>
  );
}

export default OrderProduct;