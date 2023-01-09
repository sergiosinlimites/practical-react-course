import { useContext, useEffect, useState } from 'react';
import AppContext from '@context/AppContext';
import OrderProduct from '../components/OrderProduct';
import flecha from '@icons/flechita.svg';
import close from '@icons/icon_close.png';
import '@styles/OrderDetail.scss';

const OrderDetail = () => {
  const [accumulatedProducts, setAccumulatedProducts] = useState([]);
  const { state: { cart } } = useContext(AppContext);

  const accumulateProducts = products => {
    const arrangedProducts = [];
    products.forEach((product) => {
      const existingProduct = arrangedProducts.find(p => p.id === product.id);
      if(existingProduct){
        existingProduct.price += product.price;
      } else  {
        arrangedProducts.push(product);
      }
    })
    return arrangedProducts;
    // return products.reduce((accumulator, product) => {
    //   const existingProduct = accumulator.find(p => p.id === product.id);
    //   if(existingProduct){
    //     existingProduct.price += Number(product.price);
    //   } else {
    //     accumulator.push(product);
    //   }
    //   return accumulator;
    // }, []);
  }

  useEffect(() => {
    if(cart){
      const acumulated = accumulateProducts(cart);
      setAccumulatedProducts(acumulated);
    }
  }, [cart])

  return (
    <aside className="OrderDetail">
      <div className="title-container">
        <img src={flecha} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        
        {
          accumulatedProducts.map((product, index) => (
            <OrderProduct product={product} key={`${index}-orderItem-${product.id}`} />
          ))
        }
        
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default OrderDetail;