
import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../modules';
import { IPizza, getPizza } from '../../modules/pizzas';
import { addToCart } from '../../modules/cart';
import './index.css';

export default function PizzaCard({ pizzaId }: { pizzaId: string }) {
  const pizza = useSelector<IStore, any>(store => getPizza(store, pizzaId));

  return (
    <Link className="card" to={`/menu/${pizza.id}`}>
      <div className="pizza-image">
        <figure className="image is-4by3">
          <img src={pizza.thumb} alt=""/>
        </figure>
      </div>
      <div className="pizza-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{pizza.name}</p>
            <p className="subtitle is-6">{pizza.description}</p>
          </div>
        </div>
        <div className="content">
          <strong className="title is-3">
            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(pizza.price)}
          </strong>
          
          <button className="button">
            Add to cart
          </button>
        </div>
      </div>
    </Link> 
  )
}