import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart, getCartPrice } from '../../modules/cart';
import PizzaAddToCart from '../PizzaAddToCart';
import PizzaRemoveFromCart from '../PizzaRemoveFromCart';
import CurrencyFormatter from '../CurrencyFormatter';

export default function Cart() {
  const items = useSelector(getCart);
  const totalPrice = useSelector(getCartPrice);

  return (
    <>
      {items.length > 0 ? (
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th></th>
              <th>Pizza Name</th>
              <th>Quantity</th>
              <th className="has-text-right">Price</th>
            </tr>
          </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.pizza.id}>
              <td>
                <img src={item.pizza.thumb} alt="" width="150" />
              </td>
              <td>{item.pizza.name} <br/> {item.pizza.description} </td>
              <td>
                <PizzaAddToCart pizza={item.pizza} buttonText={'+'} type={'is-small'} />
                {item.count}
                <PizzaRemoveFromCart pizza={item.pizza} buttonText={'-'} type={'is-small'} />
              </td>
              <td className="has-text-right">
                <CurrencyFormatter price={item.pizza.price * item.count} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="has-text-right" colSpan={3}>
              Sub-Total:
            </td>
            <td className="has-text-right">
              <CurrencyFormatter price={totalPrice} />
            </td>
          </tr>
        </tfoot>
      </table>

    ) : (
      <section className="empty-cart">
        <h4>
          Your cart is empty. Check out our pizzas
        </h4>
        <Link className="button is-light" to="/menu">
          Menu 
        </Link>
      </section>
    )}
    </>
  );
}
