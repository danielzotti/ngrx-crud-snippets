// other models

import { EntityState } from "@ngrx/entity";

export interface IEntityDb {
  content: any;
}
export interface IFormModel {
  isLoading?: boolean;
  isDone?: boolean;
  hasError?: boolean;
}

export type IEntityCreate = IFormModel & IEntityDb;
export type IEntityEdit = IFormModel & IEntityDb;

export interface ICommonEntityState<EntityStore, EntityCreate, EntityEdit>
  extends EntityState<EntityStore> {
  isFetching: boolean;
  editModel: Partial<EntityEdit>;
  createModel: Partial<EntityCreate>;
}
