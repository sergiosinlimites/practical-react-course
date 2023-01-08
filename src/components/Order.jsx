import '../styles/Order.scss';
import flecha from '../../public/assets/icons/flechita.svg';

const Order = () => {
  return (
    <div className="order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={flecha} alt="arrow" />
    </div>
  );
}

export default Order;