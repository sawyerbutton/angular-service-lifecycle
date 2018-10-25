import {Component, Injector, OnInit, ReflectiveInjector} from '@angular/core';
import { InjectTestService} from '../../services/inject-test.service';

@Component({
  selector: 'app-manual-injector-son',
  templateUrl: './manual-injector-son.component.html',
  styleUrls: ['./manual-injector-son.component.css']
})
export class ManualInjectorSonComponent implements OnInit {
  id$: any;
  public injectTestService: InjectTestService;
  constructor(
    private injector: Injector
  ) {
    console.log(this.injectTestService);
    console.log(this.injector);
  }

  ngOnInit() {
    // 手动创建InjectTestService
    this.injectTestService = this.injector.get(InjectTestService);
    console.log(this.injectTestService);
    this.id$ = this.injectTestService.getServiceId();
  }

}
