import {Inject, Injectable} from '@angular/core';
import { UUID } from 'angular2-uuid';
import {HttpClient} from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
export class InjectTestService {
  private _id: string;
  constructor(
    @Inject(HttpClient) private http
  ) {
    this._id = UUID.UUID();
  }
}
