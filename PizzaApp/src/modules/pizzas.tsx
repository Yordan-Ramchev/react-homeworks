import React from 'react';
import api from '../utils/api';
import { IStore } from './index';
import { getEntity, setEntities, getEntityList } from './entities';
import { pageLoading, pageLoaded, getPage, isPageLoaded } from './page';
import { useDispatch, useSelector } from 'react-redux';

// --------------------------------------------------------
// Types
// --------------------------------------------------------

export interface IPizza {
  id: string;
  name: string;
  description: string,
  thumb: string,
  price: number;
}

// --------------------------------------------------------
// Constants
// --------------------------------------------------------

const TYPE = 'pizza';
const PAGE = 'pizza/index';

// --------------------------------------------------------
// Actions
// --------------------------------------------------------

export function fetchPizzas() {
  return async (dispatch: any) => {
    dispatch(pageLoading(PAGE));

    const pizzas = (await api.listPizzas()) as IPizza[];

    dispatch(setEntities(TYPE, pizzas));
    dispatch(pageLoaded(PAGE, pizzas.map(p => p.id)));
  };
}

// --------------------------------------------------------
// Selectors
// --------------------------------------------------------

export function isListLoaded(store: IStore) {
  return isPageLoaded(store, PAGE);
}

export function getPizzasIds(store: IStore): string[] {
  return getPage(store, PAGE) || [];
}

export function getPizzas(store: IStore): IPizza[] {
  return getEntityList(store, TYPE, getPizzasIds(store));
}

export function getPizza(store: IStore, id: string) {
  return getEntity(store, TYPE, id) as IPizza;
}

// --------------------------------------------------------
// Hooks
// --------------------------------------------------------

export function usePizzaIndexFetch() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return useSelector<IStore, any>(store => isPageLoaded(store, PAGE));
}