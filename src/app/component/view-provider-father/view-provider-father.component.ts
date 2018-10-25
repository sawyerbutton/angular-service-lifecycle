import { Component, OnInit } from '@angular/core';
import {InjectTestService} from '../../services/inject-test.service';

@Component({
  selector: 'app-view-provider-father',
  templateUrl: './view-provider-father.component.html',
  styleUrls: ['./view-provider-father.component.css'],
  // viewProviders: [InjectTestService]
  providers: [InjectTestService]
})
export class ViewProviderFatherComponent implements OnInit {
  id$: any;
  constructor(
    private injectTestService: InjectTestService
  ) { }
  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
  }
}
