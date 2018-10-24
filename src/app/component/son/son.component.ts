import { Component, OnInit } from '@angular/core';
import {InjectTestService} from '../../services/inject-test.service';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  id$: any;
  constructor(
    private injectTestService: InjectTestService
  ) { }

  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
  }

}
