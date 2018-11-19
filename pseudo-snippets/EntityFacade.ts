import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Store } from "@ngrx/store";

import { AppState } from "../store/state";
import { I${1:Entity}Edit } from "src/app/components/${3:entity}/edit/${3:entity}-edit.models";
import {
  ${2:entity}CreateModel,
  ${2:entity}CreateModelIsLoading,
  ${2:entity}List,
  ${2:entity}IsFetching,
  ${2:entity}ById,
  ${2:entity}EditModel,
  ${2:entity}EditModelIsLoading
} from "../store/${3:entity}/${3:entity}.selectors";
import {
  ${1:Entity}Create,
  ${1:Entity}Update,
  ${1:Entity}LoadCancel,
  ${1:Entity}Load,
  ${1:Entity}Delete,
  ${1:Entity}ListLoad,
  ${1:Entity}ListLoadCancel
} from "../store/${3:entity}/${3:entity}.action";
import { I${1:Entity}Create } from "../components/${3:entity}/create/${3:entity}-create.models";
import { I${1:Entity}Detail } from "../components/${3:entity}/detail/${3:entity}-detail.models";

@Injectable()
export class ${1:Entity}Facade {
  // Fetch
  isFetching$: Observable<boolean> = this.store.select(
    ${2:entity}IsFetching
  );

  // Create
  createModel$: Observable<
    Partial<I${1:Entity}Create>
  > = this.store.select(${2:entity}CreateModel);
  createModelIsLoading$: Observable<boolean> = this.store.select(
    ${2:entity}CreateModelIsLoading
  );

  // Update
  editModel$: Observable<Partial<I${1:Entity}Edit>> = this.store.select(
    ${2:entity}EditModel
  );
  editModelIsLoading$: Observable<boolean> = this.store.select(
    ${2:entity}EditModelIsLoading
  );

  // List
  list$: Observable<Array<I${1:Entity}Detail>> = this.store.select(
    ${2:entity}List
  );

  constructor(private store: Store<AppState>) {}

  // List
  loadAll() {
    this.store.dispatch(new ${1:Entity}ListLoad());
  }
  cancelLoadAll() {
    this.store.dispatch(new ${1:Entity}ListLoadCancel());
  }

  // Create
  create(contract: I${1:Entity}Create) {
    this.store.dispatch(new ${1:Entity}Create(contract));
  }
  // Update
  update(contract: I${1:Entity}Edit) {
    this.store.dispatch(new ${1:Entity}Update(contract));
  }
  // Delete
  delete(contract: I${1:Entity}Edit) {
    this.store.dispatch(new ${1:Entity}Delete(contract));
  }

  // Get By Id
  loadById(contractId: number) {
    this.store.dispatch(new ${1:Entity}Load(contractId));
  }
  cancelLoadById() {
    this.store.dispatch(new ${1:Entity}LoadCancel());
  }
  getById(contractId: number) {
    return this.store.select(${2:entity}ById(contractId));
  }
}
