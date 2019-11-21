import { createReducer } from 'redux-create-reducer';
import { IStore } from './index';
import { getPizza } from './pizzas';

// --------------------------------------------------------
// Types
// --------------------------------------------------------

export type ICartReducer = Array<{
  pizzaId: string;
  count: number;
}>;

interface IAction {
  type: string;
  payload: string;
}

// --------------------------------------------------------
// Constants
// --------------------------------------------------------

const CART_ADD = 'cart/add';
const CART_REMOVE = 'cart/remove';

export default createReducer<ICartReducer, IAction>([], {
  [CART_ADD]: (state, action) => {
    if (state.find(item => item.pizzaId === action.payload)) {
      return state.map(item =>
        item.pizzaId === action.payload
          ? {
              ...item,
              count: item.count + 1,
            }
          : item,
      );
    } else {
      return [...state, { pizzaId: action.payload, count: 1 }];
    }
  },
  [CART_REMOVE]: (state, action) => {
    if (state.find(item => item.pizzaId === action.payload)) {
      return state
        .map(item =>
          item.pizzaId === action.payload
            ? {
                ...item,
                count: item.count - 1,
              }
            : item,
        )
        .filter(item => item.count > 0);
    }
    return state;
  },
});

// --------------------------------------------------------
// Actions
// --------------------------------------------------------

export function addToCart(pizza: { id: string }) {
  return {
    type: CART_ADD,
    payload: pizza.id,
  };
}

export function removeFromCart(pizza: { id: string }) {
  return {
    type: CART_REMOVE,
    payload: pizza.id,
  };
}

// --------------------------------------------------------
// Selectors
// --------------------------------------------------------

export function getCart(store: IStore) {
  return store.cart.map(item => ({
    count: item.count,
    pizza: getPizza(store, item.pizzaId),
  }));
}

export function getCartSize(store: IStore) {
  return store.cart.reduce((acc, item) => acc + item.count, 0);
}

export function getCartPrice(store: IStore) {
  return store.cart.reduce(
    (acc, item) => acc + item.count * getPizza(store, item.pizzaId).price,
    0,
  );
}
