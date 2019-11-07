import { combineReducers } from 'redux';

import cart from './cart';
import pizzas, { IPizza } from './pizzas';

export default combineReducers({
  cart,
  pizzas,
});

export type IStore = {
  pizzas: IPizza[];
};
