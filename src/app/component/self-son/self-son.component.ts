import {Component, OnInit, Self} from '@angular/core';
import {InjectTestService} from '../../services/inject-test.service';

@Component({
  selector: 'app-self-son',
  templateUrl: './self-son.component.html',
  styleUrls: ['./self-son.component.css'],
  providers: [InjectTestService]
})
export class SelfSonComponent implements OnInit {
  id$: any;
  constructor(
    @Self() private injectTestService: InjectTestService
  ) { }

  ngOnInit() {
    this.id$ = this.injectTestService.getServiceId();
  }
}
