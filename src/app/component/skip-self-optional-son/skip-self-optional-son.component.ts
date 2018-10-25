import {Component, OnInit, Optional, SkipSelf} from '@angular/core';
import {LocalService} from '../../services/local.service';
import {InjectTestService} from '../../services/inject-test.service';

@Component({
  selector: 'app-skip-self-optional-son',
  templateUrl: './skip-self-optional-son.component.html',
  styleUrls: ['./skip-self-optional-son.component.css']
})
export class SkipSelfOptionalSonComponent implements OnInit {
  id$: any;
  constructor(
    // @SkipSelf() @Optional() private localService: LocalService
    @SkipSelf() @Optional() private injectTestService: InjectTestService
  ) { }

  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
  }
}
