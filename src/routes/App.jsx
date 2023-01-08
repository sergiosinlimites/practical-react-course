import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoverPassword from '../containers/RecoverPassword';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={ <Home /> }></Route>
          <Route exact path='/login' element={ <Login /> }></Route>
          <Route exact path='/recover' element={ <RecoverPassword /> }></Route>
          <Route path='*' element={ <NotFound /> }></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;