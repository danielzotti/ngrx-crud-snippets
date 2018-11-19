export enum EntityActionTypes {
  Load = "[Entity] Load",
  LoadSuccess = "[Entity] Load Success",
  LoadError = "[Entity] Load Error",
  LoadCancel = "[Entity] Load Cancel",

  Create = "[Entity] Create",
  CreateSuccess = "[Entity] Create Success",
  CreateError = "[Entity] Create Error",

  Update = "[Entity] Update",
  UpdateSuccess = "[Entity] Update Success",
  UpdateError = "[Entity] Update Error",

  Delete = "[Entity] Delete",
  DeleteSuccess = "[Entity] Delete Success",
  DeleteError = "[Entity] Delete Error",

  // List
  ListLoad = "[Entity List] Load",
  ListLoadSuccess = "[Entity List] Load Success",
  ListLoadError = "[Entity List] Load Error",
  ListLoadCancel = "[Entity List] Load Cancel"
}
// CREATE
export class EntityCreate implements Action {
  readonly type = EntityActionTypes.Create;
  payload: { parameterName: IEntityCreate };
  constructor(public parameterName: IEntityCreate) {
    this.payload = { parameterName };
  }
}
export class EntityCreateSuccess implements Action {
  readonly type = EntityActionTypes.CreateSuccess;
  payload: { parameterName: IEntityDb };
  constructor(public parameterName: IEntityDb) {
    this.payload = { parameterName };
  }
}
export class EntityCreateError implements Action {
  readonly type = EntityActionTypes.CreateError;
  payload: { parameterName: IEntityStoreEntity };
  constructor(public parameterName: IEntityStoreEntity) {
    this.payload = { parameterName };
  }
}

// UPDATE
export class EntityUpdate implements Action {
  readonly type = EntityActionTypes.Update;
  payload: { parameterName: IEntityEdit };
  constructor(public parameterName: IEntityEdit) {
    this.payload = { parameterName };
  }
}
export class EntityUpdateSuccess implements Action {
  readonly type = EntityActionTypes.UpdateSuccess;
  payload: { parameterName: IEntityDb };
  constructor(public parameterName: IEntityDb) {
    this.payload = { parameterName };
  }
}
export class EntityUpdateError implements Action {
  readonly type = EntityActionTypes.UpdateError;
  payload: { parameterName: IEntityStoreEntity };
  constructor(public parameterName: IEntityStoreEntity) {
    this.payload = { parameterName };
  }
}

// DELETE
export class EntityDelete implements Action {
  readonly type = EntityActionTypes.Delete;
  payload: { parameterName: IEntityStoreEntity };
  constructor(public parameterName: IEntityStoreEntity) {
    this.payload = { parameterName };
  }
}
export class EntityDeleteSuccess implements Action {
  readonly type = EntityActionTypes.DeleteSuccess;
  payload: { parameterName: IEntityStoreEntity };
  constructor(public parameterName: IEntityStoreEntity) {
    this.payload = { parameterName };
  }
}
export class EntityDeleteError implements Action {
  readonly type = EntityActionTypes.DeleteError;
  payload: { parameterName: IEntityStoreEntity };
  constructor(public parameterName: IEntityStoreEntity) {
    this.payload = { parameterName };
  }
}

// LOAD
export class EntityLoad implements Action {
  readonly type = EntityActionTypes.Load;
  payload: { parameterNameId: number };
  constructor(public parameterNameId: number) {
    this.payload = { parameterNameId };
  }
}
export class EntityLoadSuccess implements Action {
  readonly type = EntityActionTypes.LoadSuccess;
  payload: { parameterName: IEntityDb };
  constructor(public parameterName: IEntityDb) {
    this.payload = { parameterName };
  }
}
export class EntityLoadError implements Action {
  readonly type = EntityActionTypes.LoadError;
  payload: { parameterName: IEntityDb };
  constructor() {
    this.payload = { parameterName: undefined };
  }
}
export class EntityLoadCancel implements Action {
  readonly type = EntityActionTypes.LoadCancel;
  payload: { parameterName: IEntityDb };
  constructor() {
    this.payload = { parameterName: undefined };
  }
}

// LIST LOAD
export class EntityListLoad implements Action {
  readonly type = EntityActionTypes.ListLoad;
  constructor() {}
}
export class EntityListLoadSuccess implements Action {
  readonly type = EntityActionTypes.ListLoadSuccess;
  payload: { list: Array<IEntitySelectListItem> };
  constructor(public list: Array<IEntitySelectListItem>) {
    this.payload = { list };
  }
}
export class EntityListLoadError implements Action {
  readonly type = EntityActionTypes.ListLoadError;
  payload: { list: Array<IEntitySelectListItem> };
  constructor() {
    this.payload = { list: [] };
  }
}
export class EntityListLoadCancel implements Action {
  readonly type = EntityActionTypes.ListLoadCancel;
  payload: { list: Array<IEntitySelectListItem> };
  constructor() {
    this.payload = { list: [] };
  }
}

export type EntityActions =
  | EntityCreate
  | EntityCreateSuccess
  | EntityCreateError
  | EntityUpdate
  | EntityUpdateSuccess
  | EntityUpdateError
  | EntityDelete
  | EntityLoad
  | EntityLoadSuccess
  | EntityLoadError
  | EntityLoadCancel
  | EntityListLoad
  | EntityListLoadSuccess
  | EntityListLoadError
  | EntityListLoadCancel;
