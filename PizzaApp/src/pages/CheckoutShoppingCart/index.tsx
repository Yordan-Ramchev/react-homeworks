import React from 'react';
import Cart from '../../components/Cart';
import { usePizzaIndexFetch } from '../../modules/pizzas';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import paths from '../../routes';

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
        
        <div className="has-text-right">
          <Link className="button is-primary" to={paths.checkoutPaymentInfo()}>
            Checkout
          </Link>
        </div> 
      </div>
    </section>
  )
}

export default ShoppingCart;