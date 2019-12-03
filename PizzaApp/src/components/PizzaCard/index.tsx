
import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IStore } from '../../modules';
import { getPizza } from '../../modules/pizzas';
import AddToCart from '../../components/PizzaAddToCart';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import styles from './styles.module.css';

export default function PizzaCard({ pizzaId }: { pizzaId: string }) {
  const pizza = useSelector<IStore, any>(store => getPizza(store, pizzaId));

  return (
    <Link className={`${styles.card} card`} to={`menu/${pizza.id}`}>
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
        <div className={styles.content}>
          <strong className={`${styles.title} title is-3`}>
            <CurrencyFormatter price={pizza.price} />
          </strong>
          
          <AddToCart 
            pizza={pizza} 
            buttonText={'Add to cart'} 
            type={''}
          />
        </div>
      </div>
    </Link> 
  )
}