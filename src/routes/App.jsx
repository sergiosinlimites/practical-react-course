import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoverPassword from '../containers/RecoverPassword';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Categories from '../pages/Categories';
import Checkout from '../pages/Checkout';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={ <Home /> }></Route>
          <Route exact path='/login' element={ <Login /> }></Route>
          <Route exact path='/recover' element={ <RecoverPassword /> }></Route>
          <Route exact path='/products' element={ <Products /> }></Route>
          <Route exact path='/categories' element={ <Categories /> }></Route>
          <Route exact path='/checkout' element={ <Checkout /> }></Route>
          <Route exact path='/orders' element={ <Orders /> }></Route>
          <Route path='*' element={ <NotFound /> }></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;