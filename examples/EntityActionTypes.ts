import { Action } from "@ngrx/store";

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
  DeleteSuccessLogical = "[Entity] Delete Success Logical",
  DeleteSuccessPermanent = "[Entity] Delete Success Permanent",
  DeleteError = "[Entity] Delete Error",

  Undelete = "[Entity] Undelete",
  UndeleteSuccess = "[Entity] Undelete Success",
  UndeleteError = "[Entity] Undelete Error",

  SetEditModel = "[Entity] Set Edit Model",
  UnsetEditModel = "[Entity] Unset Edit Model",

  SetCreateModel = "[Entity] Set Create Model",
  UnsetCreateModel = "[Entity] Unset Create Model",

  // List
  ListLoad = "[Entity List] Load",
  ListLoadSuccess = "[Entity List] Load Success",
  ListLoadError = "[Entity List] Load Error",
  ListLoadCancel = "[Entity List] Load Cancel"
}