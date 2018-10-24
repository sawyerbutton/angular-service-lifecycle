import { Component, OnInit } from '@angular/core';
import {InjectTestService} from '../../services/inject-test.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
  providers: [InjectTestService]
})
export class FatherComponent implements OnInit {
  id$: any;
  constructor(
    private injectTestService: InjectTestService
  ) { }

  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
  }

}
