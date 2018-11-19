import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";

import { map, catchError, switchMap, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

import { ${1:Entity}Service } from "../../services/${2:entity}.service";
import { ErrorOccurred } from "../error/error.actions";
import {
    ${1:Entity}ActionTypes,
    ${1:Entity}Create,
    ${1:Entity}CreateSuccess,
    ${1:Entity}CreateError,
    ${1:Entity}Load,
    ${1:Entity}LoadCancel,
    ${1:Entity}LoadSuccess,
    ${1:Entity}LoadError,
    ${1:Entity}Update,
    ${1:Entity}UpdateSuccess,
    ${1:Entity}UpdateError,
    ${1:Entity}Delete,
    ${1:Entity}DeleteSuccess,
    ${1:Entity}DeleteError,
    ${1:Entity}ListLoadSuccess,
    ${1:Entity}ListLoadCancel,
    ${1:Entity}ListLoad,
    ${1:Entity}ListLoadError
} from "./${2:entity}.actions";

import { TranslateService } from "src/app/modules/core/modules/translate/translate.service";
import { ToastService } from "src/app/modules/core/modules/toast/toast.service";

@Injectable()
export class ${1:Entity}Effects {
    constructor(
        private actions$: Actions,
        private toastService: ToastService,
        private translateService: TranslateService,
        private ${3:entity}Service: ${1:Entity}Service
    ) { }

    // LOAD / LOAD CANCEL
    @Effect()
    ${3:entity}LoadOrCancel$ = this.actions$.pipe(
        ofType<${1:Entity}Load | ${1:Entity}LoadCancel>(
            ${1:Entity}ActionTypes.Load,
            ${1:Entity}ActionTypes.LoadCancel
        ),
        switchMap(action => {
            return action.type === ${1:Entity}ActionTypes.LoadCancel
                ? of()
                : this.${3:entity}Service
                    .getById(action.payload.${3:entity}Id)
                    .pipe(
                        map(${4:entityParam} => 
                            new ${1:Entity}LoadSuccess(${4:entityParam})
                        ),
                        catchError(err =>
                            of(
                                new ErrorOccurred({
                                    fromAction: action,
                                    errorData: err,
                                    nextAction: new ${1:Entity}LoadError()
                                })
                            )
                        )
                    );
        })
    );

    // CREATE
    @Effect()
    ${3:entity}Create$ = this.actions$.pipe(
        ofType<${1:Entity}Create>(${1:Entity}ActionTypes.Create),
        switchMap(action =>
            this.${3:entity}Service.create(action.payload.${4:entityParam}).pipe(
                map(${4:entityParam} => {
                    this.toastService.success(
                        `ID:${${4:entityParam}.id}`,
                        this.translateService.translate(
                            "Entità creata correttamente",
                            "client_response.${3:entity}_created"
                        )
                    );
                    return new ${1:Entity}CreateSuccess(${3:entity});
                }),
                catchError(err =>
                    of(
                        new ErrorOccurred({
                            fromAction: action,
                            errorData: err,
                            nextAction: new ${1:Entity}CreateError(action.payload.${4:entityParam})
                        })
                    )
                )
            )
        )
    );

    // UPDATE
    @Effect()
    ${3:entity}Update$ = this.actions$.pipe(
        ofType<${1:Entity}Update>(${1:Entity}ActionTypes.Update),
        switchMap(action => {
            return this.${3:entity}Service.update(action.payload.${4:entityParam}).pipe(
                map(${4:entityParam} => {
                    return new ${1:Entity}UpdateSuccess(${4:entityParam});
                }),
                catchError(err =>
                    of(
                        new ErrorOccurred({
                            fromAction: action,
                            errorData: err,
                            nextAction: new ${1:Entity}UpdateError(action.payload.${4:entityParam})
                        })
                    )
                )
            );
        })
    );

    // DELETE
    @Effect()
    ${3:entity}Delete$ = this.actions$.pipe(
        ofType<${1:Entity}Delete>(${1:Entity}ActionTypes.Delete),
        switchMap(action =>
            this.${3:entity}Service.create(action.payload.${4:entityParam}).pipe(
                map(${4:entityParam} => new ${1:Entity}DeleteSuccess(${4:entityParam})),
                catchError(err =>
                    of(
                        new ErrorOccurred({
                            fromAction: action,
                            errorData: err,
                            nextAction: new ${1:Entity}DeleteError(action.payload.${4:entityParam})
                        })
                    )
                )
            )
        )
    );

    // LIST LOAD / LIST LOAD CANCEL
    @Effect()
    ${3:entity}ListLoadOrCancel$ = this.actions$.pipe(
        ofType<${1:Entity}ListLoad | ${1:Entity}ListLoadCancel>(
            ${1:Entity}ActionTypes.ListLoad,
            ${1:Entity}ActionTypes.ListLoadCancel
        ),
        switchMap(action =>
            action.type === ${1:Entity}ActionTypes.ListLoadCancel
                ? of()
                : this.${3:entity}Service.get${1:Entity}SelectList().pipe(
                    map(list => new ${1:Entity}ListLoadSuccess(list)),
                    catchError(err =>
                        of(
                            new ErrorOccurred({
                                fromAction: action,
                                errorData: err,
                                nextAction: new ${1:Entity}ListLoadError()
                            })
                        )
                    )
                )
        )
    );
}
