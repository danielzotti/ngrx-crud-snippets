import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";

import { map, catchError, switchMap, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import { ProjectService } from "../../services/project.service";
import { ErrorOccurred } from "../error/error.actions";
import {
  ProjectActionTypes,
  ProjectCreate,
  ProjectCreateSuccess,
  ProjectCreateError,
  ProjectLoad,
  ProjectLoadCancel,
  ProjectLoadSuccess,
  ProjectLoadError,
  ProjectUpdate,
  ProjectUpdateSuccess,
  ProjectUpdateError,
  ProjectDelete,
  ProjectDeleteSuccess,
  ProjectDeleteError,
  ProjectListLoadSuccess,
  ProjectListLoadCancel,
  ProjectListLoad,
  ProjectListLoadError
} from "./project.actions";

import { TranslateService } from "src/app/modules/core/modules/translate/translate.service";
import { ToastService } from "src/app/modules/core/modules/toast/toast.service";

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private translateService: TranslateService,
    private projectService: ProjectService
  ) {}

  // LOAD / LOAD CANCEL
  @Effect()
  projectLoadOrCancel$ = this.actions$.pipe(
    ofType<ProjectLoad | ProjectLoadCancel>(
      ProjectActionTypes.Load,
      ProjectActionTypes.LoadCancel
    ),
    switchMap(action => {
      return action.type === ProjectActionTypes.LoadCancel
        ? of()
        : this.projectService.getById(action.payload.projectId).pipe(
            map(project => new ProjectLoadSuccess(project)),
            catchError(err =>
              of(
                new ErrorOccurred({
                  fromAction: action,
                  errorData: err,
                  nextAction: new ProjectLoadError()
                })
              )
            )
          );
    })
  );

  // CREATE
  @Effect()
  projectCreate$ = this.actions$.pipe(
    ofType<ProjectCreate>(ProjectActionTypes.Create),
    switchMap(action =>
      this.projectService.create(action.payload.project).pipe(
        map(project => {
          this.toastService.success(
            `ID:${project.id}`,
            this.translateService.translate(
              "Entità creata correttamente",
              "client_response.project_created"
            )
          );
          return new ProjectCreateSuccess(project);
        }),
        catchError(err =>
          of(
            new ErrorOccurred({
              fromAction: action,
              errorData: err,
              nextAction: new ProjectCreateError(action.payload.project)
            })
          )
        )
      )
    )
  );

  // UPDATE
  @Effect()
  projectUpdate$ = this.actions$.pipe(
    ofType<ProjectUpdate>(ProjectActionTypes.Update),
    switchMap(action => {
      return this.projectService.update(action.payload.project).pipe(
        map(project => {
          return new ProjectUpdateSuccess(project);
        }),
        catchError(err =>
          of(
            new ErrorOccurred({
              fromAction: action,
              errorData: err,
              nextAction: new ProjectUpdateError(action.payload.project)
            })
          )
        )
      );
    })
  );

  // DELETE
  @Effect()
  projectDelete$ = this.actions$.pipe(
    ofType<ProjectDelete>(ProjectActionTypes.Delete),
    switchMap(action =>
      this.projectService.delete(action.payload.project.id).pipe(
        map(project => new ProjectDeleteSuccess(project)),
        catchError(err =>
          of(
            new ErrorOccurred({
              fromAction: action,
              errorData: err,
              nextAction: new ProjectDeleteError(action.payload.project)
            })
          )
        )
      )
    )
  );

  // LIST LOAD / LIST LOAD CANCEL
  @Effect()
  projectListLoadOrCancel$ = this.actions$.pipe(
    ofType<ProjectListLoad | ProjectListLoadCancel>(
      ProjectActionTypes.ListLoad,
      ProjectActionTypes.ListLoadCancel
    ),
    switchMap(action =>
      action.type === ProjectActionTypes.ListLoadCancel
        ? of()
        : this.projectService.getSelectList().pipe(
            map(list => new ProjectListLoadSuccess(list)),
            catchError(err =>
              of(
                new ErrorOccurred({
                  fromAction: action,
                  errorData: err,
                  nextAction: new ProjectListLoadError()
                })
              )
            )
          )
    )
  );
}
