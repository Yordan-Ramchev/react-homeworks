
import React from "react";
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { getCartSize } from './../../modules/cart'; 
import paths from '../../routes';

export default function Header() {
  const cartSize = useSelector(getCartSize);

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to={paths.home()}>
              Home
            </NavLink>
            <NavLink className="navbar-item" to={paths.menu()}>
              Menu
            </NavLink>
            <NavLink className="navbar-item" to={paths.ourStory()}>
              Our Story
            </NavLink>
            <NavLink className="navbar-item" to={paths.contactUs()}>
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-light" to={paths.checkoutShoppingCart()}>
                Shopping Cart ({cartSize})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
