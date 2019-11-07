export interface IPizza {
  id: string;
  name: string;
  description: string;
  thumb: string;
  price: number;
  likes: number;
  qtn: number;
  viewerLiked: boolean;
}

const ACTION_FETCH = 'pizzas/FETCH';

export default function pizzasReducer(state = [], action: any) {
  if (action && action.type === ACTION_FETCH) {
    return action.payload;
  }

  if (action && action.type === 'pizzas/upvote') {
    return state.map((pizza: IPizza) =>
      pizza.id === action.payload.id
        ? {
            ...pizza,
            likes: pizza.likes + 1,
            viewerLiked: true,
          }
        : pizza,
    );
  }

  if (action && action.type === 'pizzas/downvote') {
    return state.map((pizza: IPizza) =>
      pizza.id === action.payload.id
        ? {
            ...pizza,
            likes: pizza.likes - 1,
            viewerLiked: false,
          }
        : pizza,
    );
  }

  return state;
}

export function fetchPizzas(pizzas: IPizza[]) {
  return {
    type: ACTION_FETCH,
    payload: pizzas,
  };
}

export function upvote(pizza: IPizza) {
  return {
    type: 'pizzas/upvote',
    payload: pizza,
  };
}

export function downvote(pizza: IPizza) {
  return {
    type: 'pizzas/downvote',
    payload: pizza,
  };
}
