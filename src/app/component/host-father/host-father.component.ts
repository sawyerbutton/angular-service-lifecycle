import { Component, OnInit } from '@angular/core';
import {InjectTestService} from '../../services/inject-test.service';

@Component({
  selector: 'app-host-father',
  templateUrl: './host-father.component.html',
  styleUrls: ['./host-father.component.css'],
  providers: [InjectTestService]
})
export class HostFatherComponent implements OnInit {
  id$: any;
  constructor(
    private injectTestService: InjectTestService
  ) { }
  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
  }

}
