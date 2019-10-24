import React,{ useState, useEffect } from "react";
import pizzaData from "./pizzaData";
import "./index.css";
import Currency from 'react-currency-formatter';

type IItem = {
  id: number;
  name: string;
  description: string;
  thumb: string;
  price: number;
  qtn: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<IItem[]>(pizzaData);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const increaseQty = (id: number) => {
    const items = cartItems;
    const found = items.findIndex((item) => {
      return item.id === id;
    });

    items[found].qtn = items[found].qtn + 1;
    
    setCartItems([...items]);
  }
  
  const decreaseQty = (id: number) => {
    const items = cartItems;
    const found = items.findIndex((item) => {
      return item.id === id;
    });

    if(items[found].qtn > 1) {
      items[found].qtn = items[found].qtn - 1;
    } else {
      items.splice(found, 1);
    }
    
    setCartItems([...items]);
  }

  useEffect(() => {
    const calcCartTotal = () => {
      let cartTotal = 0;
      cartItems.map(cartItem => {
        return cartTotal += cartItem.qtn * cartItem.price
      })
  
      setCartTotal(cartTotal);
    }

    calcCartTotal();
  }, [cartItems]);

  return (
    <section className="cart">
      <div className="container">
        {cartItems.length > 0 ? (
           <table className="table is-striped is-hoverable is-fullwidth">
           <thead>
             <tr>
               <th></th>
               <th>Pizza Name</th>
               <th>Quantity</th>
               <th className="has-text-right">
                 Price
               </th>
             </tr>
           </thead>
           <tbody>
             {cartItems.map(cartItem => (
               <tr key={cartItem.id}>
                 <td>
                   <img src={cartItem.thumb} alt="" width="150"/>
                 </td>
                 <td>
                 <h5 className="title is-5">{cartItem.name}</h5>
                   <h6 className="subtitle is-6">{cartItem.description}</h6>
                 </td>
                 <td>
                   <div className="cart__qtn">
                     <button className="button is-small" onClick={() => increaseQty(cartItem.id)}>+</button>
                     <span className="cart__qtn-value">
                       {cartItem.qtn}
                     </span>
                     <button className="button is-small" onClick={() => decreaseQty(cartItem.id)}>-</button>
                   </div>
                 </td>
                 <td className="has-text-right">
                    <Currency
                      quantity={cartItem.price}
                      currency="USD"
                    />
                 </td>
               </tr>
             ))}
           </tbody>
           <tfoot>
             <tr>
               <td colSpan={3} className="has-text-right">
                 Sub-Total:
               </td>
               <td className="has-text-right">
                  <Currency
                    quantity={cartTotal}
                    currency="USD"
                  />
                </td>
              </tr>
           </tfoot>
         </table>
        ) : (
          <div>
            You have no products in the Cart!!!
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart