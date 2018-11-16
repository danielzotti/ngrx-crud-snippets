export enum PersonnelActionTypes {
  // Personnel
  Load = "[Personnel] Load",
  LoadSuccess = "[Personnel] Load Success",
  LoadError = "[Personnel] Load Error",
  LoadCancel = "[Personnel] Load Cancel",

  Create = "[Personnel] Create",
  CreateSuccess = "[Personnel] Create Success",
  CreateError = "[Personnel] Create Error",

  Update = "[Personnel] Update",
  UpdateSuccess = "[Personnel] Update Success",
  UpdateError = "[Personnel] Update Error",

  Delete = "[Personnel] Delete",
  DeleteSuccess = "[Personnel] Delete Success",
  DeleteError = "[Personnel] Delete Error",

  // List
  ListLoad = "[Personnel List] Load",
  ListLoadSuccess = "[Personnel List] Load Success",
  ListLoadError = "[Personnel List] Load Error",
  ListLoadCancel = "[Personnel List] Load Cancel"
}

// CREATE
export class PersonnelCreate implements Action {
  readonly type = PersonnelActionTypes.Create;
  payload: { person: IPersonnelCreate };
  constructor(public person: IPersonnelCreate) {
    this.payload = { person };
  }
}
export class PersonnelCreateSuccess implements Action {
  readonly type = PersonnelActionTypes.CreateSuccess;
  payload: { person: IPersonnelDb };
  constructor(public person: IPersonnelDb) {
    this.payload = { person };
  }
}
export class PersonnelCreateError implements Action {
  readonly type = PersonnelActionTypes.CreateError;
  payload: { person: IPersonnelCreate };
  constructor(public person: IPersonnelCreate) {
    this.payload = { person };
  }
}

// UPDATE
export class PersonnelUpdate implements Action {
  readonly type = PersonnelActionTypes.Update;
  payload: { person: IPersonnelEdit };
  constructor(public person: IPersonnelEdit) {
    this.payload = { person };
  }
}
export class PersonnelUpdateSuccess implements Action {
  readonly type = PersonnelActionTypes.UpdateSuccess;
  payload: { person: IPersonnelDb };
  constructor(public person: IPersonnelDb) {
    this.payload = { person };
  }
}
export class PersonnelUpdateError implements Action {
  readonly type = PersonnelActionTypes.UpdateError;
  payload: { person: IPersonnelDb };
  constructor(public person: IPersonnelDb) {
    this.payload = { person };
  }
}

// DELETE
export class PersonnelDelete implements Action {
  readonly type = PersonnelActionTypes.Delete;
  payload: { person: IPersonnelEdit };
  constructor(public person: IPersonnelEdit) {
    this.payload = { person };
  }
}
export class PersonnelDeleteSuccess implements Action {
  readonly type = PersonnelActionTypes.DeleteSuccess;
  payload: { person: IPersonnelEdit };
  constructor(public person: IPersonnelEdit) {
    this.payload = { person };
  }
}
export class PersonnelDeleteError implements Action {
  readonly type = PersonnelActionTypes.DeleteError;
  payload: { person: IPersonnelEdit };
  constructor(public person: IPersonnelEdit) {
    this.payload = { person };
  }
}

// LOAD
export class PersonnelLoad implements Action {
  readonly type = PersonnelActionTypes.Load;
  payload: { personId: number };
  constructor(public personId: number) {
    this.payload = { personId };
  }
}
export class PersonnelLoadSuccess implements Action {
  readonly type = PersonnelActionTypes.LoadSuccess;
  payload: { person: IPersonnelDb };
  constructor(public person: IPersonnelDb) {
    this.payload = { person };
  }
}
export class PersonnelLoadError implements Action {
  readonly type = PersonnelActionTypes.LoadError;
  payload: { person: IPersonnelDb };
  constructor() {
    this.payload = { person: undefined };
  }
}
export class PersonnelLoadCancel implements Action {
  readonly type = PersonnelActionTypes.LoadCancel;
  payload: { person: IPersonnelDb };
  constructor() {
    this.payload = { person: undefined };
  }
}

// LIST LOAD
export class PersonnelListLoad implements Action {
  readonly type = PersonnelActionTypes.ListLoad;
  constructor() {}
}
export class PersonnelListLoadSuccess implements Action {
  readonly type = PersonnelActionTypes.ListLoadSuccess;
  payload: { list: Array<IPersonnelSelectListItem> };
  constructor(public list: Array<IPersonnelSelectListItem>) {
    this.payload = { list };
  }
}
export class PersonnelListLoadError implements Action {
  readonly type = PersonnelActionTypes.ListLoadError;
  payload: { list: Array<IPersonnelSelectListItem> };
  constructor() {
    this.payload = { list: [] };
  }
}
export class PersonnelListLoadCancel implements Action {
  readonly type = PersonnelActionTypes.ListLoadCancel;
  payload: { list: Array<IPersonnelSelectListItem> };
  constructor() {
    this.payload = { list: [] };
  }
}

export type PersonnelActions =
  | PersonnelCreate
  | PersonnelCreateSuccess
  | PersonnelCreateError
  | PersonnelUpdate
  | PersonnelUpdateSuccess
  | PersonnelUpdateError
  | PersonnelDelete
  | PersonnelLoad
  | PersonnelLoadSuccess
  | PersonnelLoadError
  | PersonnelLoadCancel
  | PersonnelListLoad
  | PersonnelListLoadSuccess
  | PersonnelListLoadError
  | PersonnelListLoadCancel;
