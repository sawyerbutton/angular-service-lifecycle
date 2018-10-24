import { Injectable, Inject } from '@angular/core';
import {MY_CONFIG_TOKEN} from '../my.config';

// @Injectable({
//   providedIn: 'root'
// })
export class LiteralService {

  constructor(
    @Inject(MY_CONFIG_TOKEN) config: object
  ) {
    console.log(config);
  }
}
