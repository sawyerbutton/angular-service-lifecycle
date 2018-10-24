import {Injectable, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements OnDestroy{
  constructor() {
    console.log('GlobalService is construct');
  }
  ngOnDestroy() {
    console.log('GlobalService is destroy');
  }
}
