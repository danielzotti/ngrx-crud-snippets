export class EntityAction implements Action {
  readonly type = EntityActionTypes.Action;
  payload: { payload: PayloadType };
  constructor(payload: PayloadType) {
    this.payload = { payload };
  }
}
