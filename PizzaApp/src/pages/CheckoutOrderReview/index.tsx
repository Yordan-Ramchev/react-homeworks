import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../../routes';

const OrderReview = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Checkout</h1>
        Order Info here
        <br/>
        <Link className="button is-primary" to={paths.checkoutThankYou}>
          Submit Order
        </Link>
      </div>
    </section>
  );
}

export default OrderReview;