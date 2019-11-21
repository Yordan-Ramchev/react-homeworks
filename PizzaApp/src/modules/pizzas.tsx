import React from 'react';
import api from '../utils/api';
import { IStore } from './index';
import { getEntity, setEntity, setEntities, getEntityList } from './entities';
import {
  pageLoading,
  pageLoaded,
  getPagePayload,
  isPageLoaded,
  pageError,
  getPage,
} from './page';
import { useDispatch, useSelector } from 'react-redux';

// --------------------------------------------------------
// Types
// --------------------------------------------------------

export interface IPizza {
  id: string;
  name: string;
  description: string;
  thumb: string;
  price: number;
}

// --------------------------------------------------------
// Constants
// --------------------------------------------------------

const TYPE = 'pizza';
const INDEX = 'pizza/index';
const SHOW = 'pizza/show';

// --------------------------------------------------------
// Actions
// --------------------------------------------------------

export function fetchPizzas() {
  return async (dispatch: any) => {
    dispatch(pageLoading(INDEX));

    const pizzas = (await api.listPizzas()) as IPizza[];

    dispatch(setEntities(TYPE, pizzas));
    dispatch(pageLoaded(INDEX, pizzas.map(p => p.id)));
  };
}

export function fetchPizza(id: string) {
  return async (dispatch: any) => {
    dispatch(pageLoading(SHOW));

    const pizza = (await api.getPizza(id)) as IPizza | null;

    if (pizza) {
      dispatch(setEntity(TYPE, pizza));
      dispatch(pageLoaded(SHOW, pizza.id));
    } else {
      dispatch(pageError(SHOW, 404));
    }
  };
}

// --------------------------------------------------------
// Selectors
// --------------------------------------------------------

export function isListLoaded(store: IStore) {
  return isPageLoaded(store, INDEX);
}

export function getPizzasIds(store: IStore): string[] {
  return getPagePayload(store, INDEX) || [];
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

  return useSelector<IStore, any>(store => isPageLoaded(store, INDEX));
}

export function usePizzaShowFetch(id: string): 'loading' | 'error' | IPizza {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
    dispatch(fetchPizza(id));
  }, [dispatch, id]);

  return useSelector<IStore, any>(store => {
    const page = getPage(store, SHOW);

    if (!page) {
      return 'error';
    }

    if (page.isLoading) {
      return 'loading';
    }

    if (page.error || !page.payload) {
      return 'error';
    }

    const pizza = getPizza(store, page.payload as any);

    if (!pizza) {
      return 'error';
    }

    return pizza;
  });
}