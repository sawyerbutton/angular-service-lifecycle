import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LocalService} from '../../services/local.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [LocalService]
})
export class HelloComponent implements OnInit, OnDestroy{
  @Input() name: string;
  constructor(
    private localService: LocalService,
    private globalService: GlobalService
  ) {
    console.log('constructor => helloComponent : name = ' + this.name);
  }

  ngOnInit() {
    console.log('hello component init : name = ' + this.name);
  }

  ngOnDestroy() {
    console.log('hello component destroy');
  }

}
