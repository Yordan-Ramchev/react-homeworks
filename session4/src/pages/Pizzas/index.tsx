import { IPizza } from '../../modules/pizzas';
import React from 'react';
import api from '../../utils/api';
import { fetchPizzas, upvote, downvote } from '../../modules/pizzas';
import { addToCart } from '../../modules/cart';
import { useDispatch, useSelector } from 'react-redux';

export default function Page() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    api.listPizzas().then((pizzas: any) => {
      dispatch(fetchPizzas(pizzas));
    });
  }, []);

  return (
    <div>
      <PizzaList />
    </div>
  );
}

function PizzaList() {
  const pizzas: IPizza[] = useSelector((state: any) => state.pizzas);

  if (pizzas.length === 0) {
    return null;
  }

  return (
    <section className="pizza-list">
      <div className="container">
        <div className="columns">
          {pizzas.length !== 0 ? (
            <>
              {pizzas.map(pizza => (
                <div className="card" key={pizza.id}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={pizza.thumb} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{pizza.name} </p>
                        <p className="subtitle is-6">{pizza.description}</p>
                      </div>
                    </div>
                    <div className="content">
                      <VoteButton pizza={pizza} />
                      <AddToCart pizza={pizza} />
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="column">No Pizzas!</div>
          )}
        </div>
      </div>
    </section>
  );
}

function VoteButton({ pizza }: { pizza: IPizza }) {
  const dispatch = useDispatch();

  if (pizza.viewerLiked) {
    return (
      <button
        className="button is-danger"
        onClick={() => dispatch(downvote(pizza))}>
        {pizza.likes}
      </button>
    );
  }

  return (
    <button className="button " onClick={() => dispatch(upvote(pizza))}>
      {pizza.likes}
    </button>
  );
}

function AddToCart({ pizza }: { pizza: IPizza }) {
  const dispatch = useDispatch();
  return (
    <button className="button" onClick={() => dispatch(addToCart(pizza))}>
      add to cart
    </button>
  );
}
