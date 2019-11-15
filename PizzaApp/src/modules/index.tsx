  
import { combineReducers } from 'redux';

import entities, { IEntitiesReducer } from './entities';
import cart, { ICartReducer } from './cart';
import page, { IPageReducer } from './page';

interface IPizza {
  id: string;
  name: string;
  description: string;
  thumb: string;
  price: number;
}

export default combineReducers({
  entities,
  page,
  cart,
});

export type IStore = {
  entities: IEntitiesReducer;
  page: IPageReducer;
  cart: ICartReducer;
};