import {Inject, Injectable} from '@angular/core';
import { UUID } from 'angular2-uuid';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
export class InjectTestService {
  _id: string;
  constructor(
    @Inject(HttpClient) private http
  ) {
    this._id = UUID.UUID();
  }
  getServiceId() {
    return of(this._id);
  }
}
