interface ICartItem {
  pizzaId: string;
  count: number;
}

type ICart = ICartItem[];

export default function cartReducer(state: ICart = [], action: any) {
  if (action.type === 'cart/add') {
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
  }

  if (action.type === 'cart/remove') {
    let itemIndex = state.findIndex(item => item.pizzaId === action.payload);
    state.splice(itemIndex, 1);
  }

  return state;
}

export function addToCart(pizza: any) {
  return {
    type: 'cart/add',
    payload: pizza.id,
  };
}

export function removeFromCart(pizza: any) {
  return {
    type: 'cart/remove',
    payload: pizza.id,
  };
}
