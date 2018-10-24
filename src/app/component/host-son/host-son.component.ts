import {Component, Host, OnInit, Optional} from '@angular/core';
import {InjectTestService} from '../../services/inject-test.service';
import {LocalService} from '../../services/local.service';

@Component({
  selector: 'app-host-son',
  templateUrl: './host-son.component.html',
  styleUrls: ['./host-son.component.css']
})
export class HostSonComponent implements OnInit {
  id$: any;
  constructor(
    @Host() private injectTestService: InjectTestService
    // @Host() @Optional() private localService: LocalService
  ) { }

  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
    // this.id$ = this.localService.getLocalServiceID();
  }
}
