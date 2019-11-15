import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPizzasIds } from './../../modules/pizzas';
import { usePizzaIndexFetch } from './../../modules/pizzas';
import PizzaCard from '../../components/PizzaCard';
import './index.css';

const Menu = () => {
  const isLoaded = usePizzaIndexFetch();

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const pizzaIds = useSelector(getPizzasIds);
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Check out our pizzas!</h1>
          <h2 className="subtitle">
            We have all kind of <strong>tastes</strong> or maybe six
          </h2>
          
          <div className="pizza-list">
              {pizzaIds.map(pizzaId => (
                <div className="pizza-item" key={pizzaId}>
                  <PizzaCard pizzaId={pizzaId}/>
                </div> 
              ))}   
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;