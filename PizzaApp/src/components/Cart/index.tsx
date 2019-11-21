import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPizza } from '../../modules/pizzas';
import {
  removeFromCart,
  getCart,
  getCartPrice,
} from '../../modules/cart';

export default function Cart() {
  const price = useSelector(getCartPrice);
  const items = useSelector(getCart);

  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th></th>
          <th>Pizza Name</th>
          <th>Quantity</th>
          <th className="has-text-right">Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {items.map(item => (
        <tr key={item.pizza.id}>
          <td>
            <img src={item.pizza.thumb} alt="" width="150" />
          </td>
          <td>{item.pizza.name}</td>
          <td>{item.count}</td>
          <td className="has-text-right">{item.pizza.price * item.count}</td>
          <td><RemoveFromCart pizza={item.pizza} /></td>
        </tr>
      ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="has-text-right" colSpan={3}>
            Sub-Total:
          </td>
          <td className="has-text-right">
            ${price}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

function RemoveFromCart({ pizza }: { pizza: IPizza }) {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(removeFromCart(pizza))}>-</button>;
}