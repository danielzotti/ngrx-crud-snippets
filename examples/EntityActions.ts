// CREATE
export class EntityCreate implements Action {
  readonly type = EntityActionTypes.Create;
  payload: { entityParam: IEntityCreate };
  constructor(public entityParam: IEntityCreate) {
    this.payload = { entityParam };
  }
}
export class EntityCreateSuccess implements Action {
  readonly type = EntityActionTypes.CreateSuccess;
  payload: { entityParam: IEntityDb };
  constructor(public entityParam: IEntityDb) {
    this.payload = { entityParam };
  }
}
export class EntityCreateError implements Action {
  readonly type = EntityActionTypes.CreateError;
  payload: { entityParam: IEntityStoreEntity };
  constructor(public entityParam: IEntityStoreEntity) {
    this.payload = { entityParam };
  }
}

// UPDATE
export class EntityUpdate implements Action {
  readonly type = EntityActionTypes.Update;
  payload: { entityParam: IEntityEdit };
  constructor(public entityParam: IEntityEdit) {
    this.payload = { entityParam };
  }
}
export class EntityUpdateSuccess implements Action {
  readonly type = EntityActionTypes.UpdateSuccess;
  payload: { entityParam: IEntityDb };
  constructor(public entityParam: IEntityDb) {
    this.payload = { entityParam };
  }
}
export class EntityUpdateError implements Action {
  readonly type = EntityActionTypes.UpdateError;
  payload: { entityParam: IEntityStoreEntity };
  constructor(public entityParam: IEntityStoreEntity) {
    this.payload = { entityParam };
  }
}

// DELETE
export class EntityDelete implements Action {
  readonly type = EntityActionTypes.Delete;
  payload: { entityParam: IEntityStoreEntity };
  constructor(public entityParam: IEntityStoreEntity) {
    this.payload = { entityParam };
  }
}
export class EntityDeleteSuccess implements Action {
  readonly type = EntityActionTypes.DeleteSuccess;
  payload: { entityParam: IEntityStoreEntity };
  constructor(public entityParam: IEntityStoreEntity) {
    this.payload = { entityParam };
  }
}
export class EntityDeleteSuccessLogical implements Action {
  readonly type = EntityActionTypes.DeleteSuccessLogical;
  payload: { entityParam: IEntityStoreEntity };
  constructor(public entityParam: IEntityStoreEntity) {
    this.payload = { entityParam };
  }
}
export class EntityDeleteSuccessPermanent implements Action {
  readonly type = EntityActionTypes.DeleteSuccessPermanent;
  payload: { entityParam: IEntityStoreEntity };
  constructor(public entityParam: IEntityStoreEntity) {
    this.payload = { entityParam };
  }
}
export class EntityDeleteError implements Action {
  readonly type = EntityActionTypes.DeleteError;
  payload: { entityParam: IEntityStoreEntity };
  constructor(public entityParam: IEntityStoreEntity) {
    this.payload = { entityParam };
  }
}

// UNDELETE
export class EntityUndelete implements Action {
  readonly type = EntityActionTypes.Undelete;
  payload: { entityParam: IEntityEdit };
  constructor(public entityParam: IEntityEdit) {
    this.payload = { entityParam };
  }
}
export class EntityUndeleteSuccess implements Action {
  readonly type = EntityActionTypes.UndeleteSuccess;
  payload: { entityParam: IEntityStoreEntity };
  constructor(public entityParam: IEntityStoreEntity) {
    this.payload = { entityParam };
  }
}
export class EntityUndeleteError implements Action {
  readonly type = EntityActionTypes.UndeleteError;
  constructor() {}
}

// LOAD
export class EntityLoad implements Action {
  readonly type = EntityActionTypes.Load;
  payload: { entityParamId: number };
  constructor(public entityParamId: number) {
    this.payload = { entityParamId };
  }
}
export class EntityLoadSuccess implements Action {
  readonly type = EntityActionTypes.LoadSuccess;
  payload: { entityParam: IEntityDb };
  constructor(public entityParam: IEntityDb) {
    this.payload = { entityParam };
  }
}
export class EntityLoadError implements Action {
  readonly type = EntityActionTypes.LoadError;
  payload: { entityParam: IEntityDb };
  constructor() {
    this.payload = { entityParam: undefined };
  }
}
export class EntityLoadCancel implements Action {
  readonly type = EntityActionTypes.LoadCancel;
  payload: { entityParam: IEntityDb };
  constructor() {
    this.payload = { entityParam: undefined };
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
// EDIT MODEL
export class EntitySetEditModel implements Action {
  readonly type = EntityActionTypes.SetEditModel;
  payload: { editModel: IEntityEdit };
  constructor(public editModel: IEntityEdit) {
    this.payload = { editModel };
  }
}
export class EntityUnsetEditModel implements Action {
  readonly type = EntityActionTypes.UnsetEditModel;
  payload: { editModel: IEntityEdit };
  constructor() {
    this.payload = { editModel: undefined };
  }
}

// CREATE MODEL
export class EntitySetCreateModel implements Action {
  readonly type = EntityActionTypes.SetCreateModel;
  payload: { createModel: IEntityCreate };
  constructor(public createModel: IEntityCreate) {
    this.payload = { createModel };
  }
}
export class EntityUnsetCreateModel implements Action {
  readonly type = EntityActionTypes.UnsetCreateModel;
  payload: { createModel: IEntityCreate };
  constructor() {
    this.payload = { createModel: undefined };
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
  | EntityDeleteSuccess
  | EntityDeleteSuccessLogical
  | EntityDeleteSuccessPermanent
  | EntityDeleteError
  | EntityUndelete
  | EntityUndeleteSuccess
  | EntityUndeleteError
  | EntityLoad
  | EntityLoadSuccess
  | EntityLoadError
  | EntityLoadCancel
  | EntityListLoad
  | EntityListLoadSuccess
  | EntityListLoadError
  | EntityListLoadCancel
  | EntitySetEditModel
  | EntityUnsetEditModel
  | EntitySetCreateModel
  | EntityUnsetCreateModel;
