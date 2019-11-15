import { createReducer } from 'redux-create-reducer';

// --------------------------------------------------------
// Types
// --------------------------------------------------------

interface IEntity {
  id: string;
  [key: string]: any;
}

export interface IEntitiesReducer {
  [entityType: string]: {
    [entityId: string]: IEntity;
  };
}

interface IAction {
  type: 'entity/set';
  entityType: string;
  entities: IEntity[];
}

// --------------------------------------------------------
// Constants
// --------------------------------------------------------

const ENTITY_SET = 'entity/set';

// --------------------------------------------------------
// Reducer
// --------------------------------------------------------

export default createReducer<IEntitiesReducer, IAction>(
  {},
  {
    [ENTITY_SET]: (store, action) =>
      action.entities.reduce(
        (state, entity) => ({
          ...state,
          [action.entityType]: {
            ...(state[action.entityType] || {}),
            [entity.id]: {
              ...((state[action.entityType] &&
                state[action.entityType][entity.id]) ||
                {}),
              ...entity,
            },
          },
        }),
        store,
      ),
  },
);

// --------------------------------------------------------
// Actions
// --------------------------------------------------------
export function setEntity(entityType: string, entity: IEntity) {
  return setEntities(entityType, [entity]);
}

export function setEntities(entityType: string, entities: IEntity[]) {
  return {
    type: ENTITY_SET,
    entityType,
    entities,
  };
}

// --------------------------------------------------------
// Selectors
// --------------------------------------------------------
export function getEntity(
  store: { entities: IEntitiesReducer },
  type: string,
  id: string,
) {
  const byType = (store.entities as any)[type] || {};
  return byType[id] || null;
}

export function getEntityList(
  store: { entities: IEntitiesReducer },
  type: string,
  ids: string[],
) {
  return ids.reduce(
    (acc, id) => {
      const entity = getEntity(store, type, id);
      if (entity) {
        acc.push(entity);
      }
      return acc;
    },
    [] as any,
  );
}