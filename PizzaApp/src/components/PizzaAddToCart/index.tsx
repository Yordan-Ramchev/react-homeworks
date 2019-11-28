import React from 'react';
import { useDispatch } from 'react-redux';
import { IPizza } from '../../modules/pizzas';
import { addToCart } from '../../modules/cart';

export default function AddToCart({ pizza, buttonText, type }: { pizza: IPizza, buttonText: string, type: string}) {
  const dispatch = useDispatch();
  
  const callAddToCart = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(pizza));
  }

  return (
    <button className={`button ${type}`} onClick={callAddToCart}>
      { buttonText }
    </button>
  )
}