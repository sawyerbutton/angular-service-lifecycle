import {Component, OnInit, SkipSelf} from '@angular/core';
import {InjectTestService} from '../../services/inject-test.service';

@Component({
  selector: 'app-skip-self-son',
  templateUrl: './skip-self-son.component.html',
  styleUrls: ['./skip-self-son.component.css'],
  providers: [InjectTestService]
})
export class SkipSelfSonComponent implements OnInit {
  id$: any;
  constructor(
    @SkipSelf() private injectTestService: InjectTestService
  ) { }

  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
  }
}
