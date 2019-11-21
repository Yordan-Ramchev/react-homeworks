import { createReducer } from 'redux-create-reducer';

// --------------------------------------------------------
// Types
// --------------------------------------------------------

export interface IPageReducer {
  name: string;
  isLoading: boolean;
  error: null;
  payload: null;
}

// --------------------------------------------------------
// Constants
// --------------------------------------------------------

const PAGE_LOADING = 'page/loading';
const PAGE_LOADED = 'page/loaded';
const PAGE_UPDATE = 'page/update';
const PAGE_ERROR = 'page/error';

// --------------------------------------------------------
// Reducer
// --------------------------------------------------------

export default createReducer<IPageReducer, any>(
  {
    name: '_none',
    isLoading: true,
    error: null,
    payload: null,
  },
  {
    [PAGE_LOADING]: (state, action) => ({
      name: action.name,
      isLoading: true,
      error: null,
      payload: null,
    }),
    [PAGE_LOADED]: (state, action) => ({
      name: action.name,
      isLoading: false,
      error: null,
      payload: action.payload,
    }),
    [PAGE_ERROR]: (state, action) => ({
      name: action.name,
      isLoading: false,
      error: action.payload,
      payload: null,
    }),
    [PAGE_UPDATE]: (state, action) =>
      state.name === action.name
        ? {
            name: action.name,
            isLoading: false,
            error: null,
            payload: { ...(state.payload || {}), ...action.payload },
          }
        : {
            name: action.name,
            isLoading: false,
            error: null,
            payload: action.payload,
          },
  },
);

// --------------------------------------------------------
// Actions
// --------------------------------------------------------

export function pageLoading(name: string) {
  return {
    type: PAGE_LOADING,
    name,
  };
}

export function pageLoaded(name: string, payload: any) {
  return {
    type: PAGE_LOADED,
    name,
    payload,
  };
}

export function pageError(name: string, error: any) {
  return {
    type: PAGE_ERROR,
    name,
    error,
  };
}

export function pageUpdate(name: string, payload: any) {
  return {
    type: PAGE_UPDATE,
    name,
    payload,
  };
}

// --------------------------------------------------------
// Selectors
// --------------------------------------------------------

export function getPage(store: { page: IPageReducer }, name: string) {
  if (store.page.name === name) {
    return store.page;
  }
  return null;
}

export function getPagePayload(store: { page: IPageReducer }, name: string) {
  if (store.page.name === name) {
    return store.page.payload;
  }
  return null;
}

export function getPageError(store: { page: IPageReducer }, name: string) {
  if (store.page.name === name) {
    return store.page.error;
  }
  return null;
}

export function isPageLoading(store: { page: IPageReducer }, name: string) {
  if (store.page.name === name) {
    return store.page.isLoading;
  }
  return true;
}

export function isPageLoaded(store: { page: IPageReducer }, name: string) {
  if (store.page.name === name) {
    return !store.page.isLoading;
  }
  return false;
}