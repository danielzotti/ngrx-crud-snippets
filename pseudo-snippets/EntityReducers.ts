import { adapter } from "./entity.adapter";
import { IEntityState } from "./entity.state";
import { EntityActions, EntityActionTypes } from "./entity.actions";
import * as fromObjectUtils from "../utils/object.utils";

const initialEntityState: IEntityState = {
  entities: {},
  ids: [],
  isFetching: false,
  createModel: undefined,
  editModel: undefined
};

export function entityReducer(
  state: IEntityState = initialEntityState,
  action: EntityActions
): IEntityState {
  switch (action.type) {
    // CREATE
    case EntityActionTypes.Create:
      const createModel = { ...action.payload.entityParam };
      return {
        ...state,
        createModel: { ...createModel, isLoading: true }
      };
    // CREATE SUCCESS
    case EntityActionTypes.CreateSuccess:
      const createdModel = { ...action.payload.entityParam };
      return adapter.addOne(createdModel, {
        ...state,
        createModel: { isDone: true }
      });
    // CREATE ERROR
    case EntityActionTypes.CreateError:
      return {
        ...state,
        createModel: { ...state.createModel, isLoading: false, hasError: true }
      };
    // UPDATE
    case EntityActionTypes.Update:
      const editModel = { ...action.payload.entityParam };
      return {
        ...state,
        editModel: { ...editModel, isLoading: true }
      };

    // UPDATE SUCCESS
    case EntityActionTypes.UpdateSuccess:
      const editedModel = { ...action.payload.entityParam };
      return adapter.upsertOne(editedModel, {
        ...state,
        editModel: { ...editedModel, isLoading: false }
      });
    // UPDATE ERROR
    case EntityActionTypes.UpdateError:
      return {
        ...state,
        editModel: { ...state.editModel, isLoading: false }
      };
    // LOAD
    case EntityActionTypes.Load:
      return {
        ...state,
        isFetching: true,
        createModel: undefined,
        editModel: { isLoading: true }
      };
    // LOAD SUCCESS
    case EntityActionTypes.LoadSuccess:
      const loadedModel = { ...action.payload.entityParam };
      return adapter.upsertOne(loadedModel, {
        ...state,
        isFetching: false,
        editModel: { ...loadedModel, isLoading: false }
      });
    // LOAD CANCEL
    case EntityActionTypes.LoadCancel:
      return {
        ...state,
        isFetching: false,
        editModel: undefined,
        createModel: undefined
      };
    // LOAD ERROR
    case EntityActionTypes.LoadError:
      return {
        ...state,
        isFetching: false,
        editModel: { ...editModel, isLoading: false }
      };

    // LIST LOAD
    case EntityActionTypes.ListLoad:
      return {
        ...state,
        isFetching: true
      };
    // LIST LOAD SUCCESS / ERROR
    case EntityActionTypes.ListLoadSuccess:
    case EntityActionTypes.ListLoadError:
      const { list } = action.payload;
      return adapter.upsertMany(list, {
        ...state,
        isFetching: false,
        createModel: undefined,
        editModel: undefined
      });
    // LIST LOAD CANCEL
    case EntityActionTypes.ListLoadCancel:
      return {
        ...state,
        isFetching: false
      };

    default:
      return state;
  }
}
