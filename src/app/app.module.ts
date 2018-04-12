import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CoreModule} from './core';
import * as example1 from './features/service';
import * as shared from './features/shared';
import {ParentComponent} from './features/cmpDI/parent.component';
import {ChildComponent} from './features/cmpDI/child.component';
import {OuterComponent} from './features/inheritance/outer.component';
import {InnerComponent} from './features/inheritance/inner.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    OuterComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    example1.ExampleModule,
    shared.SharedModule
    // , shared.SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
