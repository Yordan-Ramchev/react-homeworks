import reducers from '../modules';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

export default function createReduxStore(initialState = {}) {
  const enhancers = [
    applyMiddleware(thunk),
    applyMiddleware(save({ states: ['cart'] })),
  ];

  if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

  const createStoreWithMiddleware: any = compose(...enhancers)(createStore);

  return createStoreWithMiddleware(
    reducers,
    load({
      states: ['cart'],
    }),
  );
}