import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import cartImage from "@icons/icon_shopping_cart.svg";
import '@styles/Header.scss';

const Header = () => {

  const [toggle, setToggle] = useState(false);

  const { state: {cart} } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const verifyCartNumber = (length) => {
    return length <= 9 ? length : '+9';
  }

  return (
    <nav className="Header">
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
            </li>
          <li className="navbar-shopping-cart">
            <img src={cartImage} alt="shopping cart" />
            { cart.length > 0 && <div>{verifyCartNumber(cart.length)}</div> }
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
