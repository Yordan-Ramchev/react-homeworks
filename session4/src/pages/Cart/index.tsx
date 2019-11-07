import React from 'react';
import { IPizza } from '../../modules/pizzas';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../modules/cart';

export default function Page() {
  const items = useSelector(getCart);

  return (
    // <React.Fragment>
    //   <h2>Cart ({items.length})</h2>
    //   <ul>
    //     {items.map(item => (
    //       <li key={item.pizza.id}>
    //         {item.pizza.name} - {item.count}
    //         (${item.pizza.price * item.count})
    //         <RemoveFromCart pizza={item.pizza} />
    //       </li>
    //     ))}
    //   </ul>
    // </React.Fragment>
    <section className="cart">
      <div className="container">
        {items.length > 0 ? (
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
              {items.map(cartItem => (
                <tr key={cartItem.pizza.id}>
                  <td>
                    <img src={cartItem.pizza.thumb} alt="" width="150" />
                  </td>
                  <td>
                    <h5 className="title is-5">{cartItem.pizza.name}</h5>
                    <h6 className="subtitle is-6">
                      {cartItem.pizza.description}
                    </h6>
                  </td>
                  <td>
                    <div className="cart__qtn">
                      {/* <button
                        className="button is-small"
                        onClick={() => increaseQty(cartItem.id)}>
                        +
                      </button> */}
                      <span className="cart__qtn-value">
                        {cartItem.pizza.qtn}
                      </span>
                      {/* <button
                        className="button is-small"
                        onClick={() => decreaseQty(cartItem.id)}>
                        -
                      </button> */}
                    </div>
                  </td>
                  <td className="has-text-right">{cartItem.pizza.price}</td>
                  <td>
                    <RemoveFromCart pizza={cartItem.pizza} />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className="has-text-right">
                  Sub-Total:
                </td>
                <td className="has-text-right">total</td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <div>You have no products in the Cart!!!</div>
        )}
      </div>
    </section>
  );
}

function getCart(store: any): any[] {
  return store.cart.map((item: any) => ({
    count: item.count,
    pizza: store.pizzas.find((pizza: any) => pizza.id === item.pizzaId),
  }));
}

function RemoveFromCart({ pizza }: { pizza: IPizza }) {
  const dispatch = useDispatch();
  return (
    <button className="button" onClick={() => dispatch(removeFromCart(pizza))}>
      remove
    </button>
  );
}
