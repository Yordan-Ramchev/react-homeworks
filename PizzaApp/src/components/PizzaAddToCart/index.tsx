import React from 'react';
import { useDispatch } from 'react-redux';
import { IPizza } from '../../modules/pizzas';
import { addToCart } from '../../modules/cart';

export default function AddToCart({ pizza, buttonText }: { pizza: IPizza, buttonText: string}) {
  const dispatch = useDispatch();
  
  const callAddToCart = (e:any) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(pizza));
  }
  return (
    <button className="button" onClick={callAddToCart}>
      { buttonText }
    </button>
  )
}