import { createSelector } from "@ngrx/store";
import * as fromObjectUtils from "../utils/object.utils";

export const selectEntityState = (state: AppState): IEntityState =>
  state.entityState;

// Entities
export const entityEntities = createSelector(
  selectEntityState,
  state => state.entities
);

// List in array
export const entityList = createSelector(
  entityEntities,
  entities => fromObjectUtils.toArray(entities)
);

// Fetch
export const entityIsFetching = createSelector(
  selectEntityState,
  state => state.isFetching
);

// Create
export const entityCreateModel = createSelector(
  selectEntityState,
  state => state.createModel
);
export const entityCreateModelIsLoading = createSelector(
  entityCreateModel,
  create => create.isLoading
);

// Edit
export const entityEditModel = createSelector(
  selectEntityState,
  state => state.editModel
);
export const entityEditModelIsLoading = createSelector(
  entityEditModel,
  edit => (edit && edit.isLoading ? true : false)
);

// GetById
export const entityById = (entityId: number) =>
  createSelector(
    entityEntities,
    entities => entities[entityId]
  );
