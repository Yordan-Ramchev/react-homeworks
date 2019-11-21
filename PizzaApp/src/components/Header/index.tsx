
import React from "react";
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import {getCartSize} from './../../modules/cart'; 

export default function Header() {
  const cartSize = useSelector(getCartSize);

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/">
            <img src={"https://www.x-portpizzeria.ch/wp-content/uploads/2016/10/x-port-logo-lockup-400.png"} alt={"Pizza webpage for training"}/>
          </NavLink>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-item" to="/menu">
              Menu
            </NavLink>
            <NavLink className="navbar-item" to="/our-story">
              Our Story
            </NavLink>
            <NavLink className="navbar-item" to="/contact-us">
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-light" to="/shopping-cart">
                Shopping Cart ({cartSize})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
