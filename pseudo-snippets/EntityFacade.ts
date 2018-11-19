import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Store } from "@ngrx/store";

import { AppState } from "../store/state";
import { IEntityEdit } from "src/app/components/entity/edit/entity-edit.models";
import {
  entityCreateModel,
  entityCreateModelIsLoading,
  entityList,
  entityIsFetching,
  entityById,
  entityEditModel,
  entityEditModelIsLoading
} from "../store/entity/entity.selectors";
import {
  EntityCreate,
  EntityUpdate,
  EntityLoadCancel,
  EntityLoad,
  EntityDelete,
  EntityListLoad,
  EntityListLoadCancel
} from "../store/entity/entity.action";
import { IEntityCreate } from "../components/entity/create/entity-create.models";
import { IEntityDetail } from "../components/entity/detail/entity-detail.models";

@Injectable()
export class EntityFacade {
  // Fetch
  isFetching$: Observable<boolean> = this.store.select(entityIsFetching);

  // Create
  createModel$: Observable<Partial<IEntityCreate>> = this.store.select(
    entityCreateModel
  );
  createModelIsLoading$: Observable<boolean> = this.store.select(
    entityCreateModelIsLoading
  );

  // Update
  editModel$: Observable<Partial<IEntityEdit>> = this.store.select(
    entityEditModel
  );
  editModelIsLoading$: Observable<boolean> = this.store.select(
    entityEditModelIsLoading
  );

  // List
  list$: Observable<Array<IEntitySelectListItem>> = this.store.select(
    entityList
  );

  constructor(private store: Store<AppState>) {}

  // List
  loadAll() {
    this.store.dispatch(new EntityListLoad());
  }
  cancelLoadAll() {
    this.store.dispatch(new EntityListLoadCancel());
  }

  // Create
  create(entityParam: IEntityCreate) {
    this.store.dispatch(new EntityCreate(entityParam));
  }
  // Update
  update(entityParam: IEntityEdit) {
    this.store.dispatch(new EntityUpdate(entityParam));
  }
  // Delete
  delete(entityParam: IEntityStoreEntity) {
    this.store.dispatch(new EntityDelete(entityParam));
  }

  // Get By Id
  loadById(entityParamId: number) {
    this.store.dispatch(new EntityLoad(entityParamId));
  }
  cancelLoadById() {
    this.store.dispatch(new EntityLoadCancel());
  }
  getById(entityParamId: number) {
    return this.store.select(entityById(entityParamId));
  }
}
