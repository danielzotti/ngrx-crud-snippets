import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Store } from "@ngrx/store";

import { AppState } from "../store/state";
import { IProjectEdit } from "src/app/components/project/edit/project-edit.models";
import {
  projectCreateModel,
  projectCreateModelIsLoading,
  projectList,
  projectIsFetching,
  projectById,
  projectEditModel,
  projectEditModelIsLoading
} from "../store/project/project.selectors";
import {
  ProjectCreate,
  ProjectUpdate,
  ProjectLoadCancel,
  ProjectLoad,
  ProjectDelete,
  ProjectListLoad,
  ProjectListLoadCancel
} from "../store/project/project.action";
import { IProjectCreate } from "../components/project/create/project-create.models";
import { IProjectDetail } from "../components/project/detail/project-detail.models";

@Injectable()
export class ProjectFacade {
  // Fetch
  isFetching$: Observable<boolean> = this.store.select(projectIsFetching);

  // Create
  createModel$: Observable<Partial<IProjectCreate>> = this.store.select(
    projectCreateModel
  );
  createModelIsLoading$: Observable<boolean> = this.store.select(
    projectCreateModelIsLoading
  );

  // Update
  editModel$: Observable<Partial<IProjectEdit>> = this.store.select(
    projectEditModel
  );
  editModelIsLoading$: Observable<boolean> = this.store.select(
    projectEditModelIsLoading
  );

  // List
  list$: Observable<Array<IProjectSelectListItem>> = this.store.select(
    projectList
  );

  constructor(private store: Store<AppState>) {}

  // List
  loadAll() {
    this.store.dispatch(new ProjectListLoad());
  }
  cancelLoadAll() {
    this.store.dispatch(new ProjectListLoadCancel());
  }

  // Create
  create(project: IProjectCreate) {
    this.store.dispatch(new ProjectCreate(project));
  }
  // Update
  update(project: IProjectEdit) {
    this.store.dispatch(new ProjectUpdate(project));
  }
  // Delete
  delete(project: IProjectStoreEntity) {
    this.store.dispatch(new ProjectDelete(project));
  }

  // Get By Id
  loadById(projectId: number) {
    this.store.dispatch(new ProjectLoad(projectId));
  }
  cancelLoadById() {
    this.store.dispatch(new ProjectLoadCancel());
  }
  getById(projectId: number) {
    return this.store.select(projectById(projectId));
  }
}
