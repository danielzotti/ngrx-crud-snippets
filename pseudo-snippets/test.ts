import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Store } from "@ngrx/store";

import { AppState } from "../store/state";
import { IReportingPeriodEdit } from "src/app/components/reporting-period/edit/reporting-period-edit.models";
import {
  reportingPeriodCreateModel,
  reportingPeriodCreateModelIsLoading,
  reportingPeriodList,
  reportingPeriodIsFetching,
  reportingPeriodById,
  reportingPeriodEditModel,
  reportingPeriodEditModelIsLoading
} from "../store/reporting-period/reporting-period.selectors";
import {
  ReportingPeriodCreate,
  ReportingPeriodUpdate,
  ReportingPeriodLoadCancel,
  ReportingPeriodLoad,
  ReportingPeriodDelete,
  ReportingPeriodListLoad,
  ReportingPeriodListLoadCancel
} from "../store/reporting-period/reporting-period.actions";
import { IReportingPeriodCreate } from "../components/reporting-period/create/reporting-period-create.models";
import { IReportingPeriodDetail } from "../components/reporting-period/detail/reporting-period-detail.models";

@Injectable()
export class ReportingPeriodFacade {
  // Fetch
  isFetching$: Observable<boolean> = this.store.select(
    reportingPeriodIsFetching
  );

  // Create
  createModel$: Observable<Partial<IReportingPeriodCreate>> = this.store.select(
    reportingPeriodCreateModel
  );

  // Update
  editModel$: Observable<Partial<IReportingPeriodEdit>> = this.store.select(
    reportingPeriodEditModel
  );

  // List
  list$: Observable<Array<IReportingPeriodSelectListItem>> = this.store.select(
    reportingPeriodList
  );

  constructor(private store: Store<AppState>) {}

  // List
  loadAll() {
    this.store.dispatch(new ReportingPeriodListLoad());
  }
  cancelLoadAll() {
    this.store.dispatch(new ReportingPeriodListLoadCancel());
  }

  // Create
  create(reportingPeriod: IReportingPeriodCreate) {
    this.store.dispatch(new ReportingPeriodCreate(reportingPeriod));
  }
  // Update
  update(reportingPeriod: IReportingPeriodEdit) {
    this.store.dispatch(new ReportingPeriodUpdate(reportingPeriod));
  }
  // Delete
  delete(reportingPeriod: IReportingPeriodStoreEntity) {
    this.store.dispatch(new ReportingPeriodDelete(reportingPeriod));
  }

  // Create Model
  setReportingPeriodEditModel(reportingPeriod: IReportingPeriodEdit) {
    this.store.dispatch(new ReportingPeriodSetEditModel(reportingPeriod));
  }
  unsetReportingPeriodEditModel() {
    this.store.dispatch(new ReportingPeriodUnsetEditModel());
  }
  // Edit Model
  setReportingPeriodCreateModel(reportingPeriod: IReportingPeriodCreate) {
    this.store.dispatch(new ReportingPeriodSetCreateModel(reportingPeriod));
  }
  unsetReportingPeriodCreateModel() {
    this.store.dispatch(new ReportingPeriodUnsetCreateModel());
  }

  // Get By Id
  loadById(reportingPeriodId: number) {
    this.store.dispatch(new ReportingPeriodLoad(reportingPeriodId));
  }
  cancelLoadById() {
    this.store.dispatch(new ReportingPeriodLoadCancel());
  }
  getById(reportingPeriodId: number) {
    return this.store.select(reportingPeriodById(reportingPeriodId));
  }
}
