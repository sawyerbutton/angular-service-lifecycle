import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit {
  isActive: boolean;

  constructor() {
    console.log('appComponent => constructor');
    this.isActive = false;
  }

  toggle() {
    this.isActive = !this.isActive;
  }

  ngOnInit() {
    console.log('appComponent => ngOnInit');
  }

  ngOnDestroy() {
    console.log('appComponent => ngOnDestroy');
  }

  ngAfterContentChecked() {
    console.log('appComponent => ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('appComponent => ngAfterViewChecked');
  }
  ngAfterViewInit() {
    console.log('appComponent => ngAfterViewInit');
  }
  ngAfterContentInit() {
    console.log('appComponent => ngAfterContentInit');
  }
}
