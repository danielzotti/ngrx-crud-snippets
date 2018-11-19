import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from 'src/app/modules/core/config/config.service';
import { I${1:Entity}Db } from '../shared/models/db/${2:entity}.db.models';

@Injectable()
export class ${1:Entity}Service {
  public static apiBaseUrl = '/${3:entity-url}';
  public static apiUrl: string =
    ConfigService.API_BASE_URL + ${1:Entity}Service.apiBaseUrl;

  constructor(private http: HttpClient, private config: ConfigService) {}

  // ENTITY
  create(${4:entityParam}) {
    return this.http.post<I${1:Entity}Db>(
      ${1:Entity}Service.apiUrl,
      ${4:entityParam}
    );
  }

  update(${4:entityParam}) {
    return this.http.put<I${1:Entity}Db>(
      ${1:Entity}Service.apiUrl,
      ${4:entityParam}
    );
  }

  delete(${4:entityParam}Id) {
    return this.http.delete<I${1:Entity}Db>(
      `${${1:Entity}Service.apiUrl}/${${4:entityParam}Id}`
    );
  }

  getById(${4:entityParam}Id: number) {
    return this.http.get<I${1:Entity}Db>(
      `${${1:Entity}Service.apiUrl}/${${4:entityParam}Id}`
    );
  }

  // LIST
  getAll() {
    return this.http.post<Array<I${1:Entity}Db>>(
      `${${1:Entity}Service.apiUrl}/filter`,
      null
    );
  }

  // SELECT LIST
  getSelectList() {
    return this.http.post<Array<I${1:Entity}Db>>(
      `${${1:Entity}Service.apiUrl}/filter`,
      null
    );
  }
}
