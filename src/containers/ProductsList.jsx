import React, { useState, useEffect } from 'react'
import Product from "../components/Product";
import '@styles/ProductsList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios(`${API}/products`);
      console.log(response);
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div className="ProductsList">
      {
        products.map(product => {
          return <Product key={product.id} />
        })
      }
    </div>
  );
}

export default ProductsList;