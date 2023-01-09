import { useContext, useEffect, useState } from 'react';
import AppContext from '@context/AppContext';
import OrderProduct from '../components/OrderProduct';
import flecha from '@icons/flechita.svg';
import '@styles/OrderDetail.scss';

const OrderDetail = () => {
  const [accumulatedProducts, setAccumulatedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const { state: { cart } } = useContext(AppContext);

  const accumulateProducts = products => {
    const arrangedProducts = [];
    for(let product of products){
      const freezedObject = Object.assign({} ,product);
      const found = arrangedProducts.find(p => p.id === freezedObject.id);
      if(found){
        const index = arrangedProducts.indexOf(found);
        arrangedProducts[index].price += freezedObject.price;
      } else {
        arrangedProducts.push(freezedObject);
      }
    }
    return arrangedProducts;
  }

  const sumTotal = products => {
    const total = products.reduce((accumulator, product) => Number(accumulator) + Number(product.price), [0]);
    setTotal(total);
  }

  useEffect(() => {
    if(cart){
      console.log('se actualiza')
      console.log(cart)
      const acumulated = accumulateProducts(cart);
      sumTotal(cart);
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
          <p>${total}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
}

export default OrderDetail;