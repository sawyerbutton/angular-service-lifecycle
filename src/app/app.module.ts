import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalService} from './services/global.service';
import { HelloComponent } from './component/hello/hello.component';
import { TestDirective } from './directives/test.directive';
import {LiteralService} from './services/literal.service';
import {MY_CONFIG, MY_CONFIG_TOKEN} from './my.config';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [GlobalService, LiteralService, {provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG}]
})
export class AppModule { }
