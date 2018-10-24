import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Injectable, OnDestroy, OnInit} from '@angular/core';
import { UUID} from 'angular2-uuid';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService implements OnDestroy, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit {
  constructor() {
    console.log('localService is construct');
  }
  ngOnInit() {
    console.log('localService is init');
  }
  ngOnDestroy() {
    console.log('localService is destroy');
  }
  ngAfterViewInit() {
    console.log('localService is AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('localService is AfterViewChecked');
  }
  ngAfterContentChecked() {
    console.log('localService is AfterContentChecked');
  }
  ngAfterContentInit() {
    console.log('localService is AfterContentInit');
  }
  getLocalServiceID() {
    return of(UUID.UUID());
  }
}
