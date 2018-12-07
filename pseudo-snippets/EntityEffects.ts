import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";

import { map, catchError, switchMap, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import { EntityService } from "../../services/entity.service";
import { ErrorOccurred } from "../error/error.actions";
import {
  EntityActionTypes,
  EntityCreate,
  EntityCreateSuccess,
  EntityCreateError,
  EntityLoad,
  EntityLoadCancel,
  EntityLoadSuccess,
  EntityLoadError,
  EntityUpdate,
  EntityUpdateSuccess,
  EntityUpdateError,
  EntityDelete,
  EntityDeleteSuccess,
  EntityDeleteError,
  EntityListLoadSuccess,
  EntityListLoadCancel,
  EntityListLoad,
  EntityListLoadError
} from "./entity.actions";

import { TranslateService } from "src/app/modules/core/modules/translate/translate.service";
import { ToastService } from "src/app/modules/core/modules/toast/toast.service";

@Injectable()
export class EntityEffects {
  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private translateService: TranslateService,
    private entityService: EntityService
  ) {}

  // LOAD / LOAD CANCEL
  @Effect()
  entityLoadOrCancel$ = this.actions$.pipe(
    ofType<EntityLoad | EntityLoadCancel>(
      EntityActionTypes.Load,
      EntityActionTypes.LoadCancel
    ),
    switchMap(action => {
      return action.type === EntityActionTypes.LoadCancel
        ? of()
        : this.entityService.getById(action.payload.entityId).pipe(
            map(entityParam => new EntityLoadSuccess(entityParam)),
            catchError(err =>
              of(
                new ErrorOccurred({
                  fromAction: action,
                  errorData: err,
                  nextAction: new EntityLoadError()
                })
              )
            )
          );
    })
  );

  // CREATE
  @Effect()
  entityCreate$ = this.actions$.pipe(
    ofType<EntityCreate>(EntityActionTypes.Create),
    switchMap(action =>
      this.entityService.create(action.payload.entityParam).pipe(
        tap(entityParam =>
          this.toastService.success(
            `ID:${entityParam.id}`,
            this.translateService.translate(
              "Entità creata correttamente",
              "client_response.entity_translate_key_created"
            )
          )
        ),
        map(entityParam => new EntityCreateSuccess(entityParam)),
        catchError(err =>
          of(
            new ErrorOccurred({
              fromAction: action,
              errorData: err,
              nextAction: new EntityCreateError(action.payload.entityParam)
            })
          )
        )
      )
    )
  );

  // UPDATE
  @Effect()
  entityUpdate$ = this.actions$.pipe(
    ofType<EntityUpdate>(EntityActionTypes.Update),
    switchMap(action => {
      return this.entityService.update(action.payload.entityParam).pipe(
        tap(entityParam =>
          this.toastService.success(
            `ID:${entityParam.id}`,
            this.translateService.translate(
              "Entità modificata correttamente",
              "client_response.entity_translate_key_updated"
            )
          )
        ),
        map(entityParam => new EntityUpdateSuccess(entityParam)),
        catchError(err =>
          of(
            new ErrorOccurred({
              fromAction: action,
              errorData: err,
              nextAction: new EntityUpdateError(action.payload.entityParam)
            })
          )
        )
      );
    })
  );

  // DELETE
  @Effect()
  entityDelete$ = this.actions$.pipe(
    ofType<EntityDelete>(EntityActionTypes.Delete),
    switchMap(action =>
      this.entityService.delete(action.payload.entityParam.id).pipe(
        // map(entityParam => new EntityDeleteSuccess(entityParam)),
        map(entityParam => {
          if (!entityParam) {
            return new EntityDeleteSuccessPermanent(action.payload.entityParam);
          }
          return new EntityDeleteSuccessLogical(entityParam);
        }),
        catchError(err =>
          of(
            new ErrorOccurred({
              fromAction: action,
              errorData: err,
              nextAction: new EntityDeleteError(action.payload.entityParam)
            })
          )
        )
      )
    )
  );

  // UNDELETE
  @Effect()
  entityUndelete$ = this.actions$.pipe(
    ofType<entityUndelete>(entityActionTypes.Undelete),
    switchMap(action =>
      this.entityService.undelete(action.payload.entityParam.id).pipe(
        map(entityParam => {
          return new entityUndeleteSuccess(entityParam);
        }),
        catchError(err =>
          of(
            new ErrorOccurred({
              fromAction: action,
              errorData: err,
              nextAction: new entityUndeleteError()
            })
          )
        )
      )
    )
  );

  // LIST LOAD / LIST LOAD CANCEL
  @Effect()
  entityListLoadOrCancel$ = this.actions$.pipe(
    ofType<EntityListLoad | EntityListLoadCancel>(
      EntityActionTypes.ListLoad,
      EntityActionTypes.ListLoadCancel
    ),
    switchMap(action =>
      action.type === EntityActionTypes.ListLoadCancel
        ? of()
        : this.entityService.getSelectList().pipe(
            map(list => new EntityListLoadSuccess(list)),
            catchError(err =>
              of(
                new ErrorOccurred({
                  fromAction: action,
                  errorData: err,
                  nextAction: new EntityListLoadError()
                })
              )
            )
          )
    )
  );
}
