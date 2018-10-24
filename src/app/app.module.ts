import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GlobalService} from './services/global.service';
import { HelloComponent } from './component/hello/hello.component';
import { TestDirective } from './directives/test.directive';

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
  providers: [GlobalService]
})
export class AppModule { }
