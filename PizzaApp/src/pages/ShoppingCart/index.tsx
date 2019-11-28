import React from 'react';
import Cart from '../../components/Cart';
import { usePizzaIndexFetch } from './../../modules/pizzas';
import Loading from './../../components/Loading';

const ShoppingCart = () => {
  const isLoaded = usePizzaIndexFetch();

  if (!isLoaded) {
    return (
      <Loading />
    );
  } 

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Shopping Cart</h1>
        <Cart />
      </div>
    </section>
  )
}

export default ShoppingCart;