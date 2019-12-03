import React from 'react';
import { useDispatch } from 'react-redux';
import { IPizza } from '../../modules/pizzas';
import { removeFromCart } from '../../modules/cart';

export default function AddToCart({ pizza, buttonText, type }: { pizza: IPizza, buttonText: string, type: string}) {
  const dispatch = useDispatch();
  
  const callRemoveFromCart = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromCart(pizza));
  }

  return (
    <button className={`button ${type}`} onClick={callRemoveFromCart}>
      { buttonText }
    </button>
  )
}
