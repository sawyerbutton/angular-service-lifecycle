import {Component, Host, OnInit} from '@angular/core';
import {InjectTestService} from '../../services/inject-test.service';

@Component({
  selector: 'app-view-provider-son',
  templateUrl: './view-provider-son.component.html',
  styleUrls: ['./view-provider-son.component.css']
})
export class ViewProviderSonComponent implements OnInit {
  id$: any;
  constructor(
    private injectTestService: InjectTestService
    // @Host() @Optional() private localService: LocalService
  ) { }

  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
    // this.id$ = this.localService.getLocalServiceID();
  }
}
