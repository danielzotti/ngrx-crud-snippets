import { createSelector } from '@ngrx/store';
import * as fromObjectUtils from '../utils/object.utils';

export const select${1:Entity}State = (state: AppState): I${1:Entity}State =>
  state.${2:entityState};

// Entities
export const ${3:entity}Entities = createSelector(
    select${1:Entity}State,
    state => state.entities
);

// List
export const ${3:entity}List = createSelector(
    ${3:entity}Entities,
    entities => fromObjectUtils.toArray(entities)
);

// Fetch
export const ${3:entity}IsFetching = createSelector(
    select${1:Entity}State,
    ${2:entityState} => ${2:entityState}.isFetching
);

// Create
export const ${3:entity}CreateModel = createSelector(
    select${1:Entity}State,
    ${2:entityState} => ${2:entityState}.createModel
);
export const ${3:entity}CreateModelIsLoading = createSelector(
    ${3:entity}CreateModel,
    create => create.isLoading
);
  
// Edit
export const ${3:entity}EditModel = createSelector(
    select${1:Entity}State,
    ${2:entityState} => ${2:entityState}.editModel
);
export const ${3:entity}EditModelIsLoading = createSelector(
    ${3:entity}EditModel,
    edit => (edit && edit.isLoading ? true : false)
);
  
// GetById
export const ${3:entity}ById = (${3:entity}Id: number) =>
  createSelector(
    ${3:entity}Entities,
    entities => entities[${3:entity}Id]
);

