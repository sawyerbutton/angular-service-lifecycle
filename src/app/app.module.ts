import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GlobalService} from './services/global.service';
import { HelloComponent } from './component/hello/hello.component';
import { TestDirective } from './directives/test.directive';
import {LiteralService} from './services/literal.service';
import {MY_CONFIG, MY_CONFIG_TOKEN} from './my.config';
import { FatherComponent } from './component/father/father.component';
import { SonComponent } from './component/son/son.component';
import { SelfSonComponent } from './component/self-son/self-son.component';
import { SkipSelfSonComponent } from './component/skip-self-son/skip-self-son.component';
import { SkipSelfOptionalSonComponent } from './component/skip-self-optional-son/skip-self-optional-son.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestDirective,
    FatherComponent,
    SonComponent,
    SelfSonComponent,
    SkipSelfSonComponent,
    SkipSelfOptionalSonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [GlobalService, LiteralService, {provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG}]
})
export class AppModule { }
