import React from 'react';
import { usePizzaShowFetch } from '../../modules/pizzas';
import { useParams } from 'react-router-dom';
import AddToCart from '../../components/PizzaAddToCart';
import CurrencyFormatter from '../../components/CurrencyFormatter';

const MenuItem = () => {
  let { pizzaId } = useParams() as any;
  const pizza = usePizzaShowFetch(pizzaId);

  if (pizza === 'loading') {
    return <div>Loading...</div>;
  }

  if (pizza === 'error') {
    return <h1>Pizza Not Found</h1>;
  }

  return (
    <section className="section container pizza">
      <div className="columns">
        <div className="column">
          <div className="pizza__image">
            <img src={pizza.thumb} alt="" className="pizza__thumb" />
          </div>
        </div>
        <div className="column">
          <div className="pizza__info">
            <h1 className="pizza__name title">
              {pizza.name}
            </h1>
            <h2 className="pizza__description subtitle">
              {pizza.description}
            </h2>
            <div className="pizza__price subtitle is-2">
              <CurrencyFormatter price={pizza.price} />
            </div>
            <AddToCart
              pizza={pizza}
              buttonText={'Add to cart'}
              type={'is-primary'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuItem;