import React from 'react';
import { Link } from 'react-router-dom';

const OrderReview = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Checkout</h1>
        Order Info here

        <Link className="button is-primary" to="/thank-you">
          Submit Order
        </Link>
      </div>
    </section>
  );
}

export default OrderReview;