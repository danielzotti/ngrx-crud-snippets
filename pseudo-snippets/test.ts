  Undelete = '[${1:Entity}] Undelete',
  UndeleteSuccess = '[ReportinPeriod] Undelete Success',
  UndeleteError = '[ReportinPeriod] Undelete Error',


// UNDELETE
export class ${1:Entity}Undelete implements Action {
    readonly type = ${1:Entity}ActionTypes.Undelete;
    payload: { ${2:parameterName}: I${1:Entity}Edit };
    constructor(public ${2:parameterName}: I${1:Entity}Edit) {
      this.payload = { ${2:parameterName} };
    }
  }
  export class ${1:Entity}UndeleteSuccess implements Action {
    readonly type = ${1:Entity}ActionTypes.UndeleteSuccess;
    payload: { ${2:parameterName}: ${5:I${1:Entity}Db} };
    constructor(public ${2:parameterName}: ${5:I${1:Entity}Db}) {
      this.payload = { ${2:parameterName} };
    }
  }
  export class ${1:Entity}UndeleteError implements Action {
    readonly type = ${1:Entity}ActionTypes.UndeleteError;
    constructor() {}
  }